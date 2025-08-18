// src/components/VideoInput.jsx
import React, { useState, useRef } from "react";

export default function VideoInput({ onFileSelect }) {
  const inputRef = useRef();
  const [source, setSource] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setSource(URL.createObjectURL(file));
    if (onFileSelect) onFileSelect(file); // send File object up
  };

  return (
    <div className="video-input">
      <input
        ref={inputRef}
        type="file"
        accept=".mov,.mp4"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {!source && (
        <button
          className="btn video-btn"
          onClick={() => inputRef.current.click()}
        >
          Choose Video
        </button>
      )}
      {source && (
        <video
          className="preview-video"
          controls
          src={source}
        />
      )}
    </div>
  );
}
