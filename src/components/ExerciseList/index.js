import { Link } from 'react-router-dom'
import './styles.css'
import { toast } from 'react-toastify'
import { useTokenContext } from '../../contexts/TokenContext'
import Trash from '../../assets/imagenes/trash.png'
import Exercise from '../Exercise'
import useUser from '../../hooks/useUser'
import { useState } from 'react'
import useExercises from '../../hooks/useExercises'
/* import DeteleExerciseButton from "../DeleteExerciseButton/DeleteExerciseButton";
 */
const ExercisesList = () => {
    const { exercises, setExercises } = useExercises([])
    const { user } = useUser()
    const { token } = useTokenContext()
    const [updateExercises, setUpdateExercises] = useState([exercises])

    return (
        <ul className="exercises_list">
            {exercises.map((exercise) => {
                return (
                    /* <Link to={`?id=${exercise.id}`}> */
                    <li key={exercise.id}>
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

                                        const body = await res.json()
                                        //console.log(body)

                                        if (!res.ok) {
                                            throw new Error(body.message)
                                        }

                                        const updateExercises =
                                            exercises.filter(
                                                (item) => item !== exercise.id
                                            )
                                        console.log(updateExercises)

                                        setExercises([...updateExercises])
                                        toast.success(body.message)
                                    } catch (error) {
                                        console.error(error.message)
                                        toast.error(error.message)
                                    }
                                }}
                            >
                                <img
                                    src={Trash}
                                    alt="Logout"
                                    height="64"
                                    width="64"
                                />
                            </button>
                        )}
                        {/*user.type_user === 'admin' && <DeteleExerciseButton id={exercise.id}/>*/}
                        <Exercise exercise={exercise} />
                    </li>
                    /* </Link> */
                )
            })}
        </ul>
    )
}

export default ExercisesList
