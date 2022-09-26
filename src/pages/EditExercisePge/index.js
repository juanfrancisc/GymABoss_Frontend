import { Navigate } from "react-router-dom";
import EditExerciseForm from "../../components/EditExerciseForm/EditExerciseForm";
import { useTokenContext } from "../../contexts/TokenContext";

const EditExercisePage = (exercise, setExercise) => {
  const { token } = useTokenContext();
  
   if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <section>
      <h2>Editar Ejercicio</h2>

      <EditExerciseForm exercise={exercise} setExercise={setExercise}/>
    </section>
  );
};

export default EditExercisePage;