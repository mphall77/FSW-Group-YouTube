import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const TransDetail = (props) => {
	const [transactions, setTransactions] = useState([]);

	let { index } = useParams();
	let history = useHistory();

	const { userName, date, purchase, amount } = transaction;

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
		<div>
			<h1>Transaction Details</h1>
			<p>Name: {userName}</p>
			<p>Date: {date}</p>
			<p>Transaction: {purchase}</p>
			<p>Amount: {amount}</p>
			<Link to={`/transactions`}>
				<button>Back</button>
			</Link>
			<Link to={`/transactions/${index}/edit`}>
				<button>Edit</button>
			</Link>
			<Link to={`/transactions/new`}>
				<button>Create</button>
			</Link>
		</div>
	);
};

export default TransDetail;
