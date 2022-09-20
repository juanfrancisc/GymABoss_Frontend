import { useState, useEffect } from "react";
import { useTokenContext } from "../contexts/TokenContext";

const useExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const { token } = useTokenContext();
  console.log(token)

  useEffect(() => {
    const fetchExercises = async () => {
      try {

        const res = await fetch(`${process.env.REACT_APP_API_URL}/getExercises`,);
        console.log(res)

        const body = await res.json();
        console.log(body)

        if (!res.ok) {
          throw new Error(
            "Unexpected error fetching API. Please, try again or contact support"
          );
        }

        setExercises(body.data);
        console.log(body.data)
      } catch (error) {
        console.error(error.message);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, [token]);

  return { exercises, errorMessage, loading };
};

export default useExercises;
