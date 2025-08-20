import '../assets/css/VideoPage.css';

const VideoList = ({ videos, selectedVideoId, onSelect }) => {
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
            <p>{video.title}</p>
            <p className="likes">❤ {video.num_likes || 0} likes</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
