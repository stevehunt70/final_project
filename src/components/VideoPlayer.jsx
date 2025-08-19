import CommentsSection from "./CommentsSection";
import LikeButton from "./LikeButton";
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

      <div className="video-header">
        <h2 className="video-title">{video.title}</h2>

        {/* like button */}
        <LikeButton
          key={video.id}
          videoId={video.id}
          initialLikes={video.num_likes ?? 0}
          userId={1} 
        />
      </div>

      <p className="video-description">{video.description}</p>

      {/* Comments section component */}
      <CommentsSection videoId={video.id} initialComments={comments} />
    </div>
  );
};

export default VideoPlayer;
