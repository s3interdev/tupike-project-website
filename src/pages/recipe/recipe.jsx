import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectDB } from '../../firebase/config';
import { useTheme } from '../../hooks/useTheme';

const Recipe = () => {
	const { id } = useParams();
	const { mode } = useTheme();

	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);
	const [recipe, setRecipe] = useState(null);

	const navigate = useNavigate();

	useEffect(() => {
		setIsPending(true);

		projectDB
			.collection('recipes')
			.doc(id)
			.get()
			.then((doc) => {
				if (doc.exists) {
					setIsPending(false);
					setRecipe(doc.data());
				} else {
					setIsPending(false);
					setError('Could not find the recipe');
				}
			});
	}, [id]);

	const handleClick = async () => {
		try {
			await projectDB.collection('recipes').doc(id).update({
				title: 'Completely Different Title',
			});
			navigate('/');
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className={`recipe ${mode}`}>
			{error && <p className="error">{error}</p>}

			{isPending && <p className="loading">Loading...</p>}

			{recipe && (
				<>
					<h2 className="page-title">{recipe.title}</h2>
					<p>Takes {recipe.cookingTime} to cook</p>
					<ul>
						{recipe.ingredients.map((ingredient) => (
							<li key={ingredient}>{ingredient}</li>
						))}
					</ul>
					<p className="method">{recipe.method}</p>
					<button onClick={handleClick} className="btn">
						Simple Update
					</button>
				</>
			)}
		</div>
	);
};

export default Recipe;
