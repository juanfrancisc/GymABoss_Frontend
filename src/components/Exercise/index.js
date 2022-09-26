import { Link } from "react-router-dom";
import { useTokenContext } from "../../contexts/TokenContext";
import { toast } from "react-toastify";
import "./styles.css";
import flexiones from "../../assets/imagenes/flexiones.jpg";
import useUser from "../../hooks/useUser";
import DeteleExerciseButton from "../DeleteExerciseButton/DeleteExerciseButton";
import ModifyExerciseButton from "../ModifyExerciseButton/ModifyExerciseButton";
import LikeButton from "../LikeButton/LikeButton";
import { useState } from "react";


const Exercise = ({ exercise, like }) => {
  //console.log(exercise)
  const { id, idUser, n_like, title, description, photo, typology } = exercise;

  //const { token, loggedUser } = useTokenContext();
  //console.log(photo)

  const { user } = useUser();
  const { token } = useTokenContext();
  //const [like, setLike] = useState([])
  console.log(like)
  const [loading, setLoading] = useState(true);

  return (
    
    <section className="boxes">
      {user.type_user === 'admin' && <DeteleExerciseButton id={id}/> }
      {user.type_user === 'admin' && <ModifyExerciseButton id={id}/> }
      <Link to={`?id=${id}`}>
      <h3 className="title">{title}</h3>
      <p className="typology">{typology}</p>
      <img height="180" src={flexiones}></img>
      {/* {photo.length > 0 && (
        <img
          
          src={`${process.env.REACT_APP_API_URL}/imagenes/${photo}`}
          alt={title}
        />
      )} */}

      <p className="nLikes">Likes: {n_like}</p>
      </Link>
      
      <LikeButton id={id}/>

      <button type="button" onClick={ async () => {
        
        try {
          const consulta = `${process.env.REACT_APP_API_URL}/addLike/${id}`
          console.log(consulta)
  
          const res = await fetch(consulta,{
              method: "POST",
              headers: {
                authorization: token,
              }
          });
          const body = await res.json();
          console.log(body)
  
          if (!res.ok) {
            throw new Error(
              "Unexpected error fetching API. Please, try again or contact support"
            );
          }
  
          toast.success(body.message)
          like(id)
          console.log(like)
        } catch (error) {
          console.error(error.message);
          toast.error(error.message);
        } finally {
          setLoading(false);
        }


      }}>Me gusta!</button>
    </section>
    
  );
};

export default Exercise;
