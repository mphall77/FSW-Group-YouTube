import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../App.css";
import "../Styles/Videos.css";

const Videos = () => {
  // declare useState
  const [videos, setVideos] = useState([]);
  const [input, setInput] = useState("");

  const handleInput = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(e.target.value);
    fetchVideos(input);
    setInput("");
  };
  // function to call API
  const fetchVideos = async (input) => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&maxResults=2&type=video&videoEmbeddable=true&key=${process.env.REACT_APP_API_KEY}`
      );
      setVideos(res.data.items);
    } catch (err) {
      setVideos([]);
    }
  };

  return (
    <section className="videos-container">
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleInput}
            type="text"
            placeholder="Search"
            value={input}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <ul className="video-list">
        {videos.map((video) => {
          return (
            <Link to={`/videos/${video.id.videoId}`} key={video.id.videoId}>
              <li className="single-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id.videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="embedded video"
                  alt="video"
                />
                <h4>{video.snippet.title}</h4>
              </li>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default Videos;
