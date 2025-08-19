// services/hand-shape.service.js
import tfService from './tensorflow.service.js';
import threeService from './three.service.js';
import poseNormalizationService from './pose-normalization.service.js';

export class HandShapeService {
  constructor() {
    this.leftHandModel = null;
    this.rightHandModel = null;
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized) return;
    
    await Promise.all([
      tfService.initialize(),
      threeService.initialize(),
      poseNormalizationService.initialize()
    ]);
    
    this.initialized = true;
  }

  async loadModel() {
    await this.initialize();

    try {
      // Load left hand model
      this.leftHandModel = await tfService.loadModel('/models/hand-shape/model.json');
      console.log('Left hand model loaded successfully');

      // Clone model for right hand to avoid loading the same model twice
      const modelData = new Promise(resolve => {
        this.leftHandModel.save({ save: resolve });
      });
      
      this.rightHandModel = await tfService.loadModel({ 
        load: () => modelData 
      });
      console.log('Right hand model cloned successfully');
      
    } catch (error) {
      console.error('Failed to load hand shape models:', error);
      throw error;
    }
  }

  /**
   * Analyze hand shape from landmarks
   * @param {Array} handLandmarks - Array of 21 hand landmarks
   * @param {boolean} isLeft - Whether this is the left hand
   * @returns {string} - SignWriting Unicode character for hand shape
   */
  analyzeHandShape(handLandmarks, isLeft = true) {
    const model = isLeft ? this.leftHandModel : this.rightHandModel;
    
    if (!model || !handLandmarks?.length || handLandmarks.length !== 21) {
      return '񆄡'; // Default fist shape in SignWriting
    }

    // Check if landmarks are valid
    const validLandmarks = handLandmarks.filter(landmark => 
      landmark && 
      typeof landmark.x === 'number' && 
      typeof landmark.y === 'number' && 
      typeof landmark.z === 'number' &&
      !isNaN(landmark.x) && 
      !isNaN(landmark.y) && 
      !isNaN(landmark.z)
    );

    if (validLandmarks.length < 21) {
      console.warn('Invalid hand landmarks detected');
      return '񆄡';
    }

    return tfService.tidy(() => {
      try {
        // Convert landmarks to Vector3 objects
        const vectors = handLandmarks.map(p => 
          new threeService.Vector3(p.x, p.y, p.z)
        );
        
        // Calculate hand normal (plane orientation)
        const normal = this.calculateHandNormal(vectors, !isLeft);
        
        // Normalize hand pose
        const handTensor = poseNormalizationService.normalize(
          vectors, 
          normal, 
          [0, 9], // Reference line: wrist to middle finger MCP
          0,      // Center on wrist
          !isLeft // Flip for right hand
        );
        
        // Reshape for model input: [batch_size, sequence_length, features]
        const modelInput = handTensor.reshape([1, 1, 63]); // 21 joints * 3 coordinates = 63
        
        // Get prediction
        const prediction = model.predict(modelInput);
        
        // Apply softmax and get the most likely hand shape
        const softmaxPred = tfService.softmax(prediction);
        const handShapeIndex = tfService.argMax(softmaxPred, 2).dataSync()[0];
        
        // Convert to SignWriting Unicode
        // SignWriting hand shapes start at Unicode point 262145 (0x40001)
        // Each shape variant is offset by 0x60 (96 decimal)
        const code = 262145 + 0x60 * handShapeIndex;
        const signWritingChar = String.fromCodePoint(code);
        
        console.log(`Hand shape detected: ${handShapeIndex} -> ${signWritingChar}`);
        return signWritingChar;
        
      } catch (error) {
        console.error('Error in hand shape analysis:', error);
        return '񆄡'; // Return default fist shape on error
      }
    });
  }

  /**
   * Calculate hand plane normal for pose normalization
   * @param {Array} vectors - Array of Vector3 hand landmarks
   * @param {boolean} flipNormal - Whether to flip the normal direction
   * @returns {Object} - Normal object with center and direction
   */
  calculateHandNormal(vectors, flipNormal = false) {
    // Use wrist (0), index finger MCP (5), and pinky MCP (17) to define hand plane
    const planeNormal = poseNormalizationService.normal(vectors, [0, 5, 17]);
    
    if (flipNormal) {
      planeNormal.direction.multiplyScalar(-1);
    }
    
    return planeNormal;
  }

  /**
   * Get hand bounding box
   * @param {Array} handLandmarks - Array of hand landmarks
   * @returns {Object} - Three.js Box3 object
   */
  getHandBoundingBox(handLandmarks) {
    if (!handLandmarks?.length) return null;
    
    const vectors = handLandmarks.map(p => 
      new threeService.Vector3(p.x, p.y, p.z)
    );
    
    return new threeService.Box3().setFromPoints(vectors);
  }

  /**
   * Calculate hand rotation in degrees (0-360)
   * @param {Array} handLandmarks - Array of hand landmarks
   * @returns {number} - Rotation angle in degrees
   */
  calculateHandRotation(handLandmarks) {
    if (!handLandmarks?.length || handLandmarks.length < 10) return 0;
    
    // Use wrist (0) and middle finger MCP (9) to determine rotation
    const wrist = handLandmarks[0];
    const middleMCP = handLandmarks[9];
    
    const dx = middleMCP.x - wrist.x;
    const dy = middleMCP.y - wrist.y;
    
    const angle = Math.atan2(dy, dx) * 180 / Math.PI;
    return (angle + 360) % 360; // Normalize to 0-360 range
  }

  /**
   * Determine hand plane (wall vs floor)
   * @param {Array} handLandmarks - Array of hand landmarks
   * @returns {string} - 'wall' or 'floor'
   */
  getHandPlane(handLandmarks) {
    if (!handLandmarks?.length || handLandmarks.length < 10) return 'wall';
    
    const wrist = handLandmarks[0];
    const middleMCP = handLandmarks[9];
    
    const dy = Math.abs(middleMCP.y - wrist.y);
    const dz = Math.abs(middleMCP.z - wrist.z);
    
    // If Y movement is greater than Z movement, hand is parallel to wall
    return dy > dz ? 'wall' : 'floor';
  }

  /**
   * Get complete hand analysis
   * @param {Array} handLandmarks - Array of hand landmarks
   * @param {boolean} isLeft - Whether this is the left hand
   * @returns {Object} - Complete hand analysis
   */
  analyzeHand(handLandmarks, isLeft = true) {
    if (!handLandmarks?.length) {
      return {
        shape: '񆄡',
        rotation: 0,
        plane: 'wall',
        boundingBox: null,
        isValid: false
      };
    }

    return {
      shape: this.analyzeHandShape(handLandmarks, isLeft),
      rotation: this.calculateHandRotation(handLandmarks),
      plane: this.getHandPlane(handLandmarks),
      boundingBox: this.getHandBoundingBox(handLandmarks),
      isValid: true,
      handedness: isLeft ? 'left' : 'right'
    };
  }

  /**
   * Cleanup method
   */
  dispose() {
    if (this.leftHandModel) {
      this.leftHandModel.dispose();
      this.leftHandModel = null;
    }
    if (this.rightHandModel) {
      this.rightHandModel.dispose();
      this.rightHandModel = null;
    }
    this.initialized = false;
    console.log('HandShapeService disposed');
  }
}

export default new HandShapeService();
