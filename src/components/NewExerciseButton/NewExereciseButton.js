import { useTokenContext } from "../../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
import IconNewExercise from "../../assets/imagenes/Open-Folder-Add256_24797.png"

const NewExerciseButton = () => {
  const { token } = useTokenContext();
  const navigate = useNavigate();

  

  return (
    <>
    <button className='logoutButton'
      onClick={() => {
        if(token){
            navigate("/newExercise");
        }
      }}
    >
      <img src={IconNewExercise } alt="New Exercise" height ="64" width="64" />
    </button>
    </>
    
  );
};

export default NewExerciseButton;