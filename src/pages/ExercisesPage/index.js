//import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage";
import ExerciseList from "../../components/ExerciseList";
import Spinner from "../../components/Spinner/Spinner";
import useExercises from "../../hooks/useExercises";
//import useTypology from "../../hooks/useTypology";


const ExercisesPage = () => {
  const { exercises, errorMessage, loading } = useExercises();
  //const { exercises, errorMessage, loading, searchParams, setSearchParams } = useExercises();
  //const { exercises, errorMessage, loading } = useTypology(); 

  //const initailSearch = searchParams.get("search") || "";

  //const [search, setSearch] = useState(initailSearch);

  return (
    <section>
      <h2>Ejercicios</h2>
      
      {/* <button onClick={(event) => {
        setSearchParams(new URLSearchParams("?typology=natacion"))
        
      }}>Natacion</button> */}

      {loading && <Spinner />}

      {exercises.length > 0 && <ExerciseList exercises={exercises} />}

      {errorMessage && <ErrorMessage msg={errorMessage} />}
    </section>
  );
};

export default ExercisesPage;
