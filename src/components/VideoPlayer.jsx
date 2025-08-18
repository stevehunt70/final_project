const VideoPlayer = ({ video, comments }) => {
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
      <p>{video.description}</p>
      <p>{video.num_likes}</p>

      <div className="comments-section">
        <h3>Comments</h3>
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
