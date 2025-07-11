import React, { useRef, useState } from "react";
import MicNoneIcon from "@mui/icons-material/MicNone";
import MicIcon from "@mui/icons-material/Mic";

function SpeechInput({ inputText, setInputText, placeholder = "Enter your text here...", lang = "en" }) {
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef(null);

  const handleMicClick = () => {
    if (!isRecording) {
      if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        alert('Speech recognition is not supported in this browser.');
        return;
      }
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = lang + '-US'; // Use the lang prop for speech recognition
      recognition.onresult = (event) => {
        let transcript = '';
        for (let i = 0; i < event.results.length; ++i) {
          transcript += event.results[i][0].transcript;
        }
        setInputText(transcript);
      };
      recognition.onerror = (event) => {
        setIsRecording(false);
        recognition.stop();
      };
      recognition.onend = () => {
        setIsRecording(false);
      };
      recognition.start();
      recognitionRef.current = recognition;
      setIsRecording(true);
    } else {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
        recognitionRef.current = null;
      }
      setIsRecording(false);
    }
  };

  return (
    <div className="textarea-mic-wrapper">
      <textarea
        placeholder={placeholder}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="textarea-with-mic"
        lang={lang}
      />
      <button
        className={`mic-btn${isRecording ? " recording" : ""}`}
        onClick={handleMicClick}
        aria-label={isRecording ? "Stop recording" : "Start recording"}
        type="button"
      >
        {isRecording ? <MicIcon fontSize="large" /> : <MicNoneIcon fontSize="large" />}
      </button>
    </div>
  );
}

export default SpeechInput;
