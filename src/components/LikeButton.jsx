import { useState, useEffect } from "react";
import "../assets/css/VideoPage.css";

const LikeButton = ({ videoId, userId = 1 }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `/api/video-likes/status?user_id=${userId}&video_id=${videoId}`
        );
        const data = await res.json();
        setLiked(!!data.liked);
        setLikes(data.likeCount ?? 0);
      } catch (err) {
        console.error("Error fetching like status:", err);
      }
    })();
  }, [videoId, userId]);

  const handleToggleLike = async () => {
    try {
      const res = await fetch("/api/video-likes/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId, video_id: videoId }),
      });
      const data = await res.json();

      setLiked(!!data.liked);
      setLikes(data.likeCount ?? likes); 
    } catch (err) {
      console.error("Error toggling like:", err);
    }
  };

  return (
    <button
      type="button"
      className={`likes-container ${liked ? "liked" : ""}`}
      onClick={handleToggleLike}
      aria-pressed={liked}
      aria-label={liked ? "Unlike" : "Like"}
      title={liked ? "Unlike" : "Like"}
    >
      <span className="emoji">❤</span>
      <span>{likes} Likes</span>
    </button>
  );
};

export default LikeButton;
