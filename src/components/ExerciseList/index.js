import { Link } from "react-router-dom";
import "./styles.css";
import Exercise from "../Exercise";

const ExercisesList = ({ exercises }) => {
  return (
    <ul className="exercise_list">
      {exercises.map((exercise) => {
        console.log(exercise.id)
        return (
            /* <Link to={`?id=${exercise.id}`}> */
            <li key={exercise.id}>
              <Exercise exercise={exercise} />
            </li>
            /* </Link> */
        );
      })}
    </ul>
  );
};

export default ExercisesList;
