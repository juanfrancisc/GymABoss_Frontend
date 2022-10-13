import { Link } from 'react-router-dom';
import './styles.css';
import LikeButton from '../LikeButton';
import DeleteExerciseButton from '../DeleteButton/index';
import EditExerciseButton from '../EditExerciseButton/index';
import FavButton from '../FavButton';

const Exercise = ({
    exercise,
    setExerciseLikes,
    user,
    setDeleteExercise,
    setFavorites,
}) => {

    const { id, n_like, title, photo, typology } =
        exercise;
    //console.log(id);


    return (
        <section className="boxes">

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

            {user.type_user === 'normal' && <FavButton id={id} setFavorites={setFavorites}  />}

            </section>

        </section>
    );
};

export default Exercise;
