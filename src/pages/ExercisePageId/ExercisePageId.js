//import { useState } from "react";
import Exercise from "../../components/ExerciseList";
//import NewExerciseButton from "../../components/NewExerciseButton/NewExereciseButton"
import Spinner from "../../components/Spinner/Spinner";
import useExercises from "../../hooks/useExercises";
import useUser from "../../hooks/useUser";
//import useTypology from "../../hooks/useTypology";

const ExercisePageId = () => {
    const { exercises, errorMessage, loading } = useExercises();
    const { user } = useUser();
  
    return (
      <fieldset>
        <h2>Ejercicio:</h2>
  
        {loading && <Spinner />}
  
  {/*       {user.type_user === 'admin' && <NewExerciseButton />  }
   */}
        {exercises.length > 0 && <Exercise exercises={exercises} />}
  
      </fieldset>
    );
  };
  
  export default ExercisePageId;