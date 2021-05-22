import { useState } from "react";
import axios from "axios";

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
  }
  // function to call API
  const fetchVideos = async (input) => {
    try {
      const res = await axios.get(
		`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&type=video&videoEmbeddable=true&key=${process.env.REACT_APP_API_KEY}`

      );
      setVideos(res.data.items);
    } catch (err) {
      setVideos([]);
    }
  };

  return (
    <section>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleInput}
            type="text"
            placeholder="Search"
            value={input}
          ></input>
          <button type="submit">Search</button>
        </form>
      </div>
      <ul>
        {videos.map((video) => {
		  return (
            <li key={video.id.videoId}>
              <img src={video.snippet.thumbnails.medium.url} alt="video" />
              <h4>{video.snippet.title}</h4>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Videos;
