import Heart from '../Heart/Heart';
import { toast } from "react-toastify";
import { useTokenContext } from "../../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const likeExerciseId = async (id, token) => {
    //console.log(token)

    try {
        const consulta = `${process.env.REACT_APP_API_URL}/addLike/${id.id}`
        console.log(consulta)
            
        const res = await fetch(consulta,{
            method: "POST",
            headers: {
                authorization: token,
            }
        })
        console.log(res)

        const body = await res.json();
        console.log(body)

        toast.success(body.message)

    } catch (error) {
        console.error(error.message);
        toast.error(error.message);
    } 

    
};




const LikeButton = (id) => {
    //console.log(id)
    /* console.log(idUser) */
    const {token} = useTokenContext();
    const navigate = useNavigate();
    const [like, setLike] = useState("");
    

    return (
        <>
            <label htmlFor={id.id}>Like me!</label>
            <input type="checkbox" name="my-checkbox" id={id.id} onClick={() => {
                likeExerciseId(id, token);
                navigate("/")
            }} />
            
        </>
    )
}

export default LikeButton;