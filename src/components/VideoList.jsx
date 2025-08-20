import React, { useState } from "react";
import '../assets/css/VideoPage.css';

const truncateText = (text, wordLimit) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + " ...";
};

const VideoList = ({ videos, selectedVideoId, onSelect }) => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="video-list">
      <h3>Other Videos</h3>
      {videos.map(video => (
        <div
          key={video.id}
          className={`video-item ${video.id === selectedVideoId ? 'active' : ''}`}
          onClick={() => onSelect(video)}>
          <div>
            <img
              src={
                video.thumbnail_url
                  ? new URL(`../assets/thumbnails/${video.thumbnail_url}`, import.meta.url).href
                  : "/placeholder.png"
              }
              alt={video.title}
            />
          </div>
          <div className="video-item-content">
            <p><strong>{video.title}</strong></p>
            <p>
              {expanded[video.id]
                ? video.description
                : truncateText(video.description, 10)}                
              {video.description?.split(" ").length > 10 && (
                <button
                  className="show-more-btn"
                  onClick={(e) => {
                    e.stopPropagation(); // prevent selecting video when clicking button
                    toggleExpand(video.id);
                  }}
                >
                  {expanded[video.id] ? " Show less" : " Show more"}
                </button>
              )}
            </p>
            <p className="likes">❤ {video.num_likes || 0} likes</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
