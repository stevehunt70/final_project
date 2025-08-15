import {useState} from "react";
import { Link } from "react-router-dom";
import vm1 from "../assets/videomain1.png";
import vm2 from "../assets/videomain2.png";
import vm3 from"../assets/videomain3.png";
import "../assets/css/styles.css";
import VideoCard from "../components/VideoCard";

const videos = [
  {id:1, title: 'Excel Tips 1', thumbnail: vm1, channel: 'Bobs Videos', views: '2' },
  {id:2, title: 'Excel Tips 2', thumbnail: vm2, channel: 'Excel schmexcel', views: '1246' },
  {id:3, title: 'Excel Tips 3', thumbnail: vm3, channel: 'BestExcelTips', views: '1.6m' },
]

const VideoMain = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div align="center">
      <h2>Video Section</h2>
      <div className="video-area" >
        {/*Below is where video cards are put which need to be updated*/}
        <div className="videos-grid">
          {[...Array(8)].map((_, idx) => (
            <VideoCard key={idx} />
          ))}
        </div>
      </div>

      <div className="video-area">
        {filteredVideos.length === 0 ? (
          <p style={{ textAlign: "center" }}>No videos found</p>
        ) : (
          filteredVideos.map((video) => (
            <div key={video.id} className="card">
              <Link to={`/videopage/${video.id}`}>
                <img src={video.thumbnail} alt={video.title} />
              </Link>
              <h3>{video.title}</h3>
              <p>{video.channel}</p>
              <p>{video.views} views</p>
              
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default VideoMain;
