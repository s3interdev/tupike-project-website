import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Navbar = () => {
	const { color } = useTheme();

	return (
		<div className="navbar" style={{ background: color }}>
			<nav>
				<Link to="/" className="brand">
					<h1>Tupike</h1>
				</Link>
				<Link to="/create">Create Recipe</Link>
			</nav>
		</div>
	);
};

export default Navbar;
