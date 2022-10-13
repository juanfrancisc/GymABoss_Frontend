import './styles.css';
import Exercise from '../Exercise';
import useUser from '../../hooks/useUser';
import { useState } from 'react';
import useExercises from '../../hooks/useExercises';

const ExercisesList = () => {
	const {
		exercises,
		setExerciseLikes,
		setDeleteExercise,
		setFavorites,
	} = useExercises([]);

	const { user } = useUser();
	const {  setExercise } = useState();


	return (
		<ul className="exercises_list">
			{exercises.map((exercise) => {
				return (
					<li className="li_exercise_list" key={exercise.id}>
						<Exercise
							user={user}
							exercise={exercise}
							setExercise={setExercise}
							setExerciseLikes={setExerciseLikes}
							setDeleteExercise={setDeleteExercise}
							setFavorites={setFavorites}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default ExercisesList;
