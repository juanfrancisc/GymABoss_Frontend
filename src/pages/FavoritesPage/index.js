import FavoritesList from '../../components/FavList/FavoritesList';
import Spinner from '../../components/Spinner/Spinner';
import useExercises from '../../hooks/useExercises';
import useUser from '../../hooks/useUser';
import { useState } from 'react';

const FavoritesPage = () => {
    const { exercises, loading } = useExercises();
    const { user } = useUser();
    const [favorites , setFavorites] = useState("");

    return (
        <section className="favorites_exercises">
            <h2>Ejercicios Favoritos</h2>

            {loading && <Spinner />}

            {/*       {user.type_user === 'admin' && <NewExerciseButton />  }
             */}
            {exercises.length > 0 && <FavoritesList exercises={exercises} favorites={favorites} setFavorites={setFavorites}/>}

        </section>
    );
};

export default FavoritesPage;
