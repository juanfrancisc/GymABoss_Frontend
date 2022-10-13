import { useTokenContext } from "../../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import IconNewExercise from "../../assets/imagenes/Open-Folder-Add256_24797.png"

const NewExerciseButton = () => {
  const { token } = useTokenContext();
  const navigate = useNavigate();

  

  return (

    <input type="image" 
      src={IconNewExercise}
      alt="Boton de crear nuevo ejercicio"
        className="logoutButton"
        onClick={() => {
          if(token){
            navigate("/newExercise");
          }
          
        }} />
   
    
  );
};

export default NewExerciseButton;