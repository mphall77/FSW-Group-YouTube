import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Video from "./Components/Video";
import NavBar from "./Components/NavBar";
import "./App.css";

function App() {
	return (
		<main className="App">
				<NavBar />
				<Switch>
					<Route path="/videos/:id">
						<Video />
					</Route>
					<Route path="/about" component={About} />
					<Route exact path="/" component={Home} />
				</Switch>
		</main>
	);
}

export default App;
