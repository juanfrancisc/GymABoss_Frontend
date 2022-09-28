import Trash from '../../assets/imagenes/trash.png';
import { useNavigate } from 'react-router-dom'
import { useTokenContext } from '../../contexts/TokenContext';
import useUser from '../../hooks/useUser';
import useExercises from '../../hooks/useExercises';
import { useState } from 'react';
import { toast } from 'react-toastify';

const DeleteExerciseButton = ({id} ) => {
  const { exercises, setExercises } = useExercises([]);
  const { user } = useUser();
  const { token } = useTokenContext();
  /* const [updateExercises, setUpdateExercises] = useState([exercises]) */
  const [loading, setLoading] = useState(true);
  const [ exercise, setExercise ] = useState();

  /* const [updateExercises, setUpdateExercises] = useState([exercises]); */
  console.log(exercises);
  return (
          <button
                id="deleteButton"
                                value={id}
                                onClick={async () => {
                                    try {
                                        const res = await fetch(
                                            `${process.env.REACT_APP_API_URL}/deleteExercise/${id}`,
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
                                                    item.id !== id
                                            );
                                        console.log(updateExercises)
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

export default DeleteExerciseButton