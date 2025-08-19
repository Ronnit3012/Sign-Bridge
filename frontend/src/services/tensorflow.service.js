// services/tensorflow.service.js
import * as tf from '@tensorflow/tfjs';
import { setWasmPaths } from '@tensorflow/tfjs-backend-wasm';

class TensorFlowService {
  constructor() {
    this.tf = null;
    this.initialized = false;
  }

  async initialize() {
    if (this.initialized) return;

    this.tf = tf;
    await this.tf.ready();

    // Setup backends in order of preference
    if ('navigator' in globalThis && 'gpu' in navigator) {
      try {
        await import('@tensorflow/tfjs-backend-webgpu');
        await this.tf.setBackend('webgpu');
        console.log('Using WebGPU backend');
      } catch (e) {
        console.warn('WebGPU backend not available:', e.message);
      }
    }

    // Fallback to WASM if CPU backend is active
    if (this.tf.getBackend() === 'cpu') {
      try {
        setWasmPaths('/models/tfjs-backend-wasm/');
        await this.tf.setBackend('wasm');
        console.log('Using WASM backend');
      } catch (e) {
        console.warn('WASM backend not available, using CPU:', e.message);
      }
    }

    console.log('TensorFlow.js backend:', this.tf.getBackend());
    this.initialized = true;
  }

  async loadModel(modelPath) {
    await this.initialize();
    try {
      const model = await this.tf.loadLayersModel(modelPath);
      console.log(`Model loaded successfully: ${modelPath}`);
      return model;
    } catch (error) {
      console.error(`Failed to load model: ${modelPath}`, error);
      throw error;
    }
  }

  // TensorFlow.js API proxies
  tidy(fn) {
    return this.tf.tidy(fn);
  }

  tensor1d(values, dtype) {
    return this.tf.tensor1d(values, dtype);
  }

  tensor2d(values, shape, dtype) {
    return this.tf.tensor2d(values, shape, dtype);
  }

  tensor3d(values, shape, dtype) {
    return this.tf.tensor3d(values, shape, dtype);
  }

  softmax(tensor, dim) {
    return this.tf.softmax(tensor, dim);
  }

  stack(tensors, axis) {
    return this.tf.stack(tensors, axis);
  }

  argMax(tensor, axis) {
    return this.tf.argMax(tensor, axis);
  }

  reshape(tensor, shape) {
    return this.tf.reshape(tensor, shape);
  }

  slice(tensor, begin, size) {
    return this.tf.slice(tensor, begin, size);
  }

  sub(a, b) {
    return this.tf.sub(a, b);
  }

  mul(a, b) {
    return this.tf.mul(a, b);
  }

  div(a, b) {
    return this.tf.div(a, b);
  }

  add(a, b) {
    return this.tf.add(a, b);
  }

  pow(base, exp) {
    return this.tf.pow(base, exp);
  }

  sqrt(tensor) {
    return this.tf.sqrt(tensor);
  }

  sum(tensor, axis, keepDims) {
    return this.tf.sum(tensor, axis, keepDims);
  }

  dot(t1, t2) {
    return this.tf.dot(t1, t2);
  }

  transpose(tensor, perm) {
    return this.tf.transpose(tensor, perm);
  }

  scalar(value) {
    return this.tf.scalar(value);
  }

  // Memory management
  dispose(...tensors) {
    tensors.forEach(tensor => {
      if (tensor && typeof tensor.dispose === 'function') {
        tensor.dispose();
      }
    });
  }

  // Get memory info
  memory() {
    return this.tf.memory();
  }
}

export default new TensorFlowService();
