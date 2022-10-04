import { useEffect, useState } from 'react';
import { useTokenContext } from '../../contexts/TokenContext';
import useExercises from '../../hooks/useExercises';
import Exercise from '../Exercise';
import './styles.css';
import LikeButton from '../LikeButton/LikeButton';
import FavButton from '../FavButton/FavButton';

const VerExercise = ({ id, user }) => {
    /* console.log(exercise) */
    const [exercise, setExercise] = useState('');
    const { token } = useTokenContext();
    const {
        exercises,
        setExercises,
        setExerciseLikes,
        setDeleteExercise,
        setExerciseFavs,
    } = useExercises([]);

    const { name, description, typology, photo } = exercise;

    console.log(name);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                let consulta = `${process.env.REACT_APP_API_URL}/getExerciseId/${id}`;
                const res = await fetch(consulta, {
                    method: 'GET',
                    headers: {
                        authorization: token,
                    },
                });

                const body = await res.json();
                //console.log(body);

                if (!res.ok) {
                    throw new Error(
                        'Unexpected error fetching API. Please, try again or contact support'
                    );
                }

                // console.log(body.data);
                setExercise(body.data);
            } catch (error) {
                console.error(error.message);
                //setErrorMessage(error.message);
            } finally {
                //setLoading(false);
            }
        };

        fetchExercises();
    }, [id]);

    return (
        <section className="ver_exercise">
            <h3 className="e_title">{name}</h3>
            <h4 className="e_typology">{typology}</h4>
            <article className="box_detail">
                {/* <p>{user.type_user}</p> */}
                <p className="e_description">{description}</p>
                <img
                    height="380"
                    className="img"
                    src={`${process.env.REACT_APP_API_URL}/imagenes/${photo}`}
                    alt={name}
                />
            </article>
            <article className='fav_like'>
            <LikeButton id={id} setExerciseLikes={setExerciseLikes} />
            {user.type_user === 'normal' && <FavButton id={id} />}
            </article>
        </section>
    );
};

export default VerExercise;
