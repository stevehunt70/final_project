import { useState } from "react";
import "../assets/css/VideoPage.css";

const VideoPlayer = ({ video, comments }) => {

  const [localComments, setLocalComments] = useState(comments || []);
  const [newComment, setNewComment] = useState("");
  const [likes, setLikes] = useState(video.num_likes);

  // Handle like button
  const handleLike = async () => {
    try {
      const res = await fetch(`/api/videos/${video.id}/like`, {
        method: "POST",
      });
      const data = await res.json();
      setLikes(data.num_likes); // update state
    } catch (err) {
      console.error("Error liking video:", err);
    }
  };

  // Handle comment submission
  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    // get logged in user
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("You must be logged in to leave a comment");
      return;
    }

    try {
      const res = await fetch("/api/video-comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          comment_text: newComment,
          user_id: storedUser.id,
          video_id: video.id,
        }),
      });

      const data = await res.json();

      // add new comment to state
      setLocalComments([data, ...localComments]);
      setNewComment("");
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };

  if (!video) return null;

  return (
    <div className="main-video">
      <iframe
        width="100%"
        height="600"
        src={video.url}
        title={video.title}
        frameBorder="0"
        align="center"
        allowFullScreen
      ></iframe>

      {/* Title + Likes row */}
      <div className="video-header">
        <h2 className="video-title">{video.title}</h2>
        <div className="likes-container">
          <span>please click if you love this video</span>
          <button className="emoji" onClick={handleLike}>❤</button>
          <span>{likes} Likes</span>
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
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            id="add_comment"
            name="comment"
            placeholder="Add a comment..."
          />
          <button onClick={handleAddComment}>Comment</button>
        </div>

        {localComments.length > 0 ? (
          localComments.map((c) => (
          <div key={c.id} className="comment-card">
            <div className="comment-header">
              <strong>{c.author?.username || "Anonymous"}:</strong> {" "}
            </div>
            <div className="comment-body">
              {c.comment_text}
            </div>
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
