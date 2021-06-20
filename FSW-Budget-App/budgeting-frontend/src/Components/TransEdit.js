import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const TransEdit = (props) => {
	let { index } = useParams();
	let history = useHistory();

	const [transaction, setTransaction] = useState({
		userName: "",
		date: "",
		purchase: "",
		amount: 0,
	});

	const handleTextChange = (e) => {
		setTransaction({ ...transaction, [e.target.id]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.updateTransaction(transaction, index);
		history.push(`/transactions/${index}`);
	};

	const fetchTransaction = async () => {
		try {
			// this is the line that connects to the server the backend
			let res = await axios.get(`${API}/transactions/${index}`);
			setTransaction(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		fetchTransaction();
	}, []);

	return (
		<div className="Edit">
			<form onSubmit={handleSubmit}>
				<label>
					From:
					<input
						id="from"
						value={transaction.from}
						onChange={handleTextChange}
						type="text"
						placeholder="Your Name"
						required
					/>
				</label>
				<label>
					Date:
					<input
						id="date"
						value={transaction.date}
						onChange={handleTextChange}
						type="text"
						placeholder="May 5"
						required
					/>
				</label>
				<label>
					Purchase:
					<input
						id="name"
						value={transaction.name}
						onChange={handleTextChange}
						type="text"
						placeholder="I paid for..."
						required
					/>
				</label>
				<label>
					Amount:
					<input
						id="amount"
						value={transaction.amount}
						onChange={handleTextChange}
						type="number"
						placeholder="Amount"
						required
					/>
				</label>

				<div>
					<button onClick={handleSubmit} className="submit-btn">
						Submit
					</button>
				</div>
			</form>
			<Link to={`/transactions/${index}`}>
				<button className="submit-btn">Back</button>
			</Link>
		</div>
	);
};

export default TransEdit;
