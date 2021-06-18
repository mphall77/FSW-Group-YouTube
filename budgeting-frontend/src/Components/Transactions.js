import React from "react";
import Transaction from "./Transaction";

const Transactions = ({ transactions }) => {
	return (
		<section className="Transactions">
			<h1>Transactions</h1>
			<table>
				<thead>
					<tr>
						<th></th>
						<th></th>
						<th>See this transaction</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction) => {
						return <Transaction transaction={transaction} />;
					})}
				</tbody>
			</table>
		</section>
	);
};

export default Transactions;
