// services/three.service.js
import * as THREE from 'three';

class ThreeService {
  constructor() {
    this.THREE = THREE;
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized) return;
    this.initialized = true;
    console.log('Three.js service initialized');
  }

  // Vector classes
  get Vector3() { 
    return this.THREE.Vector3; 
  }

  get Vector2() { 
    return this.THREE.Vector2; 
  }

  get Vector4() { 
    return this.THREE.Vector4; 
  }

  // Geometry classes
  get Box3() { 
    return this.THREE.Box3; 
  }

  get Plane() { 
    return this.THREE.Plane; 
  }

  get Sphere() { 
    return this.THREE.Sphere; 
  }

  // Math utilities
  get MathUtils() { 
    return this.THREE.MathUtils; 
  }

  get Matrix3() { 
    return this.THREE.Matrix3; 
  }

  get Matrix4() { 
    return this.THREE.Matrix4; 
  }

  get Quaternion() { 
    return this.THREE.Quaternion; 
  }

  get Euler() { 
    return this.THREE.Euler; 
  }

  // Helper methods for common operations
  createVector3(x = 0, y = 0, z = 0) {
    return new this.THREE.Vector3(x, y, z);
  }

  createVector2(x = 0, y = 0) {
    return new this.THREE.Vector2(x, y);
  }

  createBox3() {
    return new this.THREE.Box3();
  }

  createPlane(normal, constant) {
    return new this.THREE.Plane(normal, constant);
  }

  // Distance calculations
  distanceToSquared(v1, v2) {
    return v1.distanceToSquared(v2);
  }

  distanceTo(v1, v2) {
    return v1.distanceTo(v2);
  }

  // Cross product
  crossVectors(a, b) {
    return new this.THREE.Vector3().crossVectors(a, b);
  }

  // Dot product
  dot(v1, v2) {
    return v1.dot(v2);
  }

  // Normalize vector
  normalize(vector) {
    return vector.clone().normalize();
  }

  // Clone vector
  clone(vector) {
    return vector.clone();
  }
}

export default new ThreeService();
