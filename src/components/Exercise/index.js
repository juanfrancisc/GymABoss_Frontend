import { Link } from "react-router-dom";
import { useTokenContext } from "../../contexts/TokenContext";
import { toast } from "react-toastify";

const Exercise = ({ exercise }) => {
  const { id, idUser, title, description, photo, typology } = exercise;

  const { token, loggedUser } = useTokenContext();

  return (
    <section className="exercise">
      <h3>{title}</h3>
      <p>{typology}</p>
      <p>{description}</p>
      {photo.length > 0 && (
        <img
          src={`${process.env.REACT_APP_API_URL}/exercises/${photo[0].title}`}
          alt={title}
        />
      )}
    </section>
  );
};

export default Exercise;
