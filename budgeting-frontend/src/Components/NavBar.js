import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav>
			<Link exact to="/">
				HOME
			</Link>
			<Link to="/transactions">TRANSACTIONS</Link>
			<Link to="/transactions/new">New Transaction</Link>
		</nav>
	);
}
