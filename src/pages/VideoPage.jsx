import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import VideoList from '../components/VideoList';
import vm1 from '../assets/videomain1.png';
import vm2 from '../assets/videomain2.png';
import vm3 from '../assets/videomain3.png';
import '../assets/css/VideoPage.css';

// Mock DB data
const videosFromDB = [
  {
    id: 1,
    title: "Excel Tips Part 1",
    thumbnail: vm1,
    url: "https://www.youtube.com/embed/ZthlSLYc5UQ",
    comments: ["Great video!", "Very helpful!", "More please!"]
  },
  {
    id: 2,
    title: "Excel Tips Part 2",
    thumbnail: vm2,
    url: "https://www.youtube.com/embed/JPzfno4ot-g",
    comments: ["Clear explanation!", "Nice examples."]
  },
  {
    id: 3,
    title: "Excel Tips Part 3",
    thumbnail: vm3,
    url: "https://www.youtube.com/embed/QvXvfc6oEqI",
    comments: ["Learned a lot", "Thanks for sharing!"]
  }
];

const VideoPage = () => {
  const { id } = useParams();
  const initialVideo = videosFromDB.find(v => v.id === parseInt(id, 10)) || videosFromDB[0];
  const [selectedVideo, setSelectedVideo] = useState(initialVideo);

  return (
    <div className="video-page" style={{dislay: 'flex', gap: '20px'}}>
      <div style={{flex: 4}}>
        <VideoPlayer video={selectedVideo} />
      </div>
      <div style={{ flex: 1}}>
        <VideoList
          videos={videosFromDB}
          selectedVideoId={selectedVideo.id}
          onSelect={setSelectedVideo}
        />
      </div>
    </div>
  );
};

export default VideoPage;
