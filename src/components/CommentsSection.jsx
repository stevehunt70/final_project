import { useState, useEffect } from "react";
import "../assets/css/VideoPage.css";

const CommentsSection = ({ videoId, initialComments }) => {
  const [comments, setComments] = useState(initialComments || []);
  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [openMenuId, setOpenMenuId] = useState(null);

  useEffect(() => {
    setComments(initialComments);
  }, [initialComments]);

  const fetchComments = async () => {
    const res = await fetch(`/api/video-comments?video_id=${videoId}`);
    const data = await res.json();
    setComments(data);
  };

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    await fetch("/api/video-comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        comment_text: newComment,
        video_id: videoId,
        user_id: 1, 
      }),
    });

    setNewComment("");
    fetchComments();
  };

  const handleDeleteComment = async (id) => {
    await fetch(`/api/video-comments/${id}`, { method: "DELETE" });
    setOpenMenuId(null);
    fetchComments();
  };

  const handleEditComment = (comment) => {
    setEditingCommentId(comment.id);
    setEditingText(comment.comment_text);
    setOpenMenuId(null);
  };

  const handleSaveEdit = async (id) => {
    if (!editingText.trim()) return;

    await fetch(`/api/video-comments/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment_text: editingText }),
    });

    setEditingCommentId(null);
    setEditingText("");
    fetchComments();
  };

  const handleCancelEdit = () => {
    setEditingCommentId(null);
    setEditingText("");
  };

  return (
    <div className="comments-section">
      <h3>Comments</h3>

      <div className="add-comment-box">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Comment</button>
      </div>

      {comments.length > 0 ? (
        comments.map((c) => (
          <div key={c.id} className="comment">
            <div className="comment-left">
              <strong>{c.author?.username || "Anonymous"}:</strong>{" "}
              {editingCommentId === c.id ? (
                <>
                  <input
                    type="text"
                    value={editingText}
                    onChange={(e) => setEditingText(e.target.value)}
                  />
                  <button onClick={() => handleSaveEdit(c.id)}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                <span>{c.comment_text}</span>
              )}
            </div>

            <div className="comment-menu">
              <span
                className="three-dots"
                onClick={() =>
                  setOpenMenuId(openMenuId === c.id ? null : c.id)
                }
              >
                ⋮
              </span>
              {openMenuId === c.id && !editingCommentId && (
                <div className="menu-dropdown">
                  <div onClick={() => handleEditComment(c)}>Edit</div>
                  <div onClick={() => handleDeleteComment(c.id)}>Delete</div>
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default CommentsSection;
