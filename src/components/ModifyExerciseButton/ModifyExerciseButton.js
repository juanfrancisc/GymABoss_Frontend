import Edit from "../../assets/imagenes/edit.png"
import { useNavigate } from "react-router-dom";

const DeteleExerciseButton = (id) => {
    //useDeteleExercise();
    const navigate = useNavigate();
  
    return (
      <button id='deleteButton'
        onClick={() => {
          console.log(id);
          navigate(`?id=${id.id}`);
      }}
      >
        <img src={Edit } alt="Logout" height ="64" width="64" />
      </button>
      );
    }
  
  export default DeteleExerciseButton;