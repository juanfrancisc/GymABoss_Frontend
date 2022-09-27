import { Link } from 'react-router-dom'
import './styles.css'
import { toast } from 'react-toastify'
import { useTokenContext } from '../../contexts/TokenContext'
import Trash from '../../assets/imagenes/trash.png'
import Exercise from '../Exercise'
import useUser from '../../hooks/useUser'
import { useState } from 'react'
import useExercises from '../../hooks/useExercises'
import EditExerciseForm from '../EditExerciseForm/EditExerciseForm';

/* import DeteleExerciseButton from "../DeleteExerciseButton/DeleteExerciseButton";
 */
const ExercisesList = () => {
    const { exercises, setExercises } = useExercises([])
    const { user } = useUser()
<<<<<<< HEAD
    const { token } = useTokenContext();
    /* const [updateExercises, setUpdateExercises] = useState([exercises]) */
    const [loading, setLoading] = useState(true)
    const {exercise, setExercise} = useState();

    function mostrarEditForm (exercise){
        return(
            <EditExerciseForm exercise={exercise}/>
        )
        
    }
=======
    const { token } = useTokenContext()
    const [updateExercises, setUpdateExercises] = useState([exercises])
>>>>>>> 587ee7769feccbc355af15d0df19b337a76ad85c

    return (
        <ul className="exercises_list">
            
            {exercises.map((exercise) => {
                return (
                    /* <Link to={`?id=${exercise.id}`}> */
                    <li key={exercise.id}>
<<<<<<< HEAD

                        {/* Boton y funcionalidad de borrar ejercicios si es admin */}
                        {user.type_user === 'admin' && 
                            <button id='deleteButton' value={exercise.name}
                            onClick={async () => {
                                
                            try {
                                const res = await fetch(`${process.env.REACT_APP_API_URL}/deleteExercise/${exercise.id}`, {
                                method: "DELETE",
                                headers: {
                                    authorization: token,
                                }
                                })
                                //console.log(res);
=======
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
                                        )
                                        //console.log(res);
>>>>>>> 587ee7769feccbc355af15d0df19b337a76ad85c

                                        const body = await res.json()
                                        //console.log(body)

                                        if (!res.ok) {
                                            throw new Error(body.message)
                                        }

<<<<<<< HEAD
                                if(updateExercises.length < 1){
                                    throw new Error("No hay ejercicios que mostrar, debes crear uno.");
                                }
                                
                                setExercises(updateExercises)
                                toast.success(body.message)
                                

                            } catch (error) {
                                console.error(error.message);
                                toast.error(error.message);

                            } finally {
                                setLoading(false)
                            }
                            }}
=======
                                        //console.log(exercise.id)
                                        const updateExercises =
                                            exercises.filter(
                                                (item) =>
                                                    item.id !== exercise.id
                                            )
                                        //console.log(updateExercises)
                                        //console.log(updateExercises.length)

                                        if (updateExercises.length < 1) {
                                            throw new Error(
                                                'No hay ejercicios que mostrar, debes crear uno.'
                                            )
                                        }

                                        setExercises(updateExercises)
                                        toast.success(body.message)
                                    } catch (error) {
                                        console.error(error.message)
                                        toast.error(error.message)
                                    }
                                }}
>>>>>>> 587ee7769feccbc355af15d0df19b337a76ad85c
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
                        
                        <Exercise exercise={exercise} setExercise={setExercise}/>

                        {/* Definicion y funcion boton like */}
                    <button
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
                    </button>


                        

                    </li>
                    /* </Link> */
                )
            })}
        </ul>
    )
}

export default ExercisesList
