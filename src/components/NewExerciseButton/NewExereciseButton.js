import { useTokenContext } from "../../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";

const NewExerciseButton = () => {
  const { token } = useTokenContext();
  const navigate = useNavigate();

  

  return (
    <button className='logoutButton'
      onClick={() => {
        if(token){
            navigate("/newExercise");
        }
                
      }}
    >
      New Exercise
    </button>
  );
};

export default NewExerciseButton;