import { Link } from 'react-router-dom';
import { useTokenContext } from '../../contexts/TokenContext';
import { toast } from 'react-toastify';
import './styles.css';
import LikeButton from '../LikeButton/LikeButton';
/* import flexiones from '../../assets/imagenes/flexiones.jpg' */
import useUser from '../../hooks/useUser';
import DeleteExerciseButton from '../PruebaDeleteButon/index'
import EditExerciseButton from '../EditExerciseButton/EditExerciseButton';
import { useState } from 'react';
import EditExerciseForm from '../EditExerciseForm/EditExerciseForm';

const Exercise = ({ exercise, setExercise, setExerciseLikes, user, setDeleteExercise  }) => {
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
            {user.type_user === 'admin' && <DeleteExerciseButton id={id} setDeleteExercise={setDeleteExercise}/>}
            {user.type_user === 'admin' && (
                <EditExerciseButton id={id} exercise={exercise} />
            )}

            <Link className="Link" to={`?id=${id}`}>
                <h3 className="title">{title}</h3>
                <p className="typology">{typology}</p>
                {/* <img  src={flexiones}></img> */}
                 {photo.length > 0 && (
                    <img
                        height="180"
                        src={`${process.env.REACT_APP_API_URL}/imagenes/${photo}`}
                        alt={title}
                    />
                )}

                <p className="nLikes">Likes: {n_like}</p>
            </Link>

            <LikeButton id={id} setExerciseLikes={setExerciseLikes} />

        </section>
    );
};

export default Exercise;
