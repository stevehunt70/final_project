import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/styles.css";

const VideoMain = () => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/videos"); // ✅ proxy handles backend
        if (!response.ok) throw new Error("Failed to fetch videos");
        const data = await response.json();
        setVideos(data);
      } catch (err) {
        console.error("Error fetching videos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const filteredVideos = videos.filter((video) =>
    video.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div align="center">

      {loading ? (
        <p>Loading videos...</p>
      ) : (
        <div className="video-area">
          {filteredVideos.length === 0 ? (
            <p style={{ textAlign: "center" }}>No videos found</p>
          ) : (
            <div className="videos-grid">
              {filteredVideos.map((video) => (
                <div key={video.id} className="card">
                  <Link to={`/videopage/${video.id}`}>
                    {/* If you store thumbnails in DB, use video.thumbnail_url */}
                    <img
                      src={
                        video.thumbnail_url
                          ? new URL(`../assets/thumbnails/${video.thumbnail_url}`, import.meta.url).href
                          : "/placeholder.png"
                      }
                      alt={video.title}
                    />
                  </Link>
                  <h3>{video.title}</h3>
                  <p>{video.user?.channel_name || "Unknown Channel"}</p>
                  <p>❤ {video.num_likes || 0} likes</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VideoMain;