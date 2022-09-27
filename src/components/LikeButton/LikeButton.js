import Heart from '../Heart/Heart';
import './LikeButton.css';
import { toast } from 'react-toastify';
import { useTokenContext } from '../../contexts/TokenContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

/*<input className="toggle-heart" type="checkbox" />
<label htmlFor="toggle-heart" aria-label="like">
  ❤
</label>*/

const LikeButton = ({ id, setExerciseLikes }) => {
    //console.log(id)
    /* console.log(idUser) */
    const { token } = useTokenContext();
    const navigate = useNavigate();
    const [like, setLike] = useState('');

    const likeExerciseId = async (id, token) => {
        //console.log(token)

        try {
            const consulta = `${process.env.REACT_APP_API_URL}/addLike/${id}`;
            console.log(consulta);

            const res = await fetch(consulta, {
                method: 'POST',
                headers: {
                    authorization: token,
                },
            });
            console.log(res);

            const body = await res.json();
            console.log(body);

            toast.success(body.message);

            setExerciseLikes(id, body.likeCount);
        } catch (error) {
            console.error(error.message);
            toast.error(error.message);
        }
    };

    return (
        <>
            <label htmlFor={id}>❤</label>
            <button
                id={id}
                onClick={() => {
                    likeExerciseId(id, token);
                }}
            >
                ❤️
            </button>
        </>
    );
};

export default LikeButton;
