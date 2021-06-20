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
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import New from "./Pages/New";
import FourOFour from "./Pages/FourOFour";

const API = apiURL();

function App() {
	const [transactions, setTransactions] = useState([]);

	const addNewTransaction = async (newTransaction) => {
		try {
			const res = await axios.post(`${API}/transactions`, newTransaction);
			// setTransactions([...transactions, res.data]);
			setTransactions((prevTransactions) => [...prevTransactions, res.data]);
		} catch (err) {
			console.log(err);
		}
	};

	const deleteTransaction = async (index) => {
		try {
			await axios.delete(`${API}/transactions/${index}`);
			const deleted = [...transactions];
			deleted.splice(index, 1);
			setTransactions(deleted);
		} catch (err) {
			console.log(err);
		}
	};

	const updateTransaction = async (updatedTransaction, index) => {
		try {
			await axios.get(`${API}/transactions/${index}`, updatedTransaction);
			const newTransaction = [...transactions];
			newTransaction[index] = updatedTransaction;
			setTransactions(newTransaction);
		} catch (err) {
			console.log(err);
		}
	};

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
					<Route path="/transactions/new">
						<New addNewTransaction={addNewTransaction} />
					</Route>
					<Route exact path="/transactions/:index/edit">
						<Edit updateTransaction={updateTransaction} />
					</Route>
					<Route path="/transactions/:index">
						<Show deleteTransaction={deleteTransaction} />
					</Route>
					<Route exact path="/transactions">
						<Index transactions={transactions} />
					</Route>
					<Route path="*">
						<FourOFour />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
