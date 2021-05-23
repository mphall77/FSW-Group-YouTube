import "./App.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";
import Video from "./Components/Video";

function App() {
	return (
		<main className="App">
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/videos/:id">
						<Video />
					</Route>
				</Switch>
		</main>
	);
}

export default App;
