import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
	const [term, setTerm] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		navigate(`/search?q=${term}`);
	};

	return (
		<div className="search-bar">
			<form onSubmit={handleSubmit}>
				<label htmlFor="search">Search: </label>
				<input
					type="text"
					id="search"
					onChange={(e) => setTerm(e.target.value)}
					required
					className="min-w-[280px] rounded-md"
				/>
			</form>
		</div>
	);
};

export default SearchBar;
