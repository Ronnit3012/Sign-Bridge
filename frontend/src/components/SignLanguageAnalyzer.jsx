// components/SignLanguageAnalyzer.jsx
import React, { useRef, useEffect, useState } from 'react';
import { useSignLanguageAnalyzer } from '../hooks/useSignLanguageAnalyzer';

/**
 * React component for sign language analysis with video feed
 */
const SignLanguageAnalyzer = ({
  width = 640,
  height = 480,
  showDebugInfo = false,
  enableContinuousAnalysis = true,
  onAnalysis = null,
  className = ''
}) => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [stream, setStream] = useState(null);

  const {
    isInitialized,
    isInitializing,
    isAnalyzing,
    lastAnalysis,
    error,
    statistics,
    // initialize,
    startContinuousAnalysis,
    stopContinuousAnalysis,
    reset
  } = useSignLanguageAnalyzer({
    autoInitialize: true,
    enableContinuousAnalysis: false // We'll control this manually
  });

  // Initialize camera
  useEffect(() => {
    const initializeCamera = async () => {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { width, height, facingMode: 'user' },
          audio: false
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = mediaStream;
          setStream(mediaStream);
        }
      } catch (err) {
        console.error('Error accessing camera:', err);
      }
    };

    initializeCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, [width, height]);

  // Handle video ready
  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

  // Start/stop analysis based on conditions
  useEffect(() => {
    if (isVideoReady && isInitialized && enableContinuousAnalysis && videoRef.current) {
      startContinuousAnalysis(videoRef.current, {
        onAnalysis: (analysis) => {
          if (onAnalysis) {
            onAnalysis(analysis);
          }
          // Draw results on canvas if available
          if (canvasRef.current) {
            drawAnalysisResults(analysis);
          }
        }
      });
    } else {
      stopContinuousAnalysis();
    }

    return () => {
      stopContinuousAnalysis();
    };
  }, [isVideoReady, isInitialized, enableContinuousAnalysis, startContinuousAnalysis, stopContinuousAnalysis, onAnalysis]);

  /**
   * Draw analysis results on canvas overlay
   */
  const drawAnalysisResults = (analysis) => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    if (!canvas || !video) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw pose landmarks if available
    if (analysis.pose?.landmarks) {
      ctx.strokeStyle = '#00ff00';
      ctx.lineWidth = 2;
      
      // Draw connections between pose landmarks
      const connections = [
        [11, 12], [11, 13], [13, 15], [12, 14], [14, 16], // Arms
        [11, 23], [12, 24], [23, 24], // Torso
        [23, 25], [25, 27], [24, 26], [26, 28] // Legs
      ];

      connections.forEach(([start, end]) => {
        const startPoint = analysis.pose.landmarks[start];
        const endPoint = analysis.pose.landmarks[end];
        if (startPoint && endPoint) {
          ctx.beginPath();
          ctx.moveTo(startPoint.x * canvas.width, startPoint.y * canvas.height);
          ctx.lineTo(endPoint.x * canvas.width, endPoint.y * canvas.height);
          ctx.stroke();
        }
      });
    }

    // Draw hand landmarks
    ['leftHand', 'rightHand'].forEach((hand, index) => {
      if (analysis[hand]?.landmarks) {
        ctx.fillStyle = index === 0 ? '#ff0000' : '#0000ff';
        analysis[hand].landmarks.forEach(landmark => {
          ctx.beginPath();
          ctx.arc(
            landmark.x * canvas.width,
            landmark.y * canvas.height,
            3,
            0,
            2 * Math.PI
          );
          ctx.fill();
        });
      }
    });

    // Draw face landmarks
    if (analysis.face?.landmarks) {
      ctx.fillStyle = '#ffff00';
      analysis.face.landmarks.forEach(landmark => {
        ctx.beginPath();
        ctx.arc(
          landmark.x * canvas.width,
          landmark.y * canvas.height,
          1,
          0,
          2 * Math.PI
        );
        ctx.fill();
      });
    }
  };

  if (error) {
    return (
      <div className={`sign-analyzer-error ${className}`}>
        <p>Error: {error}</p>
        <button onClick={reset}>Retry</button>
      </div>
    );
  }

  return (
    <div className={`sign-analyzer ${className}`}>
      <div className="video-container" style={{ position: 'relative', display: 'inline-block' }}>
        <video
          ref={videoRef}
          width={width}
          height={height}
          autoPlay
          muted
          onLoadedData={handleVideoReady}
          style={{ display: 'block' }}
        />
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none'
          }}
        />
        
        {/* Status overlay */}
        <div style={{
          position: 'absolute',
          top: 10,
          left: 10,
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          padding: '5px 10px',
          borderRadius: '5px',
          fontSize: '12px'
        }}>
          {isInitializing && 'Initializing...'}
          {isInitialized && !isAnalyzing && 'Ready'}
          {isAnalyzing && 'Analyzing...'}
          {lastAnalysis?.isSigning && '🤟 Signing detected'}
        </div>
      </div>

      {/* Debug info */}
      {showDebugInfo && lastAnalysis && (
        <div className="debug-info" style={{ marginTop: '10px', fontSize: '12px' }}>
          <h4>Analysis Results:</h4>
          <p>Is Signing: {lastAnalysis.isSigning ? 'Yes' : 'No'}</p>
          <p>Left Hand: {lastAnalysis.leftHand ? 'Detected' : 'Not detected'}</p>
          <p>Right Hand: {lastAnalysis.rightHand ? 'Detected' : 'Not detected'}</p>
          <p>Face: {lastAnalysis.face ? 'Detected' : 'Not detected'}</p>
          {lastAnalysis.signWriting && (
            <p>SignWriting: {lastAnalysis.signWriting}</p>
          )}
          {statistics && (
            <div>
              <h5>Statistics:</h5>
              <p>Total Frames: {statistics.totalFrames}</p>
              <p>Avg Processing Time: {statistics.averageProcessingTime?.toFixed(2)}ms</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignLanguageAnalyzer;
