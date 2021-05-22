import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import { Route } from "react-router-dom";
import "./App.css";

function App() {
  
  return (
    <div className="App">
      <main>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </main>
    </div>
  );
}

export default App;
