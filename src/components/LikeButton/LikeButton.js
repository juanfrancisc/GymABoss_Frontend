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

    const { token } = useTokenContext();
    const navigate = useNavigate();
    const [like, setLike] = useState('');

    const likeExerciseId = async (id, token) => {

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
