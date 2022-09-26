import Edit from "../../assets/imagenes/edit.png"
import { useNavigate } from "react-router-dom";
import EditExerciseForm from "../EditExerciseForm/EditExerciseForm";

const EditExerciseButton = (exercise) => {
    
    const navigate = useNavigate();

    return (
      <button id='deleteButton'
        onClick={() => {
          
          navigate(`../modifyExercises/${exercise.id}`);
          <EditExerciseForm exercise={exercise} />
      }}
      >
        <img src={ Edit } alt="Logout" height ="64" width="64" />
      </button>
      );
    }
  
  export default EditExerciseButton;