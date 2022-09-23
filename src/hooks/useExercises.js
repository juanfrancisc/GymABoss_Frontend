import { useState, useEffect } from "react";
import { useTokenContext } from "../contexts/TokenContext";
import { useSearchParams } from "react-router-dom"

const useExercises = () => {
  const [exercises, setExercises] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
 

  const { token } = useTokenContext();

  const [searchParams, setSearchParams] = useSearchParams();
  //console.log(token)

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        //const res = await fetch(`${process.env.REACT_APP_API_URL}/getExercises?${searchParams.toString()}`)

        const consulta = `${process.env.REACT_APP_API_URL}/getExercises?${searchParams.toString()}`;
        //console.log(consulta)
        const res = await fetch(consulta,{
            method: "GET",
            headers: {
              authorization: token,
            }
        });
        
        /* const res = await fetch(`${process.env.REACT_APP_API_URL}/listExercises?${searchParams.toString}`,{
            method: "GET",
            headers: {
              authorization: token,
            }
        }); */
        console.log(res)

        const body = await res.json();
        console.log(body)

        if (!res.ok) {
          throw new Error(
            "Unexpected error fetching API. Please, try again or contact support"
          );
        }

        setExercises(body.data);
        //console.log(body.data)
      } catch (error) {
        console.error(error.message);
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, [searchParams]);

  return { exercises, errorMessage, loading, searchParams, setSearchParams };
};

export default useExercises;
