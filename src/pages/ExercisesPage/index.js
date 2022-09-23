//import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import ExerciseList from "../../components/ExerciseList";
import NewExerciseButton from "../../components/NewExerciseButton/NewExereciseButton"
import Spinner from "../../components/Spinner/Spinner";
import useExercises from "../../hooks/useExercises";
import useUser from "../../hooks/useUser";
//import useTypology from "../../hooks/useTypology";


const ExercisesPage = () => {
  const { exercises, errorMessage, loading } = useExercises();
  const { user } = useUser();
  //console.log(user.type_user)


  return (
    <section>
      <h2>Ejercicios</h2>

      {loading && <Spinner />}

      {user.type_user === 'admin' && <NewExerciseButton />  }

      {exercises.length > 0 && <ExerciseList exercises={exercises} />}

      {errorMessage && <ErrorMessage msg={errorMessage} />}
    </section>
  );
};

export default ExercisesPage;
