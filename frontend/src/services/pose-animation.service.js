// services/pose-animation.service.js
import tfService from './tensorflow.service.js';

// Animation bone names for 3D avatar (from Mixamo Remy character)
const ANIMATION_KEYS = [
  'mixamorigHips',
  'mixamorigSpine',
  'mixamorigSpine1',
  'mixamorigSpine2',
  'mixamorigNeck',
  'mixamorigHead',
  'mixamorigLeftShoulder',
  'mixamorigLeftArm',
  'mixamorigLeftForeArm',
  'mixamorigLeftHand',
  'mixamorigLeftHandThumb1',
  'mixamorigLeftHandThumb2',
  'mixamorigLeftHandThumb3',
  'mixamorigLeftHandIndex1',
  'mixamorigLeftHandIndex2',
  'mixamorigLeftHandIndex3',
  'mixamorigLeftHandMiddle1',
  'mixamorigLeftHandMiddle2',
  'mixamorigLeftHandMiddle3',
  'mixamorigLeftHandRing1',
  'mixamorigLeftHandRing2',
  'mixamorigLeftHandRing3',
  'mixamorigLeftHandPinky1',
  'mixamorigLeftHandPinky2',
  'mixamorigLeftHandPinky3',
  'mixamorigRightShoulder',
  'mixamorigRightArm',
  'mixamorigRightForeArm',
  'mixamorigRightHand',
  'mixamorigRightHandThumb1',
  'mixamorigRightHandThumb2',
  'mixamorigRightHandThumb3',
  'mixamorigRightHandIndex1',
  'mixamorigRightHandIndex2',
  'mixamorigRightHandIndex3',
  'mixamorigRightHandMiddle1',
  'mixamorigRightHandMiddle2',
  'mixamorigRightHandMiddle3',
  'mixamorigRightHandRing1',
  'mixamorigRightHandRing2',
  'mixamorigRightHandRing3',
  'mixamorigRightHandPinky1',
  'mixamorigRightHandPinky2',
  'mixamorigRightHandPinky3',
  'mixamorigLeftUpLeg',
  'mixamorigLeftLeg',
  'mixamorigLeftFoot',
  'mixamorigLeftToeBase',
  'mixamorigRightUpLeg',
  'mixamorigRightLeg',
  'mixamorigRightFoot',
  'mixamorigRightToeBase'
];

export class PoseAnimationService {
  constructor() {
    this.model = null;
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized) return;
    await tfService.initialize();
    this.initialized = true;
  }

  async loadModel() {
    await this.initialize();

    try {
      this.model = await tfService.loadModel('/models/pose-animation/model.json');
      console.log('Pose animation model loaded successfully');
    } catch (error) {
      console.error('Failed to load pose animation model:', error);
      throw error;
    }
  }

  /**
   * Generate 3D avatar animations from pose sequence
   * @param {Array} poseSequence - Array of pose objects
   * @returns {Object|null} - Animation tracks with quaternion rotations
   */
  generateAnimations(poseSequence) {
    if (!this.model || !poseSequence?.length) {
      console.warn('Pose animation model not loaded or no poses provided');
      return null;
    }

    return tfService.tidy(() => {
      try {
        // Normalize poses
        const normalizedPoses = poseSequence.map(pose => this.normalizePose(pose));
        
        // Stack poses into sequence tensor
        const poseStack = tfService.stack(normalizedPoses, 1);
        
        // Get animation predictions
        const prediction = this.model.predict(poseStack);
        
        // Reshape to [sequence_length, num_bones, 4] (quaternions)
        const animations = tfService.reshape(prediction, [
          normalizedPoses.length, 
          ANIMATION_KEYS.length, 
          4
        ]);
        
        // Transpose to [num_bones, sequence_length, 4]
        const keySequences = tfService.transpose(animations, [1, 0, 2]);
        
        // Convert to JavaScript arrays and create animation tracks
        const tracks = {};
        const keySequencesData = keySequences.arraySync();
        
        ANIMATION_KEYS.forEach((key, i) => {
          tracks[key] = keySequencesData[i];
        });
        
        console.log(`Generated animations for ${poseSequence.length} frames`);
        return tracks;
        
      } catch (error) {
        console.error('Error generating animations:', error);
        return null;
      }
    });
  }

  /**
   * Generate single frame animation from single pose
   * @param {Object} pose - Single pose object
   * @returns {Object|null} - Single frame animation data
   */
  generateSingleFrameAnimation(pose) {
    if (!this.model || !pose) {
      return null;
    }

    return tfService.tidy(() => {
      try {
        const normalizedPose = this.normalizePose(pose);
        
        // Add sequence dimension for single frame
        const poseInput = tfService.reshape(normalizedPose, [1, 1, 75 * 3]); // 75 landmarks * 3 coords
        
        const prediction = this.model.predict(poseInput);
        
        // Remove sequence dimension and reshape to [num_bones, 4]
        const frameAnimations = tfService.reshape(
          tfService.squeeze(prediction, [0]), 
          [ANIMATION_KEYS.length, 4]
        );
        
        const animationsData = frameAnimations.arraySync();
        
        const frameData = {};
        ANIMATION_KEYS.forEach((key, i) => {
          frameData[key] = animationsData[i]; // Quaternion [x, y, z, w]
        });
        
        return frameData;
        
      } catch (error) {
        console.error('Error generating single frame animation:', error);
        return null;
      }
    });
  }

  /**
   * Normalize pose landmarks for animation model
   * @param {Object} pose - Pose object with landmarks
   * @returns {Tensor} - Normalized pose tensor
   */
  normalizePose(pose) {
    // Combine all landmarks: body (33) + left hand (21) + right hand (21) = 75 points
    const allLandmarks = [
      ...(pose.poseLandmarks || new Array(33).fill({ x: 0, y: 0, z: 0 })),
      ...(pose.leftHandLandmarks || new Array(21).fill({ x: 0, y: 0, z: 0 })),
      ...(pose.rightHandLandmarks || new Array(21).fill({ x: 0, y: 0, z: 0 }))
    ];

    // Convert to normalized coordinates
    const normalizedData = allLandmarks.map(landmark => {
      // Handle missing or invalid landmarks
      if (!landmark || typeof landmark.x !== 'number' || isNaN(landmark.x)) {
        return [0, 0, 0];
      }
      
      return [
        landmark.x || 0,
        landmark.y || 0,
        landmark.z || 0
      ];
    });

    return tfService.tensor2d(normalizedData);
  }

  /**
   * Convert animation tracks to Three.js compatible format
   * @param {Object} tracks - Animation tracks from model
   * @param {number} fps - Target frame rate
   * @returns {Object} - Three.js compatible animation data
   */
  convertToThreeJSAnimation(tracks, fps = 30) {
    if (!tracks) return null;

    const times = [];
    const threeJSTracks = [];

    // Calculate time values
    const numFrames = Object.values(tracks)[0]?.length || 0;
    for (let i = 0; i < numFrames; i++) {
      times.push(i / fps);
    }

    // Convert each bone track
    Object.entries(tracks).forEach(([boneName, quaternions]) => {
      const values = [];
      
      quaternions.forEach(quat => {
        // Convert from [x, y, z, w] to Three.js format
        values.push(quat[0], quat[1], quat[2], quat[3]);
      });

      threeJSTracks.push({
        name: `${boneName}.quaternion`,
        type: 'quaternion',
        times: times.slice(),
        values: values
      });
    });

    return {
      name: 'PoseAnimation',
      duration: (numFrames - 1) / fps,
      tracks: threeJSTracks
    };
  }

  /**
   * Get animation bone names
   * @returns {Array} - Array of bone names
   */
  getAnimationKeys() {
    return [...ANIMATION_KEYS];
  }

  /**
   * Get model information
   * @returns {Object|null} - Model info or null if not loaded
   */
  getModelInfo() {
    if (!this.model) return null;

    return {
      inputShape: this.model.inputs[0].shape,
      outputShape: this.model.outputs[0].shape,
      numBones: ANIMATION_KEYS.length,
      boneNames: ANIMATION_KEYS
    };
  }

  /**
   * Validate pose sequence for animation generation
   * @param {Array} poseSequence - Array of pose objects
   * @returns {Object} - Validation result
   */
  validatePoseSequence(poseSequence) {
    if (!Array.isArray(poseSequence)) {
      return { 
        isValid: false, 
        error: 'Pose sequence must be an array' 
      };
    }

    if (poseSequence.length === 0) {
      return { 
        isValid: false, 
        error: 'Pose sequence cannot be empty' 
      };
    }

    const invalidPoses = poseSequence.filter((pose, index) => {
      const hasBodyLandmarks = pose.poseLandmarks && 
        Array.isArray(pose.poseLandmarks) && 
        pose.poseLandmarks.length === 33;
      
      if (!hasBodyLandmarks) {
        return { index, reason: 'Missing or invalid body landmarks' };
      }
      
      return false;
    }).filter(Boolean);

    if (invalidPoses.length > 0) {
      return {
        isValid: false,
        error: 'Invalid poses found',
        invalidPoses
      };
    }

    return {
      isValid: true,
      sequenceLength: poseSequence.length,
      hasHandData: poseSequence.some(pose => 
        pose.leftHandLandmarks || pose.rightHandLandmarks
      )
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
    this.initialized = false;
    console.log('PoseAnimationService disposed');
  }
}

export default new PoseAnimationService();
