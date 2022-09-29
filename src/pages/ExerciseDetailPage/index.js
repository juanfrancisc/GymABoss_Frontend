import { getByTitle } from "@testing-library/react";
import ErrorMessage from "../../components/ErrorMessage";
import ExerciseDetail from "../../components/ExerciseDetail";
import Spinner from "../../components/Spinner/Spinner";
import useExercises from "../../hooks/useExercises";

/**
 * Hacer fetch de los ejercicios del backend y pintarlos en
 * una lista
 */

const ExerciseDetailPage = () => {
  const { exercises, errorMessage, loading } = useExercises();

  return (
    <section>
      <h2>Ejercicio</h2>

      {loading && <Spinner />}

      {exercises.length > 0 && <ExerciseDetail exercises={exercises} />}

      {errorMessage && <ErrorMessage msg={errorMessage} />}
    </section>
  );
};

export default ExerciseDetailPage;
