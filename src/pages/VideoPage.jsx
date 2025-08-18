import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import VideoPlayer from "../components/VideoPlayer";
import VideoList from "../components/VideoList";
import '../assets/css/VideoPage.css';

const VideoPage = () => {
  const { id } = useParams(); // e.g. /video/5 → id = "5"
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all videos + comments for the current one
  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch all videos (for sidebar list)
        const resVideos = await fetch("/api/videos");
        const videosData = await resVideos.json();
        setVideos(videosData);

        // pick the video that matches the route param
        const current = videosData.find(v => v.id === parseInt(id));
        setSelectedVideo(current);

        // fetch comments for that video
        const resComments = await fetch(`/api/video-comments?video_id=${id}`);
        const commentsData = await resComments.json();
        setComments(commentsData);
      } catch (err) {
        console.error("Error fetching video page:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // When user clicks another video in VideoList
  const handleSelectVideo = async (video) => {
    setSelectedVideo(video);

    // fetch its comments
    const resComments = await fetch(`/api/video-comments?video_id=${video.id}`);
    const commentsData = await resComments.json();
    setComments(commentsData);
  };

  if (loading) return <p>Loading...</p>;
  if (!selectedVideo) return <p>Video not found.</p>;

  return (
    <div className="video-page">
      {/* main video player flex-grow 4 */}
      <div className="main-video">
        <VideoPlayer video={selectedVideo} comments={comments} />
      </div>

      {/* sidebar list flex-grow 1 */}
      <div className="video-list">
        <VideoList
          videos={videos}
          selectedVideoId={selectedVideo.id}
          onSelect={handleSelectVideo}
        />
      </div>
    </div>
  );
};

export default VideoPage;