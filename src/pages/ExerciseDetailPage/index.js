import useUser from "../../hooks/useUser";
import { useParams } from "react-router-dom";
import VerExercise from "../../components/VerExercise";

const ExerciseDetail = () => {
    const { id } = useParams();
    const { user } = useUser();

    return (
      <fieldset className="view_exercise_detail">

        <VerExercise id={id} user={user}/>
  
      </fieldset>
    );
  };
  
  export default ExerciseDetail; 