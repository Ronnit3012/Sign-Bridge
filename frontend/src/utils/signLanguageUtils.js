// utils/signLanguageUtils.js

/**
 * Utility functions for sign language processing
 */

/**
 * Convert SignWriting symbols to readable text description
 * @param {string} signWriting - SignWriting Unicode string
 * @returns {string} - Human readable description
 */
export const signWritingToText = (signWriting) => {
  if (!signWriting) return '';

  const symbolMap = {
    // Hand shapes
    '𝠀': 'Flat hand',
    '𝠁': 'Curved hand',
    '𝠂': 'Fist',
    '𝠃': 'Index finger',
    '𝠄': 'Two fingers',
    '𝠅': 'Three fingers',
    '𝠆': 'Four fingers',
    '𝠇': 'Five fingers',
    
    // Movements
    '𝠈': 'Upward movement',
    '𝠉': 'Downward movement',
    '𝠊': 'Leftward movement',
    '𝠋': 'Rightward movement',
    '𝠌': 'Circular movement',
    '𝠍': 'Back and forth',
    
    // Face expressions
    '𝠎': 'Neutral expression',
    '𝠏': 'Happy expression',
    '𝠐': 'Sad expression',
    '𝠑': 'Surprised expression',
    '𝠒': 'Angry expression'
  };

  return signWriting.split('').map(char => symbolMap[char] || char).join(' ');
};

/**
 * Convert analysis results to standardized format
 * @param {Object} analysis - Raw analysis results
 * @returns {Object} - Standardized format
 */
export const standardizeAnalysis = (analysis) => {
  return {
    timestamp: Date.now(),
    isSigning: analysis.isSigning || false,
    confidence: analysis.confidence || 0,
    hands: {
      left: analysis.leftHand ? {
        detected: true,
        landmarks: analysis.leftHand.landmarks || [],
        shape: analysis.leftHand.shape || null,
        signWriting: analysis.leftHand.signWriting || null
      } : { detected: false },
      right: analysis.rightHand ? {
        detected: true,
        landmarks: analysis.rightHand.landmarks || [],
        shape: analysis.rightHand.shape || null,
        signWriting: analysis.rightHand.signWriting || null
      } : { detected: false }
    },
    face: analysis.face ? {
      detected: true,
      landmarks: analysis.face.landmarks || [],
      features: analysis.face.features || null,
      signWriting: analysis.face.signWriting || null
    } : { detected: false },
    pose: analysis.pose ? {
      detected: true,
      landmarks: analysis.pose.landmarks || [],
      worldLandmarks: analysis.pose.worldLandmarks || []
    } : { detected: false },
    signWriting: analysis.signWriting || null,
    animation: analysis.animation || null
  };
};

/**
 * Calculate sign complexity score based on analysis
 * @param {Object} analysis - Analysis results
 * @returns {number} - Complexity score (0-1)
 */
export const calculateSignComplexity = (analysis) => {
  let complexity = 0;
  let factors = 0;

  // Hand involvement
  if (analysis.leftHand?.detected) {
    complexity += 0.3;
    factors += 1;
  }
  if (analysis.rightHand?.detected) {
    complexity += 0.3;
    factors += 1;
  }

  // Bilateral hand usage (more complex)
  if (analysis.leftHand?.detected && analysis.rightHand?.detected) {
    complexity += 0.2;
  }

  // Face involvement
  if (analysis.face?.detected && analysis.face.features) {
    complexity += 0.2;
    factors += 1;
  }

  // Movement complexity (if animation data available)
  if (analysis.animation?.tracks?.length > 0) {
    complexity += 0.1 * Math.min(analysis.animation.tracks.length / 10, 1);
  }

  return factors > 0 ? Math.min(complexity, 1) : 0;
};

/**
 * Extract key frames from continuous analysis for animation
 * @param {Array} analysisHistory - Array of analysis results
 * @param {number} threshold - Minimum change threshold
 * @returns {Array} - Key frame indices
 */
export const extractKeyFrames = (analysisHistory, threshold = 0.1) => {
  if (!analysisHistory || analysisHistory.length < 2) return [];

  const keyFrames = [0]; // Always include first frame
  
  for (let i = 1; i < analysisHistory.length; i++) {
    const current = analysisHistory[i];
    const previous = analysisHistory[keyFrames[keyFrames.length - 1]];
    
    // Calculate difference between frames
    let difference = 0;
    let comparisons = 0;

    // Compare hand positions
    ['leftHand', 'rightHand'].forEach(hand => {
      if (current[hand]?.landmarks && previous[hand]?.landmarks) {
        const currentWrist = current[hand].landmarks[0];
        const previousWrist = previous[hand].landmarks[0];
        if (currentWrist && previousWrist) {
          difference += Math.sqrt(
            Math.pow(currentWrist.x - previousWrist.x, 2) +
            Math.pow(currentWrist.y - previousWrist.y, 2)
          );
          comparisons++;
        }
      }
    });

    // If significant change detected, mark as key frame
    if (comparisons > 0 && (difference / comparisons) > threshold) {
      keyFrames.push(i);
    }
  }

  // Always include last frame
  if (keyFrames[keyFrames.length - 1] !== analysisHistory.length - 1) {
    keyFrames.push(analysisHistory.length - 1);
  }

  return keyFrames;
};

/**
 * Generate sign summary from analysis history
 * @param {Array} analysisHistory - Array of analysis results
 * @returns {Object} - Sign summary
 */
export const generateSignSummary = (analysisHistory) => {
  if (!analysisHistory || analysisHistory.length === 0) {
    return { duration: 0, complexity: 0, handsUsed: [], hasMovement: false };
  }

  const signingFrames = analysisHistory.filter(a => a.isSigning);
  const duration = signingFrames.length;
  
  // Determine which hands were used
  const handsUsed = [];
  if (signingFrames.some(a => a.leftHand?.detected)) handsUsed.push('left');
  if (signingFrames.some(a => a.rightHand?.detected)) handsUsed.push('right');

  // Calculate average complexity
  const avgComplexity = signingFrames.length > 0 
    ? signingFrames.reduce((sum, a) => sum + calculateSignComplexity(a), 0) / signingFrames.length
    : 0;

  // Detect movement
  const keyFrames = extractKeyFrames(signingFrames);
  const hasMovement = keyFrames.length > 2;

  // Extract unique SignWriting symbols
  const signWritingSymbols = [...new Set(
    signingFrames
      .map(a => a.signWriting)
      .filter(Boolean)
  )];

  return {
    duration,
    complexity: avgComplexity,
    handsUsed,
    hasMovement,
    keyFrames: keyFrames.length,
    signWritingSymbols,
    description: signWritingSymbols.map(signWritingToText).join(', ')
  };
};

/**
 * Validate analysis results
 * @param {Object} analysis - Analysis results to validate
 * @returns {Object} - Validation result
 */
export const validateAnalysis = (analysis) => {
  const errors = [];
  const warnings = [];

  if (!analysis) {
    errors.push('Analysis object is null or undefined');
    return { isValid: false, errors, warnings };
  }

  // Check required properties
  if (typeof analysis.isSigning !== 'boolean') {
    errors.push('isSigning must be a boolean');
  }

  // Validate hand data
  ['leftHand', 'rightHand'].forEach(hand => {
    if (analysis[hand]) {
      if (!Array.isArray(analysis[hand].landmarks)) {
        warnings.push(`${hand}.landmarks should be an array`);
      } else if (analysis[hand].landmarks.length !== 21) {
        warnings.push(`${hand} should have 21 landmarks, found ${analysis[hand].landmarks.length}`);
      }
    }
  });

  // Validate face data
  if (analysis.face && analysis.face.landmarks) {
    if (!Array.isArray(analysis.face.landmarks)) {
      warnings.push('face.landmarks should be an array');
    } else if (analysis.face.landmarks.length !== 468) {
      warnings.push(`Face should have 468 landmarks, found ${analysis.face.landmarks.length}`);
    }
  }

  // Validate pose data
  if (analysis.pose && analysis.pose.landmarks) {
    if (!Array.isArray(analysis.pose.landmarks)) {
      warnings.push('pose.landmarks should be an array');
    } else if (analysis.pose.landmarks.length !== 33) {
      warnings.push(`Pose should have 33 landmarks, found ${analysis.pose.landmarks.length}`);
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Export analysis data to JSON format
 * @param {Array} analysisHistory - Analysis history
 * @param {Object} metadata - Additional metadata
 * @returns {string} - JSON string
 */
export const exportAnalysisData = (analysisHistory, metadata = {}) => {
  const exportData = {
    metadata: {
      exportDate: new Date().toISOString(),
      version: '1.0.0',
      frameCount: analysisHistory.length,
      ...metadata
    },
    summary: generateSignSummary(analysisHistory),
    frames: analysisHistory.map(standardizeAnalysis)
  };

  return JSON.stringify(exportData, null, 2);
};

/**
 * Import analysis data from JSON
 * @param {string} jsonData - JSON string
 * @returns {Object} - Parsed analysis data
 */
export const importAnalysisData = (jsonData) => {
  try {
    const data = JSON.parse(jsonData);
    
    if (!data.frames || !Array.isArray(data.frames)) {
      throw new Error('Invalid analysis data format');
    }

    return {
      metadata: data.metadata || {},
      summary: data.summary || {},
      frames: data.frames
    };
  } catch (error) {
    throw new Error(`Failed to import analysis data: ${error.message}`);
  }
};
