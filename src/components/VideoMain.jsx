import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import vm1 from '../assets/videomain1.png';
import vm2 from '../assets/videomain2.png';
import vm3 from '../assets/videomain3.png';
import '../assets/css/styles.css';

const videos = [
  {id:1, title: 'Excel Tips 1', thumbnail: vm1 },
  {id:2, title: 'Excel Tips 2', thumbnail: vm2 },
  {id:3, title: 'Excel Tips 3', thumbnail: vm3 },
]

const VideoMain = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div>
      <div align="center">
        <h2>Video Section</h2>
        <p>This is where the videos will appear from the database.</p>
      </div>

      <div className="video-area">
        {filteredVideos.length === 0 ? (
          <p style={{ textAlign: "center" }}>No videos found</p>
        ) : (
          filteredVideos.map((video) => (
            <div key={video.id} className="card">
              <Link to={`/video/${video.id}`}>
                <img src={video.thumbnail} alt={video.title} />
              </Link>
              <div className="container">
                <h4>{video.title}</h4>
                <p>Other stuff here about the video</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VideoMain;
