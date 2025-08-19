import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "../assets/css/styles.css";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q") || "";
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/videos");
        if (!response.ok) throw new Error("Failed to fetch videos");
        const data = await response.json();

        // filter client-side
        const filtered = data.filter(video =>
          video.title?.toLowerCase().includes(query.toLowerCase()) ||
          video.description?.toLowerCase().includes(query.toLowerCase())
        );
        setVideos(filtered);
      } catch (err) {
        console.error("Error fetching videos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [query]);

  return (
    <div align="center">
      <h2>Search results for: "{query}"</h2>

      {loading ? (
        <p>Loading...</p>
      ) : videos.length === 0 ? (
        <p>No results found</p>
      ) : (
        <div className="videos-grid">
          {videos.map(video => (
            <div key={video.id} className="card">
              <Link to={`/videopage/${video.id}`}>
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
  );
};

export default SearchResults;
