//import { useState } from "react";
import Exercise from "../../components/ExerciseList";
//import NewExerciseButton from "../../components/NewExerciseButton/NewExereciseButton"
import Spinner from "../../components/Spinner/Spinner";
import useExerciseId from "../../hooks/useExerciseId";
import useUser from "../../hooks/useUser";
import { useParams } from "react-router-dom";
import VerExercise from "../../components/VerExercise/VerExercise_pruebas";
//import useTypology from "../../hooks/useTypology";

const ExerciseDetail = () => {
    /* const { exercises, errorMessage, loading } = useExercises(); */
    const { id } = useParams();
    /* const { exercise, loading, setExercise } = useExerciseId(id); */

    const { user } = useUser();

    return (
      <fieldset className="view_exercise_detail">
        {/* <h2>Detalle del ejercicio: </h2> */}
  
        {/* {loading && <Spinner />} */}
        <VerExercise id={id} /* exercise={exercise} */ user={user}/>
  
      </fieldset>
    );
  };
  
  export default ExerciseDetail;