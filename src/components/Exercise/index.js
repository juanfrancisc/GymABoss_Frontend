import { Link } from "react-router-dom";
//import { useTokenContext } from "../../contexts/TokenContext";
//import { toast } from "react-toastify";

const Exercise = ({ exercise }) => {
  //console.log(exercise)
  const { id, idUser, n_like, title, description, photo, typology } = exercise;

  //const { token, loggedUser } = useTokenContext();
  //console.log(photo)

  return (
    <section className="exercise">
      <h3>Titulo: {title}</h3>
      <p>Tipologia: {typology}</p>
      <p>description: {description}</p>
      <p>Numero de Like's: {n_like}</p>
      {photo.length > 0 && (
        <img
          //src={`${process.env.REACT_APP_API_URL}/exercises/${photo[0].title}`}
          src={`${process.env.REACT_APP_API_URL}/imagenes/${photo}`}
          alt={title}
        />
      )}
    </section>
  );
};

export default Exercise;
