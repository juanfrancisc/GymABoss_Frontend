import { useState, useEffect } from "react";
import { useTokenContext } from "../contexts/TokenContext";
import { toast } from "react-toastify";

const useTypology = () => {
  console.log(typology)
  const [typology, setTypology] = useState("")
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  const { token } = useTokenContext();
  //console.log(token)

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        //La linea comentada es para recuperar el listado de ejercicios sin estar logado
        //const res = await fetch(`${process.env.REACT_APP_API_URL}/getExercises`,);
        const res = await fetch(`${process.env.REACT_APP_API_URL}/getExercises/${typology}`);
        //console.log(res)

        const body = await res.json();
        //console.log(body)

        if (!res.ok) {
          throw new Error(
            "Unexpected error fetching API. Please, try again or contact support"
          );
        }

        setExercises(body.data);
        //console.log(body.data)
        toast.success(body.message);
      } catch (error) {
        console.error(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, [typology]);

  return { exercises, loading };
};

export default useTypology;