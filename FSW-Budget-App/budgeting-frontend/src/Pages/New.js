import NewTrans from "../Components/NewTrans";

const New = ({ addNewTransaction }) => {
	return (
		<section>
			<NewTrans addNewTransaction={addNewTransaction} />
		</section>
	);
};

export default New;
