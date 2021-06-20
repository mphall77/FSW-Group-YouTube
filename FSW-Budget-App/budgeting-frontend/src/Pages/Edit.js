import TransEdit from "../Components/TransEdit";

const Edit = ({ updateTransaction }) => {
	return (
		<div>
			<h1>Edit a Transaction</h1>
			<TransEdit updateTransaction={updateTransaction} />
		</div>
	);
};

export default Edit;
