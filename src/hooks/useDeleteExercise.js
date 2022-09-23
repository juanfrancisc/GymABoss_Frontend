import { useEffect, useState } from "react";
import { useTokenContext } from "../contexts/TokenContext";
import { toast } from "react-toastify";

const useDeteleExercise = (id) => {
    const { token } = useTokenContext();

    const [exercise, setExercise] = useState("")
    const [loading, setLoading] = useState(true);
    const [idDelete, setIdDelete] = useState(id)

    console.log(id)

    useEffect(() => {
        const fetchDelete = async () =>{
           try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/deleteExercise/${id}`,{
                method: "GET",
                headers: {
                  authorization: token,
                }
            })
            console.log(res)

            const body = await res.json();
            console.log(body)

        } catch (error) {
            console.error(error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        } 
        };
        fetchDelete();
        
    })
  
    return { id, idDelete,setIdDelete,exercise, setExercise, loading };
  };
  
  export default useDeteleExercise;