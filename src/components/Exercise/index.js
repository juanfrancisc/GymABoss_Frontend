import { Link } from 'react-router-dom';
import { useTokenContext } from '../../contexts/TokenContext';
import { toast } from 'react-toastify';
import './styles.css';
import LikeButton from '../LikeButton/LikeButton';
/* import flexiones from '../../assets/imagenes/flexiones.jpg' */
import useUser from '../../hooks/useUser';
import DeleteExerciseButton from '../PruebaDeleteButon/index';
import EditExerciseButton from '../EditExerciseButton/EditExerciseButton';
import { useState } from 'react';
import EditExerciseForm from '../EditExerciseForm/EditExerciseForm';
import FavButton from '../FavButton/FavButton';

const Exercise = ({
    exercise,
    setExercise,
    setExerciseLikes,
    user,
    setDeleteExercise,
   /*  setExerciseFavs, */
}) => {
    /* console.log({exercise, setExercise}); */
    const { id, idUser, n_like, title, description, photo, typology } =
        exercise;
    //console.log(id);

    /* const { token } = useTokenContext();
    const [loading, setLoading] = useState(true);
    const [exercises, setExercises] = useState(''); */

    return (
        <section className="boxes">
            {/* {user.type_user === 'admin' && <EditExerciseForm exercise={exercise}/>} */}
            {/* {user.type_user === 'admin' && (
                <DeleteExerciseButton
                    id={id}
                    setDeleteExercise={setDeleteExercise}
                />
            )} */}

            {user.type_user === 'admin' && (
                <section className='edit_delete'>
                    <EditExerciseButton 
                        id={id} 
                        exercise={exercise} />
                    <DeleteExerciseButton
                        id={id}
                        setDeleteExercise={setDeleteExercise} />
                </section>
                
            )}

            <Link className="Link" to={`../verExercise/${id}`}>
                <h3 className="title">{title}</h3>
                {/* <p className="description">{description}</p> */}
                <p className="typology">{typology}</p>
                {photo.length > 0 && (
                    <img
                        height="180"
                        src={`${process.env.REACT_APP_API_URL}/imagenes/${photo}`}
                        alt={title}
                    />
                )}
                <p className="nLikes">Likes: {n_like}</p>
            </Link>
            <section className='fav_like'>
            <LikeButton id={id} setExerciseLikes={setExerciseLikes} />

            {user.type_user === 'normal' && <FavButton id={id} /* setExerciseFavs={setExerciseFavs} */ />}

            </section>

        </section>
    );
};

export default Exercise;
