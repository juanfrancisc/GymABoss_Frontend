import { useState, useEffect } from "react";

const useExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/exercises`);
        const body = await res.json();

        if (!res.ok) {
          throw new Error(
            "Unexpected error fetching API. Please, try again or contact support"
          );
        }

        setExercises(body.data);
      } catch (error) {
        console.error(error.message);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  return { exercises, errorMessage, loading };
};

export default useExercises;
