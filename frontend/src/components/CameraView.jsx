import React, { useEffect, useRef, useState } from "react";
import signLanguageVideo from "../assets/Sign Language.mp4";

function CameraView({ onCameraError, showSignLanguageVideo = false }) {
  const videoRef = useRef(null);
  const [cameraOn, setCameraOn] = useState(false);
  const streamRef = useRef(null);

  useEffect(() => {
    let active = true;
    const currentVideoRef = videoRef.current;
    
    // If we should show sign language video instead of camera
    if (showSignLanguageVideo) {
      // Stop any existing camera stream
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
      setCameraOn(false);
      
      // Set up sign language video
      if (currentVideoRef) {
        currentVideoRef.srcObject = null;
        currentVideoRef.src = signLanguageVideo;
        currentVideoRef.load();
        // Ensure video plays automatically with repeat
        currentVideoRef.onloadeddata = () => {
          currentVideoRef.play().catch(console.error);
        };
      }
      return;
    }

    // Otherwise, show camera - first unmount any video completely
    if (currentVideoRef) {
      // Completely unmount/clear any existing video
      if (!currentVideoRef.paused) {
        currentVideoRef.pause();
      }
      currentVideoRef.src = "";
      currentVideoRef.srcObject = null;
      currentVideoRef.load(); // This completely resets the video element
      // Remove all event listeners
      currentVideoRef.onloadeddata = null;
      currentVideoRef.onended = null;
      currentVideoRef.onerror = null;
    }

    async function getCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (!active) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        streamRef.current = stream;
        setCameraOn(true);
        if (currentVideoRef) {
          currentVideoRef.srcObject = stream;
        }
      } catch (err) {
        setCameraOn(false);
        if (onCameraError) onCameraError(err);
      }
    }
    getCamera();
    return () => {
      active = false;
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
      }
      setCameraOn(false);
      if (currentVideoRef) {
        // Complete video unmounting
        if (!currentVideoRef.paused) {
          currentVideoRef.pause();
        }
        currentVideoRef.srcObject = null;
        currentVideoRef.src = "";
        currentVideoRef.load(); // Completely reset the video element
        // Clean up all event listeners
        currentVideoRef.onloadeddata = null;
        currentVideoRef.onended = null;
        currentVideoRef.onerror = null;
      }
    };
  }, [onCameraError, showSignLanguageVideo]);

  const handleStopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setCameraOn(false);
    if (videoRef.current) {
      // Complete video unmounting
      if (!videoRef.current.paused) {
        videoRef.current.pause();
      }
      videoRef.current.srcObject = null;
      videoRef.current.src = "";
      videoRef.current.load(); // Completely reset the video element
      // Clean up event listeners
      videoRef.current.onloadeddata = null;
      videoRef.current.onended = null;
      videoRef.current.onerror = null;
    }
  };

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
      <video 
        ref={videoRef} 
        autoPlay 
        playsInline 
        loop={showSignLanguageVideo}
        controls={false}
        muted={showSignLanguageVideo}
        preload="metadata"
        disablePictureInPicture={showSignLanguageVideo}
        controlsList="nodownload nofullscreen noremoteplayback"
        style={{ 
          width: "100%", 
          height: "100%", 
          borderRadius: 12, 
          objectFit: showSignLanguageVideo ? "contain" : "cover",
          pointerEvents: showSignLanguageVideo ? "none" : "auto"
        }} 
      />
      {showSignLanguageVideo && (
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
            pointerEvents: "none",
            zIndex: 1
          }}
        />
      )}
      {cameraOn && (
        <button
          onClick={handleStopCamera}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "rgba(25,118,210,0.9)",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "0.5em 1.2em",
            fontSize: "1em",
            cursor: "pointer",
            zIndex: 2,
            boxShadow: "0 2px 8px 0 rgba(25, 118, 210, 0.13)",
            transition: "background 0.2s"
          }}
        >
          Turn Off Camera
        </button>
      )}
    </div>
  );
}

export default CameraView;
