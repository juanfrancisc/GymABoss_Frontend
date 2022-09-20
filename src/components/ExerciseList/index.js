import "./styles.css";
import Exercise from "../Exercise";

const ExercisesList = ({ exercises }) => {
console.log()
  return (
    <ul className="exercise_list">
      {exercises.map((exercise) => {
        console.log(exercise)
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
