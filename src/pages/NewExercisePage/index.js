import { Navigate } from "react-router-dom";
import NewExerciseForm from "../../components/NewExerciseForm";
import { useTokenContext } from "../../contexts/TokenContext";

const NewExercisePage = () => {
  const { token } = useTokenContext();

  /*   if (!token) {
    return <Navigate to="/login" />;
  } */

  return (
    <section>
      <h2>Nuevo Ejercicio</h2>

      <NewExerciseForm />
    </section>
  );
};

export default NewExercisePage;
