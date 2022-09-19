import "./styles.css";
import Exercise from "../Exercise";

const ExercisesList = ({ exercises }) => {
  return (
    <ul className="exercise_list">
      {exercises.map((exercise) => {
        return (
          <li key={exercise.id}>
            <Exercise exercise={exercise} />
          </li>
        );
      })}
    </ul>
  );
};

export default ExercisesList;
