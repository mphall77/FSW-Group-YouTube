// DEPENDENCIES
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

// COMPONENTS
import NavBar from "./Components/NavBar";
import { apiURL } from "./util/apiURL";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";

const API = apiURL();

function App() {
	const [transactions, setTransactions] = useState([]);

	const fetchTransactions = async () => {
		try {
			// this is the line that connects to the server the backend
			let res = await axios.get(`${API}/transactions`);
			setTransactions(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchTransactions();
	}, []);

	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/transactions">
						<Index transactions={transactions} />
					</Route>
					<Route path="/transactions/new">
						<New addNewTransaction={addNewTransaction} />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
