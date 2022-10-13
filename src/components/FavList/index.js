import Exercise from '../Exercise';
import useUser from '../../hooks/useUser';
import { useState } from 'react';
import useExercises from '../../hooks/useExercises';

const FavoritesList = () => {
    const { exercises, setExerciseLikes, setFavExercices } =
        useExercises([]);
    const { user } = useUser();
    const { setExercise } = useState();

    return (
        <ul className="fav_exercises_list">
            {exercises.map((exercise) => {
                return (
                    <li className="li_Fav_exercise_list" key={exercise.id}>
                        <Exercise
                            user={user}
                            exercise={exercise}
                            setExercise={setExercise}
                            setExerciseLikes={setExerciseLikes}
                            setFavExercices={setFavExercices}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default FavoritesList;
