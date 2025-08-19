// hooks/useSignLanguageAnalyzer.js
import { useState, useEffect, useCallback, useRef } from 'react';
import { signLanguageAnalyzer } from '../services';

/**
 * React hook for sign language analysis
 * @param {Object} options - Hook options
 * @returns {Object} - Hook state and methods
 */
export const useSignLanguageAnalyzer = (options = {}) => {
  const {
    autoInitialize = true,
    enableContinuousAnalysis = false,
    analysisOptions = {}
  } = options;

  // State
  const [isInitialized, setIsInitialized] = useState(false);
  const [isInitializing, setIsInitializing] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [lastAnalysis, setLastAnalysis] = useState(null);
  const [error, setError] = useState(null);
  const [statistics, setStatistics] = useState(null);

  // Refs
  const continuousAnalysisRef = useRef(null);
  const videoElementRef = useRef(null);

  /**
   * Initialize the analyzer
   */
  const initialize = useCallback(async () => {
    if (isInitialized || isInitializing) return;

    setIsInitializing(true);
    setError(null);

    try {
      await signLanguageAnalyzer.initialize();
      setIsInitialized(true);
      setStatistics(signLanguageAnalyzer.getStatistics());
    } catch (err) {
      setError(err.message);
      console.error('Failed to initialize sign language analyzer:', err);
    } finally {
      setIsInitializing(false);
    }
  }, [isInitialized, isInitializing]);

  /**
   * Analyze a single frame
   */
  const analyzeFrame = useCallback(async (videoElement) => {
    if (!isInitialized) {
      throw new Error('Analyzer not initialized');
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      const analysis = await signLanguageAnalyzer.analyzeFrame(videoElement);
      setLastAnalysis(analysis);
      setStatistics(signLanguageAnalyzer.getStatistics());
      return analysis;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsAnalyzing(false);
    }
  }, [isInitialized]);

  /**
   * Start continuous analysis
   */
  const startContinuousAnalysis = useCallback((videoElement, options = {}) => {
    if (!isInitialized) {
      throw new Error('Analyzer not initialized');
    }

    if (continuousAnalysisRef.current) {
      continuousAnalysisRef.current.stop();
    }

    const mergedOptions = { ...analysisOptions, ...options };
    
    continuousAnalysisRef.current = signLanguageAnalyzer.startContinuousAnalysis(
      videoElement, 
      mergedOptions
    );

    videoElementRef.current = videoElement;
    setIsAnalyzing(true);
  }, [isInitialized, analysisOptions]);

  /**
   * Stop continuous analysis
   */
  const stopContinuousAnalysis = useCallback(() => {
    if (continuousAnalysisRef.current) {
      continuousAnalysisRef.current.stop();
      continuousAnalysisRef.current = null;
    }
    videoElementRef.current = null;
    setIsAnalyzing(false);
  }, []);

  /**
   * Reset analyzer state
   */
  const reset = useCallback(() => {
    signLanguageAnalyzer.reset();
    setLastAnalysis(null);
    setError(null);
    setStatistics(signLanguageAnalyzer.getStatistics());
  }, []);

  /**
   * Generate animation from pose history
   */
  const generateAnimation = useCallback(() => {
    if (!isInitialized) return null;
    return signLanguageAnalyzer.generateCurrentAnimation();
  }, [isInitialized]);

  // Auto-initialize if enabled
  useEffect(() => {
    if (autoInitialize && !isInitialized && !isInitializing) {
      initialize();
    }
  }, [autoInitialize, isInitialized, isInitializing, initialize]);

  // Set up analysis callback
  useEffect(() => {
    if (!isInitialized) return;

    const handleAnalysis = (analysis) => {
      setLastAnalysis(analysis);
      setStatistics(signLanguageAnalyzer.getStatistics());
    };

    signLanguageAnalyzer.onAnalysis(handleAnalysis);

    return () => {
      signLanguageAnalyzer.removeAnalysisCallback(handleAnalysis);
    };
  }, [isInitialized]);

  // Auto-start continuous analysis if enabled
  useEffect(() => {
    if (enableContinuousAnalysis && isInitialized && videoElementRef.current) {
      startContinuousAnalysis(videoElementRef.current);
    }

    return () => {
      if (enableContinuousAnalysis) {
        stopContinuousAnalysis();
      }
    };
  }, [enableContinuousAnalysis, isInitialized, startContinuousAnalysis, stopContinuousAnalysis]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopContinuousAnalysis();
    };
  }, [stopContinuousAnalysis]);

  return {
    // State
    isInitialized,
    isInitializing,
    isAnalyzing,
    lastAnalysis,
    error,
    statistics,
    
    // Methods
    initialize,
    analyzeFrame,
    startContinuousAnalysis,
    stopContinuousAnalysis,
    reset,
    generateAnimation,
    
    // Analysis data
    isSigning: lastAnalysis?.isSigning || false,
    leftHand: lastAnalysis?.leftHand || null,
    rightHand: lastAnalysis?.rightHand || null,
    face: lastAnalysis?.face || null,
    signWriting: lastAnalysis?.signWriting || null,
    animation: lastAnalysis?.animation || null
  };
};
