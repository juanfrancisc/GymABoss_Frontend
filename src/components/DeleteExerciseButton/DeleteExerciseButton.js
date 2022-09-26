import { toast } from "react-toastify";
import Trash from "../../assets/imagenes/trash.png"
import { useTokenContext } from "../../contexts/TokenContext";
/* import { useState } from "react"; */
import { useNavigate } from "react-router-dom";
import './DeleteExerciseButton.css'

const deleteExerciseID = async (id,token) => {
  
  try {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/deleteExercise/${id.id}`, {
    method: "DELETE",
    headers: {
      authorization: token,
    }
  })
  //console.log(res);
  const body = await res.json();

  if (!res.ok) {
      throw new Error(body.message);
  }
   //console.log(body)

  toast.success(body.message)
} catch (error) {
  console.error(error.message);
  toast.error(error.message);
}

};

const DeteleExerciseButton = (id) => {
  //useDeteleExercise();
  const navigate = useNavigate();
  const {token} = useTokenContext();
  //console.log(token)

  return (
    <button id='deleteButton'
      onClick={() => {
        //console.log(id);
        deleteExerciseID(id,token);
        navigate("/");
    }}
    >
      <img src={Trash } alt="Logout" height ="64" width="64" />
    </button>
    );
  }

export default DeteleExerciseButton;