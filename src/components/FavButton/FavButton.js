import './FavButton.css';
import { toast } from 'react-toastify';
import { useTokenContext } from '../../contexts/TokenContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FavB from '../../assets/imagenes/start.png'

const FavButton = ({ id }) => {
    const { token, setToken } = useTokenContext();
    const navigate = useNavigate();
    const [fav, setFav] = useState('');

    const favExerciseId = async (id, token) => {
        try {
            const consulta = `${process.env.REACT_APP_API_URL}/addFavorite/${id}`;

            const res = await fetch(consulta, {
                method: 'POST',
                headers: {
                    authorization: token,
                },
            });

            const body = await res.json();

            toast.success(body.message);

            /* setExerciseFavs(id, body.favoriteCount);*/
        } catch (error) {
            console.error(error.message);
            toast.error(error.message);
        }
    };

    return (
        <>
            {/* <button
                className="FavButton"
                id={id}
                onClick={() => {
                    favExerciseId(id, token);
                }}
            >
                ⭐
            </button> */}
            
            <input type="image" className="FavButton"
                src={FavB}
                id={id}
                values="Ir a favoritos"
                onClick={() => {
                    favExerciseId(id, token);
                }}
            >
            </input>
        </>
        
    );
};

export default FavButton;
