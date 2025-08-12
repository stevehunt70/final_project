import React from 'react';

const VideoPlayer = ({ video }) => {
  if (!video) return null;

  return (
    <div className="main-video">
      <iframe
        width="100%"
        height="400"
        src={video.url}
        title={video.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <h2>{video.title}</h2>

      <div className="comments-section">
        <h3>Comments</h3>
        {video.comments.length > 0 ? (
          video.comments.map((c, i) => <p key={i}>{c}</p>)
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
