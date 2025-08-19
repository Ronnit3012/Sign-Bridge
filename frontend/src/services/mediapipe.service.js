// services/mediapipe.service.js
import { Holistic } from '@mediapipe/holistic';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';

class MediaPipeService {
  constructor() {
    this.holistic = null;
    this.onResultsCallbacks = [];
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized && this.holistic) return;

    try {
      this.holistic = new Holistic({
        locateFile: (file) => {
          // Adjust path based on your public folder structure
          return `/models/holistic/${file}`;
        }
      });

      this.holistic.setOptions({
        upperBodyOnly: false,
        modelComplexity: 1,
        smoothLandmarks: true,
        enableSegmentation: false,
        smoothSegmentation: false,
        refineFaceLandmarks: true,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
      });

      await this.holistic.initialize();

      // Send empty frame to initialize computation graph
      const canvas = document.createElement('canvas');
      canvas.width = canvas.height = 256;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, 256, 256);
      
      await this.holistic.send({ image: canvas });
      canvas.remove();

      // Set up results callback
      this.holistic.onResults((results) => {
        this.onResultsCallbacks.forEach(callback => {
          try {
            callback(results);
          } catch (error) {
            console.error('Error in MediaPipe results callback:', error);
          }
        });
      });

      this.initialized = true;
      console.log('MediaPipe Holistic initialized successfully');
    } catch (error) {
      console.error('Failed to initialize MediaPipe Holistic:', error);
      throw error;
    }
  }

  onResults(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function');
    }
    this.onResultsCallbacks.push(callback);
  }

  removeResultsCallback(callback) {
    const index = this.onResultsCallbacks.indexOf(callback);
    if (index > -1) {
      this.onResultsCallbacks.splice(index, 1);
    }
  }

  clearResultsCallbacks() {
    this.onResultsCallbacks = [];
  }

  async predict(imageSource) {
    await this.initialize();
    
    if (!imageSource) {
      throw new Error('Image source is required for prediction');
    }

    try {
      return await this.holistic.send({ image: imageSource });
    } catch (error) {
      console.error('MediaPipe prediction error:', error);
      throw error;
    }
  }

  // Landmark constants
  get POSE_LANDMARKS() { 
    return this.holistic?.POSE_LANDMARKS || {}; 
  }

  get POSE_CONNECTIONS() { 
    return this.holistic?.POSE_CONNECTIONS || []; 
  }

  get HAND_CONNECTIONS() { 
    return this.holistic?.HAND_CONNECTIONS || []; 
  }

  get FACEMESH_CONTOURS() { 
    return this.holistic?.FACEMESH_CONTOURS || []; 
  }

  get FACEMESH_TESSELATION() {
    return this.holistic?.FACEMESH_TESSELATION || [];
  }

  // Drawing utilities
  drawResults(canvasElement, results, options = {}) {
    const canvasCtx = canvasElement.getContext('2d');
    const {
      drawPose = true,
      drawFace = true,
      drawHands = true,
      drawConnectors: shouldDrawConnectors = true,
      drawLandmarks: shouldDrawLandmarks = true
    } = options;

    // Save canvas state
    canvasCtx.save();

    // Clear canvas
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    // Draw face mesh
    if (drawFace && results.faceLandmarks && shouldDrawConnectors) {
      drawConnectors(canvasCtx, results.faceLandmarks, this.FACEMESH_TESSELATION, 
        { color: '#C0C0C070', lineWidth: 1 });
    }

    // Draw pose
    if (drawPose && results.poseLandmarks) {
      if (shouldDrawConnectors) {
        drawConnectors(canvasCtx, results.poseLandmarks, this.POSE_CONNECTIONS,
          { color: '#00FF00', lineWidth: 4 });
      }
      if (shouldDrawLandmarks) {
        drawLandmarks(canvasCtx, results.poseLandmarks,
          { color: '#FF0000', lineWidth: 2 });
      }
    }

    // Draw hands
    if (drawHands) {
      if (results.rightHandLandmarks) {
        if (shouldDrawConnectors) {
          drawConnectors(canvasCtx, results.rightHandLandmarks, this.HAND_CONNECTIONS,
            { color: '#00CC00', lineWidth: 5 });
        }
        if (shouldDrawLandmarks) {
          drawLandmarks(canvasCtx, results.rightHandLandmarks, {
            color: '#00FF00', lineWidth: 2, radius: 5
          });
        }
      }
      
      if (results.leftHandLandmarks) {
        if (shouldDrawConnectors) {
          drawConnectors(canvasCtx, results.leftHandLandmarks, this.HAND_CONNECTIONS,
            { color: '#CC0000', lineWidth: 5 });
        }
        if (shouldDrawLandmarks) {
          drawLandmarks(canvasCtx, results.leftHandLandmarks, {
            color: '#FF0000', lineWidth: 2, radius: 5
          });
        }
      }
    }

    // Restore canvas state
    canvasCtx.restore();
  }

  // Utility method to check if landmarks are valid
  isValidLandmark(landmark) {
    return landmark && 
           typeof landmark.x === 'number' && 
           typeof landmark.y === 'number' &&
           !isNaN(landmark.x) && 
           !isNaN(landmark.y) &&
           landmark.x > 0 && 
           landmark.y > 0;
  }

  // Cleanup method
  close() {
    if (this.holistic) {
      this.holistic.close();
      this.holistic = null;
    }
    this.onResultsCallbacks = [];
    this.initialized = false;
    console.log('MediaPipe service closed');
  }
}

export default new MediaPipeService();
