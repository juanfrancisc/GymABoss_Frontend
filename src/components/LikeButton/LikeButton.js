/* import Heart from '../Heart/Heart'; */
import './LikeButton.css';
import { toast } from 'react-toastify';
import { useTokenContext } from '../../contexts/TokenContext';
/* import { useNavigate } from 'react-router-dom'; */
import { useState, useEffect } from 'react';
/* import heart from '../../assets/imagenes/black_heart.png' */


const LikeButton = ({ id, setExerciseLikes }) => {
    const { token } = useTokenContext();
    /* const navigate = useNavigate();
    const [like, setLike] = useState(''); */

    const [verifyLike, setVerifyLike] = useState([]);

    const likeExerciseId = async (id, token) => {
        setVerifyLike(verifyLike)
        try {
            const consulta = `${process.env.REACT_APP_API_URL}/addLike/${id}`;

            const res = await fetch(consulta, {
                method: 'POST',
                headers: {
                    authorization: token,
                },
            });

            const body = await res.json();

            toast.success(body.message);

            setExerciseLikes(id, body.likeCount);
            
        } catch (error) {
            console.error(error.message);
            toast.error(error.message);
        }
    };

    useEffect (() => {
        const verifyLikeUser = async () => {
            try {
                const consulta = `${process.env.REACT_APP_API_URL}/like`
            
            const res = await fetch(consulta, {
                method: 'GET',
                headers: {
                    authorization: token,
                }
            });
    
            const body = await res.json();
    
            /* console.log(body.data) */
            setVerifyLike(body.data)
            
    
            } catch (error) {
                console.error(error.message);
                toast.error(error.message);
            }
    
        };
        verifyLikeUser();
    },[]);

    return (
        <>
        {verifyLike.includes(id) ?  <input type="image" 
            className="LikeButton_like"
            onClick={() => {
                likeExerciseId(id, token);
                setVerifyLike(verifyLike)
        }}
        /> : <input type="image" 
        className="LikeButton"
        onClick={() => {
            likeExerciseId(id, token);
            setVerifyLike(verifyLike)
        }}
        />}
        
            {/* <button
                className="LikeButton"
                id={id}
                onClick={() => {
                    likeExerciseId(id, token);
                }}
            >
                ❤
            </button> */}
        </>
    );
};

export default LikeButton;
