import { toast } from "react-toastify";
import Trash from "../../assets/imagenes/trash.png"
import { useTokenContext } from "../../contexts/TokenContext";

const deleteExerciseID = async (id) => {
  const {token} = useTokenContext
  console.log(token)
  try {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/deleteExercise/${id.id}`, {
    method: "DELETE",
    headers: {
      authorization: token,
    }
  })
  console.log(res);
  const body = await res.json();

  if (!res.ok) {
    throw new Error(body.message);
  }

  console.log(body)

  toast.success(body.message)

} catch (error) {
  console.error(error.message);
  toast.error(error.message);
}

}

const DeteleExerciseButton = (id) => {
  
  //useDeteleExercise();

  return (
    <button className='logoutButton'
      onClick={() => {
        console.log(id);
        
    deleteExerciseID(id);
    }}
    >
      <img src={Trash } alt="Logout" height ="64" width="64" />
    </button>
    );
  }

export default DeteleExerciseButton;