import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";

import { apiURL } from "../util/apiURL";
const API = apiURL();

const TransDetail = (deleteTransaction) => {
	const [transaction, setTransaction] = useState({});
	let { index } = useParams();
	let history = useHistory();
	const fetchTransaction = async () => {
		try {
			// this is the line that connects to the server the backend
			const res = await axios.get(`${API}/transactions/${index}`);
			setTransaction(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleDelete = () => {
		deleteTransaction(index);
		history.push("/transactions");
	};

	useEffect(() => {
		fetchTransaction();
	}, []);

	return (
		<div>
			<p>
				<strong>Name:</strong> {transaction.from}
			</p>
			<p>
				<strong>Date:</strong> {transaction.date}
			</p>
			<p>
				<strong>Transaction:</strong> {transaction.name}
			</p>
			<p>
				<strong>Amount:</strong> {transaction.amount}
			</p>
			<section className="trns-btns">
				<div>
					<Link to={`/transactions`}>
						<button>Back</button>
					</Link>
				</div>
				<div>
					<Link to={`/transactions/${index}/edit`}>
						<button>Edit</button>
					</Link>
				</div>
				<div>
					<Link to={`/transactions/new`}>
						<button>Create</button>
					</Link>
				</div>
				<div>
					<button onClick={handleDelete}>Delete</button>
				</div>
			</section>
		</div>
	);
};

export default withRouter(TransDetail);
