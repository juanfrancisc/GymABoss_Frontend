import Edit from "../../assets/imagenes/edit.png"
import { useNavigate } from "react-router-dom";
import EditExerciseForm from "../EditExerciseForm/EditExerciseForm";

const EditExerciseButton = ({exercise}) => {

    const navigate = useNavigate();
   /*  console.log(exercise) */
    const { id, title, description, typology, photo} = exercise;
    /* console.log(title) */
    return (
      <button id='deleteButton'
        onClick={() => {
          //console.log(exercise);
          navigate(`../editExercises/${id}`);
      }}>
        <img src={Edit } alt="Logout" height ="64" width="64" />
      </button>
      );
    }
  
  export default EditExerciseButton;