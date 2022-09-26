import { useState, useEffect } from "react";
import { useTokenContext } from "../contexts/TokenContext";

const useExerciseId = () => {
    const [exercise, setExercise] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(true);
    console.log(exercise)

    const { token } = useTokenContext();

  //const [searchParams, setSearchParams] = useSearchParams();
  //console.log(token)

    useEffect(() => {
        const fetchExercisesId = async () => {
        try {
            const consulta = `${process.env.REACT_APP_API_URL}/getExerciseId/${exercise.id}`;
            console.log(consulta)
            const res = await fetch(consulta,{
                method: "GET",
                headers: {
                authorization: token,
                }
            });
            

            const body = await res.json();
            //console.log(body)

            if (!res.ok) {
            throw new Error(
                "Unexpected error fetching API. Please, try again or contact support"
            );
            }

            setExercise(body.data);
            //console.log(body.data)
        } catch (error) {
            console.error(error.message);
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    fetchExercisesId();
  }, []);

  return { exercise, setExercise, errorMessage, loading };
};

export default useExerciseId;