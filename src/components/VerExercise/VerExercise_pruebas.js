import { useEffect, useState } from "react";
import { useTokenContext } from '../../contexts/TokenContext';
import Exercise from "../Exercise";
import './styles.css';

const VerExercise = ({ id, user }) => {
    
    /* console.log(exercise) */
    const [exercise, setExercise] = useState("");
    const { token } = useTokenContext();

    const { name, description, typology, photo } = exercise;

   console.log(name)

    useEffect(() => {
        const fetchExercises = async () => {
          try {
            let consulta = `${process.env.REACT_APP_API_URL}/getExerciseId/${id}`;
            const res = await fetch(consulta,{
              method: "GET",
              headers: {
                authorization: token,
              }

            });
    
            const body = await res.json();
            console.log(body)
    
            if (!res.ok) {
              throw new Error(
                "Unexpected error fetching API. Please, try again or contact support"
              );
            }
    
            console.log(body.data)
            setExercise(body.data)
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
        <fieldset className="detail">
          <p>{user.type_user}</p>
          
            <h3>{name}</h3>
            <p>{description}</p>
            <img className="detail" src={`${process.env.REACT_APP_API_URL}/imagenes/${photo}`} alt={name}/>
        </fieldset>
      );
}

export default VerExercise;

