//import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import ExerciseList from "../../components/ExerciseList";
import Spinner from "../../components/Spinner/Spinner";
import useExercises from "../../hooks/useExercises";
//import useTypology from "../../hooks/useTypology";


const ExercisesPage = () => {
  const { exercises, errorMessage, loading } = useExercises();

  return (
    <section>
      <h2>Ejercicios</h2>

      {loading && <Spinner />}

      {exercises.length > 0 && <ExerciseList exercises={exercises} />}

      {errorMessage && <ErrorMessage msg={errorMessage} />}
    </section>
  );
};

export default ExercisesPage;
