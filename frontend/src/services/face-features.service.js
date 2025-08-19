// services/face-features.service.js
import tfService from './tensorflow.service.js';
import threeService from './three.service.js';
import poseNormalizationService from './pose-normalization.service.js';

// SignWriting face feature mappings
const FACE_FEATURE_MAP = {
  Eyes: ['񌞱', '񌡱', '񌠑', '񌧱'], // Various eye states
  Eyebrows: ['񌑑', '񌏱', '񌒱'],     // Eyebrow positions
  Mouth: ['񌚁', '񌚂', '񌚃', '񌚄']   // Mouth shapes
};

export class FaceFeaturesService {
  constructor() {
    this.model = null;
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
      this.model = await tfService.loadModel('/models/face-features/model.json');
      console.log('Face features model loaded successfully');
    } catch (error) {
      console.error('Failed to load face features model:', error);
      throw error;
    }
  }

  /**
   * Analyze facial features from landmarks
   * @param {Array} faceLandmarks - Array of 468 face landmarks from MediaPipe
   * @returns {Object} - Face analysis with SignWriting symbols
   */
  analyzeFaceFeatures(faceLandmarks) {
    if (!this.model || !faceLandmarks?.length || faceLandmarks.length !== 468) {
      return this.getDefaultFaceFeatures();
    }

    // Check if landmarks are valid
    const validLandmarks = faceLandmarks.filter(landmark => 
      landmark && 
      typeof landmark.x === 'number' && 
      typeof landmark.y === 'number' && 
      typeof landmark.z === 'number' &&
      !isNaN(landmark.x) && 
      !isNaN(landmark.y) && 
      !isNaN(landmark.z)
    );

    if (validLandmarks.length < 468) {
      console.warn('Invalid face landmarks detected');
      return this.getDefaultFaceFeatures();
    }

    return tfService.tidy(() => {
      try {
        // Convert landmarks to Vector3 objects
        const vectors = faceLandmarks.map(p => 
          new threeService.Vector3(p.x, p.y, p.z)
        );
        
        // Get key landmark positions
        const nosePosition = vectors[4]; // Nose tip
        const faceLocation = nosePosition;

        // Normalize face landmarks
        const faceTensor = this.normalizeFace(vectors);
        
        // Reshape for model input: [batch_size, sequence_length, features]
        const modelInput = faceTensor.reshape([1, 1, 468 * 3]); // 468 landmarks * 3 coordinates
        
        // Get prediction
        const prediction = this.model.predict(modelInput);
        
        // Parse prediction results
        const features = this.parseFaceFeatures(prediction.reshape([-1]));
        
        // Calculate specific landmark positions for SignWriting
        const eyesY = (vectors[133].y + vectors[362].y) / 2; // Average of inner eye corners
        const leftEye = new threeService.Vector2((vectors[133].x + vectors[33].x) / 2, eyesY);
        const rightEye = new threeService.Vector2((vectors[362].x + vectors[263].x) / 2, eyesY);
        
        const eyebrowsY = (vectors[65].y + vectors[295].y) / 2; // Average of eyebrow points
        const leftEyebrow = new threeService.Vector2(vectors[282].x, eyebrowsY);
        const rightEyebrow = new threeService.Vector2(vectors[52].x, eyebrowsY);
        
        const mouthX = (vectors[14].x + vectors[17].x) / 2; // Average of mouth corners
        const mouthY = (vectors[14].y + vectors[17].y) / 2;
        const mouthLocation = new threeService.Vector2(mouthX, mouthY);

        return {
          face: { 
            location: faceLocation, 
            symbol: '񋾡' // Generic face symbol
          },
          eyes: {
            left: { 
              location: leftEye, 
              symbol: features.eyes.left 
            },
            right: { 
              location: rightEye, 
              symbol: features.eyes.right 
            }
          },
          eyebrows: {
            left: { 
              location: leftEyebrow, 
              symbol: features.eyebrows.left 
            },
            right: { 
              location: rightEyebrow, 
              symbol: features.eyebrows.right 
            }
          },
          mouth: { 
            location: mouthLocation, 
            symbol: features.mouth 
          }
        };
        
      } catch (error) {
        console.error('Error in face features analysis:', error);
        return this.getDefaultFaceFeatures();
      }
    });
  }

  /**
   * Normalize face landmarks for model input
   * @param {Array} vectors - Array of Vector3 face landmarks
   * @returns {Tensor} - Normalized face tensor
   */
  normalizeFace(vectors) {
    // Use nose (4), right eye inner (133), left eye inner (362) to define face plane
    const normal = poseNormalizationService.normal(vectors, [4, 133, 362]);
    
    // Use nose (4) and a point above it (6) as reference line, center on nose (4)
    return poseNormalizationService.normalize(vectors, normal, [4, 6], 4);
  }

  /**
   * Parse model prediction into face features
   * @param {Tensor} prediction - Model prediction tensor
   * @returns {Object} - Parsed face features
   */
  parseFaceFeatures(prediction) {
    const predictionData = prediction.arraySync();
    let index = 0;
    
    const features = {};
    
    // Parse each feature type
    for (const [featureType, symbols] of Object.entries(FACE_FEATURE_MAP)) {
      const featureLength = symbols.length;
      const featureSlice = predictionData.slice(index, index + featureLength);
      const maxIndex = featureSlice.indexOf(Math.max(...featureSlice));
      
      if (featureType === 'Eyes') {
        features.eyes = {
          left: symbols[maxIndex],
          right: symbols[maxIndex] // Same expression for both eyes typically
        };
      } else if (featureType === 'Eyebrows') {
        features.eyebrows = {
          left: symbols[maxIndex],
          right: this.shiftSymbol(symbols[maxIndex], 0x20) // Right eyebrow variant
        };
      } else if (featureType === 'Mouth') {
        features.mouth = symbols[maxIndex];
      }
      
      index += featureLength;
    }
    
    return features;
  }

  /**
   * Shift SignWriting symbol by offset for variants
   * @param {string} symbol - Original SignWriting symbol
   * @param {number} offset - Unicode offset
   * @returns {string} - Shifted symbol
   */
  shiftSymbol(symbol, offset) {
    try {
      const codePoint = symbol.codePointAt(0);
      return String.fromCodePoint(codePoint + offset);
    } catch (error) {
      return symbol; // Return original if shifting fails
    }
  }

  /**
   * Get default face features when model is not available or fails
   * @returns {Object} - Default face features
   */
  getDefaultFaceFeatures() {
    return {
      face: { 
        location: new threeService.Vector3(0, 0, 0), 
        symbol: '񋾡' 
      },
      eyes: {
        left: { 
          location: new threeService.Vector2(0, 0), 
          symbol: '񌞁' // Open eyes
        },
        right: { 
          location: new threeService.Vector2(0, 0), 
          symbol: '񌞁' 
        }
      },
      eyebrows: {
        left: { 
          location: new threeService.Vector2(0, 0), 
          symbol: '񌑑' // Neutral eyebrows
        },
        right: { 
          location: new threeService.Vector2(0, 0), 
          symbol: '񌑱' 
        }
      },
      mouth: { 
        location: new threeService.Vector2(0, 0), 
        symbol: '񌚁' // Neutral mouth
      }
    };
  }

  /**
   * Draw face features on canvas (utility method)
   * @param {CanvasRenderingContext2D} ctx - Canvas context
   * @param {Object} faceFeatures - Face features object
   * @param {number} canvasWidth - Canvas width for scaling
   */
  drawFaceFeatures(ctx, faceFeatures, canvasWidth = 512) {
    ctx.save();
    ctx.font = `${canvasWidth / 20}px Arial`;
    ctx.textAlign = 'center';
    ctx.fillStyle = 'blue';

    const scale = canvasWidth;

    // Draw face symbol
    if (faceFeatures.face?.location) {
      const x = faceFeatures.face.location.x * scale;
      const y = faceFeatures.face.location.y * scale;
      ctx.fillText(faceFeatures.face.symbol, x, y);
    }

    // Draw eye symbols
    if (faceFeatures.eyes?.left?.location) {
      const x = faceFeatures.eyes.left.location.x * scale;
      const y = faceFeatures.eyes.left.location.y * scale;
      ctx.fillText(faceFeatures.eyes.left.symbol, x, y);
    }

    if (faceFeatures.eyes?.right?.location) {
      const x = faceFeatures.eyes.right.location.x * scale;
      const y = faceFeatures.eyes.right.location.y * scale;
      ctx.fillText(faceFeatures.eyes.right.symbol, x, y);
    }

    // Draw eyebrow symbols
    if (faceFeatures.eyebrows?.left?.location) {
      const x = faceFeatures.eyebrows.left.location.x * scale;
      const y = faceFeatures.eyebrows.left.location.y * scale;
      ctx.fillText(faceFeatures.eyebrows.left.symbol, x, y);
    }

    if (faceFeatures.eyebrows?.right?.location) {
      const x = faceFeatures.eyebrows.right.location.x * scale;
      const y = faceFeatures.eyebrows.right.location.y * scale;
      ctx.fillText(faceFeatures.eyebrows.right.symbol, x, y);
    }

    // Draw mouth symbol
    if (faceFeatures.mouth?.location) {
      const x = faceFeatures.mouth.location.x * scale;
      const y = faceFeatures.mouth.location.y * scale;
      ctx.fillText(faceFeatures.mouth.symbol, x, y);
    }

    ctx.restore();
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
    console.log('FaceFeaturesService disposed');
  }
}

export default new FaceFeaturesService();
