import React, { useState } from "react";
/*import axios from "axios";*/
import "./VideoUpload.css"; 

const VideoUpload = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
    thumbnail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /*const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3001/api/videos",
        formData
      );
      alert("Video uploaded!");
      console.log(response.data);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Error uploading video");
    }
  };
  */

  return (
    <div className="upload-container">
      <h2>Upload a Video</h2>
      <form className="upload-form" onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>Video URL:</label>
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
          required
        />

        <label>Thumbnail URL:</label>
        <input
          type="text"
          name="thumbnail"
          value={formData.thumbnail}
          onChange={handleChange}
          required
        />

        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default VideoUpload;
