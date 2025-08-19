// services/pose-normalization.service.js
import tfService from './tensorflow.service.js';
import threeService from './three.service.js';

export class PoseNormalizationService {
  constructor() {
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized) return;
    await Promise.all([
      tfService.initialize(),
      threeService.initialize()
    ]);
    this.initialized = true;
  }

  /**
   * Calculate normal vector from three points forming a plane
   * @param {Array} vectors - Array of Vector3 objects
   * @param {Array} planeIndices - Array of 3 indices [i1, i2, i3] defining the plane
   * @returns {Object} - Object with center and direction properties
   */
  normal(vectors, planeIndices) {
    const [i1, i2, i3] = planeIndices;
    const triangle = [vectors[i1], vectors[i2], vectors[i3]];

    // Calculate center point
    const center = new threeService.Vector3(
      (triangle[0].x + triangle[1].x + triangle[2].x) / 3,
      (triangle[0].y + triangle[1].y + triangle[2].y) / 3,
      (triangle[0].z + triangle[1].z + triangle[2].z) / 3
    );

    // Calculate plane normal
    const plane = new threeService.Plane().setFromCoplanarPoints(
      triangle[0], triangle[1], triangle[2]
    );
    
    return { 
      center, 
      direction: plane.normal.clone()
    };
  }

  /**
   * Calculate angle in degrees
   * @param {number} n - numerator
   * @param {number} d - denominator
   * @returns {number} - Angle in degrees
   */
  angle(n, d) {
    return ((Math.atan2(n, d) * 180) / Math.PI + 360) % 360;
  }

  /**
   * Normalize pose vectors based on plane normal and reference line
   * @param {Array} vectors - Array of Vector3 objects
   * @param {Object} normal - Normal object with center and direction
   * @param {Array} line - Array of 2 indices defining reference line [start, end]
   * @param {number} center - Index of center point for translation
   * @param {boolean} flip - Whether to flip X axis (for right hand)
   * @returns {Tensor} - Normalized tensor
   */
  normalize(vectors, normal, line, center, flip = false) {
    return tfService.tidy(() => {
      // Convert vectors to tensor
      let matrix = tfService.tensor2d(vectors.map(v => [v.x, v.y, v.z]));

      // 1. Rotate vectors to align with normal
      const oldXAxis = new threeService.Vector3(1, 0, 0);
      const zAxis = normal.direction.clone().multiplyScalar(-1);
      const yAxis = new threeService.Vector3().crossVectors(oldXAxis, zAxis).normalize();
      const xAxis = new threeService.Vector3().crossVectors(zAxis, yAxis).normalize();

      const rotationMatrix = tfService.tensor2d([
        [xAxis.x, yAxis.x, zAxis.x],
        [xAxis.y, yAxis.y, zAxis.y],
        [xAxis.z, yAxis.z, zAxis.z]
      ]);

      // Translate to origin
      matrix = tfService.sub(matrix, matrix.slice(0, 1));
      
      // Apply rotation
      matrix = tfService.dot(matrix, rotationMatrix);

      if (flip) {
        // Flip X axis for right hand to match training data
        const flipMatrix = tfService.tensor2d([[-1, 1, 1]]);
        matrix = tfService.mul(matrix, flipMatrix);
      }

      // 2. Rotate in XY plane to align reference line with Y axis
      const j1 = matrix.slice(line[0], 1); // Start point
      const j2 = matrix.slice(line[1], 1); // End point
      const vec = tfService.sub(j2, j1).arraySync();

      const angle = 90 + this.angle(vec[0][1], vec[0][0]);
      const sinAngle = Math.sin((angle * Math.PI) / 180);
      const cosAngle = Math.cos((angle * Math.PI) / 180);
      
      const xyRotationMatrix = tfService.tensor2d([
        [cosAngle, -sinAngle, 0],
        [sinAngle, cosAngle, 0],
        [0, 0, 1]
      ]);

      matrix = tfService.dot(matrix, xyRotationMatrix);

      // 3. Scale reference line to length 200
      const scaledJ1 = matrix.slice(line[0], 1);
      const scaledJ2 = matrix.slice(line[1], 1);
      const length = tfService.sqrt(
        tfService.sum(
          tfService.pow(tfService.sub(scaledJ2, scaledJ1), 2)
        )
      );
      
      const scalingFactor = tfService.div(tfService.scalar(200), length);
      matrix = tfService.mul(matrix, scalingFactor);

      // 4. Translate so center point is at origin
      return tfService.sub(matrix, matrix.slice(center, 1));
    });
  }

  /**
   * Normalize hand landmarks
   * @param {Array} handLandmarks - Array of hand landmark objects
   * @param {Object} normal - Normal object
   * @param {boolean} flipHand - Whether to flip for right hand
   * @returns {Tensor} - Normalized hand tensor
   */
  normalizeHand(handLandmarks, normal, flipHand = false) {
    const vectors = handLandmarks.map(p => 
      new threeService.Vector3(p.x, p.y, p.z)
    );
    
    // Use wrist (0) and middle finger MCP (9) as reference line
    // Center on wrist (0)
    return this.normalize(vectors, normal, [0, 9], 0, flipHand);
  }

  /**
   * Normalize face landmarks
   * @param {Array} faceLandmarks - Array of face landmark objects
   * @returns {Tensor} - Normalized face tensor
   */
  normalizeFace(faceLandmarks) {
    const vectors = faceLandmarks.map(p => 
      new threeService.Vector3(p.x, p.y, p.z)
    );
    
    // Use nose (4), right eye inner (133), left eye inner (362) to define plane
    const normal = this.normal(vectors, [4, 133, 362]);
    
    // Use nose (4) and forehead (6) as reference line, center on nose (4)
    return this.normalize(vectors, normal, [4, 6], 4, false);
  }

  /**
   * Dispose of any tensors to prevent memory leaks
   */
  dispose() {
    // This service doesn't hold persistent tensors, but good to have cleanup method
    console.log('PoseNormalizationService disposed');
  }
}

export default new PoseNormalizationService();
