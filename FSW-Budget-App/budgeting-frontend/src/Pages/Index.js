import React from "react";
import Transactions from "../Components/Transactions";

const Index = ({ transactions }) => {
	return (
		<div className="Index">
			<Transactions transactions={transactions} />
		</div>
	);
};

export default Index;
