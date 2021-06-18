import { Link } from "react-router-dom";
const Transaction = ({ transaction }) => {
	return (
		<tr>
			<td>{transaction.from}</td>
			<td>{transaction.date}</td>
			<td>
				<Link to={`/transactions`}>{transaction.name}</Link>
			</td>
			<td>{transaction.amount}</td>
		</tr>
	);
};

export default Transaction;
