import { useState, useEffect } from "react";

const VerExercise = (props) => {
    const  {id}  = props;
    console.log(id)
    const [exercise, setExercise] = useState("");
    //const [errorMessage, setErrorMessage] = useState("");
    //const [loading, setLoading] = useState(true);
    console.log(exercise)
    useEffect(() => {
        const fetchExercises = async () => {
          try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/verExercise/${id}`,);
            /*const res = await fetch(`${process.env.REACT_APP_API_URL}/listExercises`,{
                method: "GET",
                headers: {
                  authorization: token,
                }
            });*/
            //console.log(res)
    
            const body = await res.json();
            console.log(body)
    
            if (!res.ok) {
              throw new Error(
                "Unexpected error fetching API. Please, try again or contact support"
              );
            }
    
            setExercise(body.data);
            console.log(body.data)
          } catch (error) {
            console.error(error.message);
            //setErrorMessage(error.message);
          } finally {
            //setLoading(false);
          }
        };
    
        fetchExercises();
      }, [id]);
    
      return (
        <fieldset>
            <legend>{exercise.typology}</legend>
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
        </fieldset>
      ) 

      ;
}

export default VerExercise;

