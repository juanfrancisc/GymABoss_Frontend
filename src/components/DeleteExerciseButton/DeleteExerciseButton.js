import { useTokenContext } from "../../contexts/TokenContext";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
//import { Link } from "react-router-dom";
import Trash from "../../assets/imagenes/trash.png"
//import useDeteleExercise from "../../hooks/useDeleteExercise";


const DeteleExerciseButton = () => {
  const {token} = useTokenContext();
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");

    const fetchDelete = async () =>{
       try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/deleteExercise/`,{
            method: "GET",
            headers: {
              authorization: token,
            }
        })
        console.log(res)

        const body = await res.json();
        console.log(body)

        setId("")
        toast.success(body.message)
    } catch (error) {
        console.error(error.message);
        toast.error(error.message);
    } finally {
        setLoading(false);
    } 
    };

  return (
    <button className='logoutButton'
      onClick={() => {
        {/* <Link to={`/deleteExercise/${id}`} /> */}
       console.log(id)
        fetchDelete(id);
      }}
    >
      <img src={Trash } alt="Logout" height ="64" width="64" />
    </button>
    );
  }

export default DeteleExerciseButton;