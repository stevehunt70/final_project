import '../assets/css/VideoPage.css';

const VideoList = ({ videos, selectedVideoId, onSelect }) => {
  return (
    <div className="video-list">
      <h3>Other Videos</h3>
      {videos.map(video => (
        <div
          key={video.id}
          className={`video-item ${video.id === selectedVideoId ? 'active' : ''}`}
          onClick={() => onSelect(video)}
        >
          <img
            src={
              video.thumbnail_url
                ? new URL(`../assets/thumbnails/${video.thumbnail_url}`, import.meta.url).href
                : "/placeholder.png"
            }
            alt={video.title}
          />
          <p>{video.title}</p>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
