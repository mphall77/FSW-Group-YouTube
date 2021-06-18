import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";

const NewTrans = (props) => {
	const [transaction, setTransaction] = useState({
		userName: "",
		date: "",
		purchase: "",
		amount: 0,
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addNewTransaction(transaction);
		props.history.push("/transactions");
	};

	const handleTextChange = (e) => {
		setTransaction({ ...transaction, [e.target.id]: e.target.value });
	};

	return (
		<div>
			<h1>New Transaction</h1>
			<form onSubmit={handleSubmit}>
				<label>
					From:
					<input
						id="userName"
						value={transaction.userName}
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
						placeholder="01/01/2021"
						required
					/>
				</label>
				<label>
					Purchase:
					<input
						id="purchase"
						value={transaction.purchase}
						onChange={handleTextChange}
						type="text"
						placeholder="I paid for..."
						required
					/>
				</label>
				<label>
					Amount
					<input
						id="amount"
						value={transaction.amount}
						onChange={handleTextChange}
						type="number"
						placeholder="Amount"
						required
					/>
				</label>
				<input type="submit" />
			</form>
		</div>
	);
};

export default withRouter(NewTrans);
