// services/sign-language-analyzer.js
import mediaPipeService from './mediapipe.service.js';
import handShapeService from './hand-shape.service.js';
import faceFeaturesService from './face-features.service.js';
import signDetectorService from './sign-detector.service.js';
import poseAnimationService from './pose-animation.service.js';

export class SignLanguageAnalyzer {
  constructor() {
    this.initialized = false;
    this.isAnalyzing = false;
    this.analysisCallbacks = [];
    this.poseHistory = [];
    this.maxPoseHistory = 30; // Keep last 30 poses for animation
  }

  /**
   * Initialize all services
   */
  async initialize() {
    if (this.initialized) return;

    console.log('Initializing Sign Language Analyzer...');
    
    try {
      // Initialize all services in parallel
      await Promise.all([
        mediaPipeService.initialize(),
        handShapeService.loadModel(),
        faceFeaturesService.loadModel(),
        signDetectorService.loadModel(),
        poseAnimationService.loadModel()
      ]);

      this.initialized = true;
      console.log('Sign Language Analyzer initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Sign Language Analyzer:', error);
      throw error;
    }
  }

  /**
   * Add callback for analysis results
   * @param {Function} callback - Callback function to receive analysis results
   */
  onAnalysis(callback) {
    if (typeof callback !== 'function') {
      throw new Error('Callback must be a function');
    }
    this.analysisCallbacks.push(callback);
  }

  /**
   * Remove analysis callback
   * @param {Function} callback - Callback to remove
   */
  removeAnalysisCallback(callback) {
    const index = this.analysisCallbacks.indexOf(callback);
    if (index > -1) {
      this.analysisCallbacks.splice(index, 1);
    }
  }

  /**
   * Clear all analysis callbacks
   */
  clearAnalysisCallbacks() {
    this.analysisCallbacks = [];
  }

  /**
   * Analyze a single frame from video element
   * @param {HTMLVideoElement} videoElement - Video element to analyze
   * @returns {Promise<Object>} - Analysis results
   */
  async analyzeFrame(videoElement) {
    await this.initialize();
    
    if (this.isAnalyzing) {
      console.warn('Analysis already in progress');
      return null;
    }

    this.isAnalyzing = true;

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.isAnalyzing = false;
        reject(new Error('Analysis timeout'));
      }, 5000); // 5 second timeout

      // Set up one-time callback for MediaPipe results
      const handleResults = async (results) => {
        try {
          clearTimeout(timeout);
          
          // Perform comprehensive analysis
          const analysis = await this.performAnalysis(results);
          
          // Add to pose history
          this.addToPoseHistory(results);
          
          // Notify callbacks
          this.analysisCallbacks.forEach(callback => {
            try {
              callback(analysis);
            } catch (error) {
              console.error('Error in analysis callback:', error);
            }
          });
          
          this.isAnalyzing = false;
          resolve(analysis);
        } catch (error) {
          this.isAnalyzing = false;
          reject(error);
        }
      };

      // Add temporary callback
      mediaPipeService.onResults(handleResults);
      
      // Start prediction
      mediaPipeService.predict(videoElement).catch(error => {
        clearTimeout(timeout);
        this.isAnalyzing = false;
        reject(error);
      });
      
      // Clean up callback after use
      setTimeout(() => {
        mediaPipeService.removeResultsCallback(handleResults);
      }, 100);
    });
  }

  /**
   * Start continuous analysis of video stream
   * @param {HTMLVideoElement} videoElement - Video element to analyze
   * @param {Object} options - Analysis options
   */
  startContinuousAnalysis(videoElement, options = {}) {
    const {
      fps = 10, // Analysis frame rate
      enableAnimation = true,
      enableHandAnalysis = true,
      enableFaceAnalysis = true,
      enableSignDetection = true
    } = options;

    const intervalMs = 1000 / fps;
    
    const analyzeLoop = async () => {
      if (!this.isAnalyzing) {
        try {
          const analysis = await this.analyzeFrame(videoElement);
          if (analysis) {
            // Analysis result is automatically sent to callbacks
          }
        } catch (error) {
          console.error('Continuous analysis error:', error);
        }
      }
    };

    // Start analysis loop
    const intervalId = setInterval(analyzeLoop, intervalMs);
    
    console.log(`Started continuous analysis at ${fps} FPS`);
    
    return {
      stop: () => {
        clearInterval(intervalId);
        console.log('Stopped continuous analysis');
      }
    };
  }

  /**
   * Perform comprehensive analysis on MediaPipe results
   * @param {Object} results - MediaPipe results
   * @returns {Object} - Complete analysis
   */
  async performAnalysis(results) {
    const analysis = {
      timestamp: Date.now(),
      isSigning: false,
      confidence: 0,
      leftHand: null,
      rightHand: null,
      face: null,
      pose: results,
      signWriting: {
        handShapes: {},
        faceFeatures: null
      },
      animation: null
    };

    try {
      // Sign detection
      if (results.poseLandmarks) {
        analysis.isSigning = await signDetectorService.detectSigning(results);
        analysis.confidence = signDetectorService.getNormalizationStatus();
      }

      // Hand shape analysis
      if (results.leftHandLandmarks) {
        analysis.leftHand = handShapeService.analyzeHand(results.leftHandLandmarks, true);
        analysis.signWriting.handShapes.left = analysis.leftHand.shape;
      }

      if (results.rightHandLandmarks) {
        analysis.rightHand = handShapeService.analyzeHand(results.rightHandLandmarks, false);
        analysis.signWriting.handShapes.right = analysis.rightHand.shape;
      }

      // Face analysis
      if (results.faceLandmarks) {
        analysis.face = faceFeaturesService.analyzeFaceFeatures(results.faceLandmarks);
        analysis.signWriting.faceFeatures = analysis.face;
      }

      // Generate animation if enough pose history
      if (this.poseHistory.length >= 5) {
        analysis.animation = poseAnimationService.generateAnimations(
          this.poseHistory.slice(-10) // Use last 10 poses
        );
      }

    } catch (error) {
      console.error('Error in analysis:', error);
      analysis.error = error.message;
    }

    return analysis;
  }

  /**
   * Add pose to history for animation generation
   * @param {Object} pose - Pose results from MediaPipe
   */
  addToPoseHistory(pose) {
    this.poseHistory.push({
      timestamp: Date.now(),
      poseLandmarks: pose.poseLandmarks,
      leftHandLandmarks: pose.leftHandLandmarks,
      rightHandLandmarks: pose.rightHandLandmarks,
      faceLandmarks: pose.faceLandmarks
    });

    // Keep only recent poses
    if (this.poseHistory.length > this.maxPoseHistory) {
      this.poseHistory.shift();
    }
  }

  /**
   * Generate animation from current pose history
   * @returns {Object|null} - Animation data
   */
  generateCurrentAnimation() {
    if (this.poseHistory.length < 2) {
      return null;
    }

    return poseAnimationService.generateAnimations(this.poseHistory);
  }

  /**
   * Get analysis statistics
   * @returns {Object} - Statistics
   */
  getStatistics() {
    return {
      initialized: this.initialized,
      isAnalyzing: this.isAnalyzing,
      poseHistoryLength: this.poseHistory.length,
      callbackCount: this.analysisCallbacks.length,
      signDetectorStatus: signDetectorService.getNormalizationStatus(),
      services: {
        mediaPipe: mediaPipeService.initialized,
        handShape: handShapeService.initialized,
        faceFeatures: faceFeaturesService.initialized,
        signDetector: signDetectorService.initialized,
        poseAnimation: poseAnimationService.initialized
      }
    };
  }

  /**
   * Reset pose history and normalization
   */
  reset() {
    this.poseHistory = [];
    signDetectorService.resetNormalization();
    console.log('Sign Language Analyzer reset');
  }

  /**
   * Draw analysis results on canvas
   * @param {HTMLCanvasElement} canvas - Canvas to draw on
   * @param {Object} analysis - Analysis results
   * @param {Object} options - Drawing options
   */
  drawAnalysis(canvas, analysis, options = {}) {
    const ctx = canvas.getContext('2d');
    const {
      drawPose = true,
      drawHands = true,
      drawFace = true,
      drawSignWriting = true,
      showLabels = true
    } = options;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw MediaPipe results
    if (analysis.pose) {
      mediaPipeService.drawResults(canvas, analysis.pose, {
        drawPose,
        drawFace,
        drawHands
      });
    }

    // Draw SignWriting symbols
    if (drawSignWriting && analysis.signWriting) {
      this.drawSignWritingSymbols(ctx, analysis, canvas.width);
    }

    // Draw labels
    if (showLabels) {
      this.drawLabels(ctx, analysis, canvas.width, canvas.height);
    }
  }

  /**
   * Draw SignWriting symbols on canvas
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {Object} analysis - Analysis results
   * @param {number} canvasWidth - Canvas width
   */
  drawSignWritingSymbols(ctx, analysis, canvasWidth) {
    ctx.save();
    ctx.font = `${canvasWidth / 30}px Arial`;
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;

    let y = 30;

    // Draw hand shapes
    if (analysis.leftHand?.shape) {
      ctx.fillText(`L: ${analysis.leftHand.shape}`, 10, y);
      ctx.strokeText(`L: ${analysis.leftHand.shape}`, 10, y);
      y += 40;
    }

    if (analysis.rightHand?.shape) {
      ctx.fillText(`R: ${analysis.rightHand.shape}`, 10, y);
      ctx.strokeText(`R: ${analysis.rightHand.shape}`, 10, y);
      y += 40;
    }

    // Draw face features on the actual face if available
    if (analysis.face) {
      faceFeaturesService.drawFaceFeatures(ctx, analysis.face, canvasWidth);
    }

    ctx.restore();
  }

  /**
   * Draw text labels on canvas
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {Object} analysis - Analysis results
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   */
  drawLabels(ctx, analysis, width, height) {
    ctx.save();
    ctx.font = '16px Arial';
    ctx.fillStyle = analysis.isSigning ? 'green' : 'red';
    ctx.fillText(
      `Signing: ${analysis.isSigning ? 'YES' : 'NO'}`, 
      width - 150, 
      height - 60
    );

    ctx.fillStyle = 'white';
    ctx.fillText(
      `Poses: ${this.poseHistory.length}`, 
      width - 150, 
      height - 40
    );

    if (analysis.leftHand?.rotation !== undefined) {
      ctx.fillText(
        `L Rot: ${analysis.leftHand.rotation.toFixed(0)}°`, 
        width - 150, 
        height - 20
      );
    }

    ctx.restore();
  }

  /**
   * Cleanup method
   */
  dispose() {
    this.clearAnalysisCallbacks();
    this.reset();
    
    // Dispose all services
    handShapeService.dispose();
    faceFeaturesService.dispose();
    signDetectorService.dispose();
    poseAnimationService.dispose();
    mediaPipeService.close();
    
    this.initialized = false;
    console.log('Sign Language Analyzer disposed');
  }
}

export default new SignLanguageAnalyzer();
