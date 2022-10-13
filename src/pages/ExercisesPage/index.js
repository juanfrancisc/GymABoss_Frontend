import ExerciseList from '../../components/ExerciseList';
import Spinner from '../../components/Spinner';
import useExercises from '../../hooks/useExercises';
import './styles.css';


const ExercisesPage = () => {
	const { exercises, loading } =
		useExercises();

	return (
		<section className="list_exercises">
			<h2 className="exercise">Ejercicios</h2>

			{loading && <Spinner />}

			{exercises.length === 0 ? (
				<h1 className="NoExercises">No hay ejercicios</h1>
			) : (
				<ExerciseList exercises={exercises} />
			)}

		</section>
	);
};

export default ExercisesPage;
