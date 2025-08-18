// src/pages/VideoUpload.jsx
import React, { useState } from "react";
import VideoInput from "../components/VideoInput";
import ImageInput from "../components/ImageInput";
import { useNavigate } from "react-router-dom";
import "./VideoUpload.css";

export default function UploadVideo() {
  const [videoFile, setVideoFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState("");
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const userId = user?.id; // safe lookup

  const handlePublish = async () => {
    if (!videoFile || !thumbnailFile || !title || !description) {
      alert("Please provide all fields");
      return;
    }

    const payload = {
      title,
      description,
      num_likes: 0,
      user_id: userId,
      url: videoUrl,           
      thumbnail_url: thumbnailUrl,
    };

    try {
      const response = await fetch("http://localhost:3002/api/videos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to publish video");
      }

      const data = await response.json();
      console.log("Video published:", data);
      setSuccess("✅ Video published successfully!");
      setSubmitted(true); // show success message
    } catch (err) {
      console.error(err);
      setSuccess("❌ Failed to publish video.");
    }
  };

  const handlePublishAnother = () => {
    // Reset form
    setVideoFile(null);
    setVideoUrl("");
    setThumbnailFile(null);
    setThumbnailUrl("");
    setTitle("");
    setDescription("");
    setSuccess("");
    setSubmitted(false);
  };

  if (submitted) {
    // Success message view
    return (
      <div className="upload-container">
        <h2>{success}</h2>
        <button className="btn" onClick={handlePublishAnother}>
          Publish another video
        </button>
        <button className="btn" onClick={() => navigate("/VideoMain")}>
          Return to main
        </button>
      </div>
    );
  }

  // Default form view
  return (
    <div className="upload-container">
      <h2>Upload Video</h2>

      <div className="form-field">
        <label>Title:</label>
        <input
          className="text-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-field">
        <label>Description:</label>
        <input
          className="text-input"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <VideoInput
        onFileSelect={(file) => {
          setVideoFile(file);
          setVideoUrl(file.name); 
        }}
      />

      <ImageInput
        onFileSelect={(file) => {
          setThumbnailFile(file);
          setThumbnailUrl(file.name); 
        }}
      />      

      <button className="btn publish-btn" onClick={handlePublish}>
        Publish
      </button>
    </div>
  );
}
