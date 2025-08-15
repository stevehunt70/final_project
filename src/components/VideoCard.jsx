import './VideoCard.css'; // Assuming you have a CSS file for styling

const VideoCard = () => {
  return (
    <div className="video-card">
      <img src="/dog.jpg" alt="Video Thumbnail" className="thumbnail" />

      <div className="video-info">
        <img src="/dog.jpg" alt="Channel Avatar" className="avatar" />

        <div className="video-text">
          <h3 className="video-title">I am the Smartest Dog!</h3>
          <p className="video-channel">Mrwhosetheboss</p>
          <p className="video-meta">2.2M views • 2 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;