import TransDetail from "../Components/TransDetail";

const Show = ({ deleteTransaction }) => {
	return (
		<div>
			<h1>Transaction Details</h1>
			<section>
				<TransDetail deleteTransaction={deleteTransaction} />
			</section>
		</div>
	);
};
export default Show;
