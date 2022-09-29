import ErrorMessage from '../../components/ErrorMessage';
import FavoritesList from '../../components/FavList/FavoritesList';

import Spinner from '../../components/Spinner/Spinner';
import useExercises from '../../hooks/useExercises';
import useUser from '../../hooks/useUser';

const FavoritesPage = () => {
    const { exercises, errorMessage, loading } = useExercises();
    const { user } = useUser();

    return (
        <section className="favorites_exercises">
            <h2>Ejercicios Favoritos</h2>

            {loading && <Spinner />}

            {/*       {user.type_user === 'admin' && <NewExerciseButton />  }
             */}
            {exercises.length > 0 && <FavoritesList exercises={exercises} />}

            {errorMessage && <ErrorMessage msg={errorMessage} />}
        </section>
    );
};

export default FavoritesPage;
