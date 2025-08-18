// src/components/ImageInput.jsx
import React, { useState } from "react";

const ImageInput = ({ onFileSelect }) => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));
    if (onFileSelect) onFileSelect(file); // send File object up
  };

  return (
    <div className="image-input">
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
      <button
        className="btn image-btn"
        onClick={() => document.getElementById("image-upload").click()}
      >
        Choose Thumbnail
      </button>
      {preview && <img className="preview-image" src={preview} alt="Thumbnail" />}
    </div>
  );
};

export default ImageInput;
