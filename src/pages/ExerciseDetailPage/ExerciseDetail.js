//import { useState } from "react";
import Exercise from "../../components/ExerciseList";
//import NewExerciseButton from "../../components/NewExerciseButton/NewExereciseButton"
import Spinner from "../../components/Spinner/Spinner";
import useExerciseId from "../../hooks/useExerciseId";
import useUser from "../../hooks/useUser";
import { useParams } from "react-router-dom";
//import useTypology from "../../hooks/useTypology";

const ExerciseDetail = () => {
    /* const { exercises, errorMessage, loading } = useExercises(); */
    const { id } = useParams();
    const { exercise, loading, setExercise } = useExerciseId(id);
    const { user } = useUser();
  
    console.log(exercise)
    return (
      <fieldset>
        <h2>Detalle del ejercicio: </h2>
  
        {loading && <Spinner />}
        {/* {exercise.map((object) => {

          return (
            <h2>{name}</h2>

          )


        })} */}
        {/* <Exercise exercise={exercise} /> */}


        {/* {exercise.length > 0 && <Exercise exercise={exercise} />} */}
  
      </fieldset>
    );
  };
  
  export default ExerciseDetail;