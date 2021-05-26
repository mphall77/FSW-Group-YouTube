import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../App.css";
import "../Styles/Videos.css";

const Videos = () => {
  // declare useState
  const [videos, setVideos] = useState([]);
  const [input, setInput] = useState("");
  const [max, setMax] = useState(12);
  const [hasSearched, setHasSearched] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleMaxInput = (e) => {
    setMax(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSearched(true);
    setInput(e.target.value);
    fetchVideos(input);
    setInput("");
  };
  // function to call API
  const fetchVideos = async (input) => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&maxResults=${max}&type=video&videoEmbeddable=true&key=${process.env.REACT_APP_API_KEY}`
      );
      setVideos(res.data.items);
    } catch (err) {
      console.log("error in fetch");
      setVideos([]);
    }
  };

  let videoList;
  if (hasSearched) {
    if (videos.length) {
      videoList = (
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
      );
    } else {
      videoList = <div className="no-video">Video not found</div>;
    }
  } else {
    videoList = null;
  }

  return (
    <section className="videos-container">
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input className="search-input"
            onChange={handleInput}
            type="text"
            placeholder="Search..."
            value={input}
            name="input"
          />
          <input className="max-input"
            type="number"
            max="24"
            min="4"
            onChange={handleMaxInput}
            value={max}
            name="max"
            placeholder="12"
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {videoList}
    </section>
  );
};

export default Videos;
