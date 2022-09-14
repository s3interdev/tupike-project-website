import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { projectDB } from '../firebase/config';
import Trashcan from '../assets/trashcan.svg';

const RecipeList = ({ recipes }) => {
	const { mode } = useTheme();

	if (recipes.length === 0) {
		return (
			<div className="error">
				Sorry, there are no recipes with that search term to load...
			</div>
		);
	}

	const handleClick = (id) => {
		projectDB.collection('recipes').doc(id).delete();
	};

	return (
		<div className="recipe-list">
			{recipes.map((recipe) => (
				<div key={recipe.id} className={`card ${mode}`}>
					<h3>{recipe.title}</h3>
					<p>{recipe.cookingTime} to make</p>
					<div className="line-clamp-2">{recipe.method}</div>
					<Link to={`/recipes/${recipe.id}`}>Cook This</Link>
					<img
						className="delete"
						onClick={() => handleClick(recipe.id)}
						src={Trashcan}
						alt="Delete Icon"
					/>
				</div>
			))}
		</div>
	);
};

export default RecipeList;
