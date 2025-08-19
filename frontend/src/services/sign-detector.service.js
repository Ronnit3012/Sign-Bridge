// services/sign-detector.service.js
import tfService from './tensorflow.service.js';
import mediaPipeService from './mediapipe.service.js';

const WINDOW_SIZE = 10; // Number of frames to consider for shoulder width normalization
const EMPTY_LANDMARK = { x: 0, y: 0, z: 0 };

export class SignDetectorService {
  constructor() {
    this.model = null;
    this.shoulderWidth = new Array(WINDOW_SIZE).fill(0);
    this.shoulderWidthIndex = 0;
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized) return;
    
    await Promise.all([
      tfService.initialize(),
      mediaPipeService.initialize()
    ]);
    
    this.initialized = true;
  }

  async loadModel() {
    await this.initialize();

    try {
      this.model = await tfService.loadModel('/models/sign-detector/model.json');
      console.log('Sign detector model loaded successfully');
    } catch (error) {
      console.error('Failed to load sign detector model:', error);
      throw error;
    }
  }

  /**
   * Detect if signing is occurring in the current pose
   * @param {Object} pose - Pose object with landmarks from MediaPipe
   * @returns {boolean} - True if signing is detected
   */
  async detectSigning(pose) {
    if (!this.model) {
      console.warn('Sign detector model not loaded');
      return false;
    }

    const normalizedPose = this.normalizePose(pose);
    if (!normalizedPose) {
      return false; // Not enough frames for normalization
    }

    return tfService.tidy(() => {
      try {
        // Convert normalized pose to tensor
        // Model expects [batch_size, sequence_length, features]
        const poseData = normalizedPose.map(landmark => [landmark.x, landmark.y]);
        const poseTensor = tfService.tensor2d([poseData]); // Add batch dimension
        
        // Get prediction
        const prediction = this.model.predict(poseTensor);
        const probability = prediction.dataSync()[0];
        
        // Threshold for signing detection (can be adjusted)
        const threshold = 0.5;
        const isSigning = probability > threshold;
        
        console.log(`Sign detection probability: ${probability.toFixed(3)}, Signing: ${isSigning}`);
        return isSigning;
        
      } catch (error) {
        console.error('Error in sign detection:', error);
        return false;
      }
    });
  }

  /**
   * Normalize pose based on shoulder width for consistent scale
   * @param {Object} pose - Pose object with landmarks
   * @returns {Array|null} - Normalized landmarks or null if not enough data
   */
  normalizePose(pose) {
    // Get landmarks with defaults if missing
    const bodyLandmarks = pose.poseLandmarks || 
      new Array(Object.keys(mediaPipeService.POSE_LANDMARKS || {}).length).fill(EMPTY_LANDMARK);
    const leftHandLandmarks = pose.leftHandLandmarks || new Array(21).fill(EMPTY_LANDMARK);
    const rightHandLandmarks = pose.rightHandLandmarks || new Array(21).fill(EMPTY_LANDMARK);
    
    // Combine all landmarks
    const allLandmarks = bodyLandmarks
      .concat(leftHandLandmarks, rightHandLandmarks)
      .map(landmark => this.isValidLandmark(landmark) ? landmark : EMPTY_LANDMARK);

    // Get shoulder landmarks for normalization
    const leftShoulderIdx = mediaPipeService.POSE_LANDMARKS?.LEFT_SHOULDER || 11;
    const rightShoulderIdx = mediaPipeService.POSE_LANDMARKS?.RIGHT_SHOULDER || 12;
    
    const leftShoulder = allLandmarks[leftShoulderIdx];
    const rightShoulder = allLandmarks[rightShoulderIdx];

    // Calculate and store shoulder width if both shoulders are visible
    if (leftShoulder.x > 0 && rightShoulder.x > 0) {
      const shoulderDistance = this.distance(leftShoulder, rightShoulder);
      this.shoulderWidth[this.shoulderWidthIndex % WINDOW_SIZE] = shoulderDistance;
      this.shoulderWidthIndex++;
    }

    // Need minimum number of frames for stable normalization
    if (this.shoulderWidthIndex < WINDOW_SIZE) {
      return null;
    }

    // Calculate mean shoulder width
    const meanShoulders = this.shoulderWidth.reduce((a, b) => a + b, 0) / WINDOW_SIZE;
    
    if (meanShoulders <= 0) {
      return null;
    }

    // Normalize all landmarks by shoulder width
    const normalizedLandmarks = allLandmarks.map(landmark => ({
      x: landmark.x / meanShoulders,
      y: landmark.y / meanShoulders
    }));

    // Convert to OpenPose-like format (model was trained on OpenPose)
    return this.convertToOpenPoseFormat(normalizedLandmarks);
  }

  /**
   * Convert MediaPipe landmarks to OpenPose-like format
   * @param {Array} landmarks - MediaPipe landmarks
   * @returns {Array} - OpenPose-like landmarks
   */
  convertToOpenPoseFormat(landmarks) {
    const poseIndices = mediaPipeService.POSE_LANDMARKS || {};
    
    // Calculate neck position (midpoint between shoulders)
    const leftShoulder = landmarks[poseIndices.LEFT_SHOULDER || 11];
    const rightShoulder = landmarks[poseIndices.RIGHT_SHOULDER || 12];
    const neck = {
      x: (leftShoulder.x + rightShoulder.x) / 2,
      y: (leftShoulder.y + rightShoulder.y) / 2
    };

    // Map to OpenPose-like structure (25 body + 42 hands = 67 points)
    const openPoseLike = [
      landmarks[poseIndices.NOSE || 0] || EMPTY_LANDMARK,
      neck,
      landmarks[poseIndices.RIGHT_SHOULDER || 12] || EMPTY_LANDMARK,
      landmarks[poseIndices.RIGHT_ELBOW || 14] || EMPTY_LANDMARK,
      landmarks[poseIndices.RIGHT_WRIST || 16] || EMPTY_LANDMARK,
      landmarks[poseIndices.LEFT_SHOULDER || 11] || EMPTY_LANDMARK,
      landmarks[poseIndices.LEFT_ELBOW || 13] || EMPTY_LANDMARK,
      landmarks[poseIndices.LEFT_WRIST || 15] || EMPTY_LANDMARK,
      EMPTY_LANDMARK, // Midhip (not available in MediaPipe)
      landmarks[poseIndices.RIGHT_HIP || 24] || EMPTY_LANDMARK,
      landmarks[poseIndices.RIGHT_KNEE || 26] || EMPTY_LANDMARK,
      landmarks[poseIndices.RIGHT_ANKLE || 28] || EMPTY_LANDMARK,
      landmarks[poseIndices.LEFT_HIP || 23] || EMPTY_LANDMARK,
      landmarks[poseIndices.LEFT_KNEE || 25] || EMPTY_LANDMARK,
      landmarks[poseIndices.LEFT_ANKLE || 27] || EMPTY_LANDMARK,
      landmarks[poseIndices.RIGHT_EYE || 5] || EMPTY_LANDMARK,
      landmarks[poseIndices.LEFT_EYE || 2] || EMPTY_LANDMARK,
      landmarks[poseIndices.RIGHT_EAR || 8] || EMPTY_LANDMARK,
      landmarks[poseIndices.LEFT_EAR || 7] || EMPTY_LANDMARK,
      // Fill remaining body points with empty landmarks
      ...new Array(6).fill(EMPTY_LANDMARK)
    ];

    // Add hand landmarks (21 points each)
    const bodyLength = 33; // MediaPipe body landmarks
    const leftHandStart = bodyLength;
    const rightHandStart = bodyLength + 21;

    // Left hand landmarks
    for (let i = 0; i < 21; i++) {
      openPoseLike.push(landmarks[leftHandStart + i] || EMPTY_LANDMARK);
    }

    // Right hand landmarks
    for (let i = 0; i < 21; i++) {
      openPoseLike.push(landmarks[rightHandStart + i] || EMPTY_LANDMARK);
    }

    return openPoseLike;
  }

  /**
   * Calculate Euclidean distance between two points (ignoring Z)
   * @param {Object} p1 - First point with x, y properties
   * @param {Object} p2 - Second point with x, y properties
   * @returns {number} - Distance
   */
  distance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  /**
   * Check if a landmark is valid
   * @param {Object} landmark - Landmark object
   * @returns {boolean} - True if valid
   */
  isValidLandmark(landmark) {
    return landmark && 
           typeof landmark.x === 'number' && 
           typeof landmark.y === 'number' &&
           !isNaN(landmark.x) && 
           !isNaN(landmark.y) &&
           landmark.x >= 0 && 
           landmark.y >= 0;
  }

  /**
   * Reset the normalization window (useful when switching video sources)
   */
  resetNormalization() {
    this.shoulderWidth.fill(0);
    this.shoulderWidthIndex = 0;
    console.log('Sign detector normalization reset');
  }

  /**
   * Get current normalization status
   * @returns {Object} - Status information
   */
  getNormalizationStatus() {
    return {
      framesProcessed: this.shoulderWidthIndex,
      framesNeeded: WINDOW_SIZE,
      isReady: this.shoulderWidthIndex >= WINDOW_SIZE,
      meanShoulderWidth: this.shoulderWidth.reduce((a, b) => a + b, 0) / WINDOW_SIZE
    };
  }

  /**
   * Cleanup method
   */
  dispose() {
    if (this.model) {
      this.model.dispose();
      this.model = null;
    }
    this.resetNormalization();
    this.initialized = false;
    console.log('SignDetectorService disposed');
  }
}

export default new SignDetectorService();
