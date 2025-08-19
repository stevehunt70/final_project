import "../assets/css/VideoPage.css";

const VideoPlayer = ({ video, comments }) => {
  if (!video) return null;

  return (
    <div className="main-video">
      <iframe
        width="100%"
        height="700"
        src={video.url}
        title={video.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>

      {/* Title + Likes row */}
      <div className="video-header">
        <h2 className="video-title">{video.title}</h2>
        <div className="likes-container">
          <span className="emoji">❤</span>
          <span>{video.num_likes} Likes</span>
        </div>
      </div>

      {/* Description */}
      <p className="video-description">{video.description}</p>

      {/* Comments */}
      <div className="comments-section">
        <h3>Comments</h3>
        
        <div className="add-comment-box">
          <input
            type="text"
            id="add_comment"
            name="comment"
            placeholder="Add a comment..."
          />
          <button>Comment</button>
        </div>

        {comments.length > 0 ? (
          comments.map((c) => (
          <div key={c.id} className="comment">
            <strong>{c.author?.username || "Anonymous"}:</strong> {" "}
            {c.comment_text}
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
      </div>
    </div>
  );
};

export default VideoPlayer;
