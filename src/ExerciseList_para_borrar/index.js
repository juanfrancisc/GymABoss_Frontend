import { Link } from 'react-router-dom';
import './styles.css';
import { toast } from 'react-toastify';
import { useTokenContext } from '../../contexts/TokenContext';
import Exercise from '../Exercise';
import useUser from '../../hooks/useUser';
import { useState } from 'react';
import useExercises from '../../hooks/useExercises';
import DeleteExerciseButton from '../PruebaDeleteButon';

/* import DeteleExerciseButton from "../DeleteExerciseButton/DeleteExerciseButton";
 */
const ExercisesList = () => {
    const { id, exercises, setExercises, setExerciseLikes, setDeleteExercise } = useExercises([]);
    const { user } = useUser();
    const { token } = useTokenContext();
    /* const [updateExercises, setUpdateExercises] = useState([exercises]) */
    const [loading, setLoading] = useState(true);
    const { exercise, setExercise } = useState();

    const [updateExercises, setUpdateExercises] = useState([exercises]);

    return (
        <ul className="exercises_list">
            {exercises.map((exercise) => {
                return (
                    /* <Link to={`?id=${exercise.id}`}> */
                    <li className="li_exercise_list" key={exercise.id}>
                        {/* {user.type_user === 'admin' && (
                            <DeleteExerciseButton id={id} exercise={exercise} />)} */}
                                

                        <Exercise
                            user={user}
                            exercise={exercise}
                            setExercise={setExercise}
                            setExerciseLikes={setExerciseLikes}
                            setDeleteExercise={setDeleteExercise}
                        />

                        
                    </li>
                
                    /* </Link> */
                );
            })}
        </ul>
    );
};

export default ExercisesList;
