import { Link } from 'react-router-dom';
import './styles.css';
import { toast } from 'react-toastify';
import { useTokenContext } from '../../contexts/TokenContext';
import Trash from '../../assets/imagenes/trash.png';
import Exercise from '../Exercise';
import useUser from '../../hooks/useUser';
import { useState } from 'react';
import useExercises from '../../hooks/useExercises';
import EditExerciseForm from '../EditExerciseForm/EditExerciseForm';
import EditExerciseButton from '../EditExerciseButton/EditExerciseButton';

/* import DeteleExerciseButton from "../DeleteExerciseButton/DeleteExerciseButton";
 */
const ExercisesList = () => {
    const { exercises, setExercises, setExerciseLikes } = useExercises([]);
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
                        {/* Boton y funcionalidad de borrar ejercicios si es admin */}
                        {user.type_user === 'admin' && (
                            <button
                                id="deleteButton"
                                value={exercise.name}
                                onClick={async () => {
                                    try {
                                        const res = await fetch(
                                            `${process.env.REACT_APP_API_URL}/deleteExercise/${exercise.id}`,
                                            {
                                                method: 'DELETE',
                                                headers: {
                                                    authorization: token,
                                                },
                                            }
                                        );
                                        //console.log(res);

                                        const body = await res.json();
                                        //console.log(body)

                                        if (!res.ok) {
                                            throw new Error(body.message);
                                        }

                                        //console.log(exercise.id)
                                        const updateExercises =
                                            exercises.filter(
                                                (item) =>
                                                    item.id !== exercise.id
                                            );
                                        //console.log(updateExercises)
                                        //console.log(updateExercises.length)

                                        if (updateExercises.length < 1) {
                                            throw new Error(
                                                'No hay ejercicios que mostrar, debes crear uno.'
                                            );
                                        }

                                        setExercises(updateExercises);
                                        toast.success(body.message);
                                    } catch (error) {
                                        console.error(error.message);
                                        toast.error(error.message);
                                    } finally {
                                        setLoading(false);
                                    }
                                }}
                            >
                                <img
                                    src={Trash}
                                    alt="Logout"
                                    height="44"
                                    width="44"
                                />
                            </button>
                        )}
                        {/*user.type_user === 'admin' && <DeteleExerciseButton id={exercise.id}/>*/}

                        {/* {user.type_user === 'admin' && <EditExerciseButton id={exercise.id}/>} */}

                        <Exercise
                            user={user}
                            exercise={exercise}
                            setExercise={setExercise}
                            setExerciseLikes={setExerciseLikes}
                        />

                        {/* Definicion y funcion boton like */}
                        {/* <button
                            id='likeButton' className='likeButton'
                            onClick={async () => {
                                try {

                                const consulta = `${process.env.REACT_APP_API_URL}/addLike/${exercise.id}`
                                //console.log(consulta)

                                const res = await fetch(consulta, {
                                    method: 'POST',
                                    headers: {
                                        authorization: token,
                                    },
                                })
                                const body = await res.json()
                                //console.log(body)

                                if (!res.ok) {
                                    throw new Error(
                                        'Unexpected error fetching API. Please, try again or contact support'
                                    )
                                }

                                toast.success(body.message)
                                setExercises(exercises)

                                } catch (error) {
                                console.error(error.message)
                                toast.error(error.message)

                                } finally {
                                setLoading(false)
                                }
                            }}
                        >
                        Me gusta!
                        </button> */}
                    </li>
                
                    /* </Link> */
                );
            })}
        </ul>
    );
};

export default ExercisesList;
