import "./App.css";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Home from "./Components/Home";
import { Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<main>
				<NavBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
				</Switch>
			</main>
		</div>
	);
}

export default App;
