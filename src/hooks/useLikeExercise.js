import { useState, useEffect } from "react";
import { useTokenContext } from "../contexts/TokenContext";

const useLikeExercise = (id) => {
  //const [exercises, setExercises] = useState([]);
  //console.log(exercises)
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [like, setLike] = useState("")
  console.log(like)
 

  const { token } = useTokenContext();


  useEffect(() => {
    const fetchLikeExercises = async () => {
      try {
        const consulta = `${process.env.REACT_APP_API_URL}/addLike/${id.id}`
        console.log(consulta)

        const res = await fetch(consulta,{
            method: "POST",
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

        setLike(body.data);
        //console.log(body.data)
      } catch (error) {
        console.error(error.message);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLikeExercises();
  }, []);

  return { errorMessage, loading, like, setLike };
};

export default useLikeExercise;
