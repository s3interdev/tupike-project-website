import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { projectDB } from '../../firebase/config';

const Create = () => {
	const [title, setTitle] = useState('');
	const [method, setMethod] = useState('');
	const [cookingTime, setCookingTime] = useState('');
	const [newIngredient, setNewIngredient] = useState('');
	const [ingredients, setIngredients] = useState([]);
	const ingredientInput = useRef(null);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const doc = { title, ingredients, method, cookingTime: cookingTime + ' minutes' };

		try {
			await projectDB.collection('recipes').add(doc);
			navigate('/');
		} catch (err) {
			console.log(err);
		}
	};

	const handleAddIngredinet = (e) => {
		e.preventDefault();
		const ingredient = newIngredient.trim();

		if (ingredient && !ingredients.includes(ingredient)) {
			setIngredients((previousIngredients) => [...previousIngredients, newIngredient]);
		}

		setNewIngredient('');
		ingredientInput.current.focus();
	};

	return (
		<div className="create">
			<h2 className="page-title">Add New Recipe</h2>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Recipe Title:</span>
					<input
						type="text"
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						required
						className="rounded-md"
					/>
				</label>

				<label>
					<span>Recipe Ingredients:</span>
					<div className="ingredients">
						<input
							type="text"
							onChange={(e) => setNewIngredient(e.target.value)}
							value={newIngredient}
							ref={ingredientInput}
							className="min-w-[380px] rounded-md"
						/>
						<button onClick={handleAddIngredinet} className="btn">
							Add
						</button>
					</div>
				</label>
				<p>
					Current Ingredients:{' '}
					{ingredients.map((i) => (
						<em key={i}>{i}, </em>
					))}
				</p>

				<label>
					<span>Recipe Method:</span>
					<textarea
						onChange={(e) => setMethod(e.target.value)}
						value={method}
						required
						rows="5"
						className="rounded-md"
					/>
				</label>

				<label>
					<span>Cooking Time (minutes):</span>
					<input
						type="number"
						onChange={(e) => setCookingTime(e.target.value)}
						value={cookingTime}
						required
						className="rounded-md"
					/>
				</label>

				<button className="btn">Submit</button>
			</form>
		</div>
	);
};

export default Create;
