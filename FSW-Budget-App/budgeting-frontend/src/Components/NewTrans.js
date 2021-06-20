import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

const NewTrans = (props) => {
	let history = useHistory();

	const [transaction, setTransaction] = useState({
		userName: "",
		date: "",
		purchase: "",
		amount: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addNewTransaction(transaction);
		history.push("/transactions");
	};

	const handleTextChange = (e) => {
		setTransaction({ ...transaction, [e.target.id]: e.target.value });
	};

	return (
		<div className="New">
			<h1>New Transaction</h1>
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
						type="date"
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
						placeholder="0"
						required
					/>
				</label>
				<button onClick={handleSubmit} class="submitBtn">
					Submit
				</button>
			</form>
		</div>
	);
};

export default withRouter(NewTrans);
