import { Link } from "react-router-dom";
//import { useTokenContext } from "../../contexts/TokenContext";
//import { toast } from "react-toastify";
import "./styles.css";
import flexiones from "../../assets/imagenes/flexiones.jpg";
import useUser from "../../hooks/useUser";
import DeteleExerciseButton from "../DeleteExerciseButton/DeleteExerciseButton";
import ModifyExerciseButton from "../ModifyExerciseButton/ModifyExerciseButton";


const Exercise = ({ exercise }) => {
  //console.log(exercise)
  const { id, idUser, n_like, title, description, photo, typology } = exercise;

  //const { token, loggedUser } = useTokenContext();
  //console.log(photo)

  const { user } = useUser();

  return (
    
    <section className="boxes">
      {user.type_user === 'admin' && <DeteleExerciseButton id={id}/>  }
      {user.type_user === 'admin' && <ModifyExerciseButton id={id}/>  }
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
    </section>
    
  );
};

export default Exercise;
