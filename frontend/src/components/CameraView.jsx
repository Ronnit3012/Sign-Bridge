import React, { useEffect, useRef, useState } from "react";

function CameraView({ onCameraError }) {
  const videoRef = useRef(null);
  const [cameraOn, setCameraOn] = useState(false);
  const streamRef = useRef(null);

  useEffect(() => {
    let active = true;
    async function getCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (!active) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }
        streamRef.current = stream;
        setCameraOn(true);
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
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
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [onCameraError]);

  const handleStopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setCameraOn(false);
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  return (
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
      <video ref={videoRef} autoPlay playsInline style={{ width: "100%", height: "100%", borderRadius: 12, objectFit: "cover" }} />
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
