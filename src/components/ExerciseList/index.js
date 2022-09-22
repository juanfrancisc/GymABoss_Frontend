import { Link } from "react-router-dom";
import "./styles.css";
import Exercise from "../Exercise";

const ExercisesList = ({ exercises }) => {
  return (
    <ul className="exercise_list">
      {exercises.map((exercise) => {
        //console.log(exercise)
        return (
            <Link to={`?title=${exercise.title}`}> */
            <li key={exercise.id}>
              <Exercise exercise={exercise} />
            </li>
            </Link>
        );
      })}
    </ul>
  );
};

export default ExercisesList;
