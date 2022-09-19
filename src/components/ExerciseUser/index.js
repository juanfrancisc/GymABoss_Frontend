import { Link } from "react-router-dom";
import { useTokenContext } from "../../contexts/TokenContext";
import { toast } from "react-toastify";

const Exercise = ({ exercise }) => {
  const { id, title, description, typology, photo, idUser } = exercise;

  const { token, loggedUser } = useTokenContext();
};

return (
  <article>
    <section>
      <h3>{title}</h3>
      <p>{typology}</p>
      <p>{description}</p>
    </section>
  </article>
);
