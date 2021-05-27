import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Home from "./Components/Home";
import Video from "./Components/Video";
import "./App.css";

function App() {
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

  const fetchVideos = async (input) => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&maxResults=${max}&regionCode=US&type=video&videoEmbeddable=true&key=${process.env.REACT_APP_API_KEY}`
      );
      setVideos(res.data.items);
    } catch (err) {
      console.log("error in fetch");
      setVideos([]);
    }
  };

  return (
    <main className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home
            input={input}
            max={max}
            videos={videos}
            hasSearched={hasSearched}
            handleInput={handleInput}
            handleMaxInput={handleMaxInput}
            handleSubmit={handleSubmit}
          />
        </Route>
        <Route path="/about" component={About} />
        <Route path="/videos/:id">
          <Video />
        </Route>
      </Switch>
    </main>
  );
}

export default App;
