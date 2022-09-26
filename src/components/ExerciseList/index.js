import { Link } from 'react-router-dom'
import './styles.css'
import Exercise from '../Exercise'
import useUser from '../../hooks/useUser'
import { useState } from 'react'
import useExercises from '../../hooks/useExercises'
/* import DeteleExerciseButton from "../DeleteExerciseButton/DeleteExerciseButton";
 */
const ExercisesList = () => {
    const {exercises, setExercises} = useExercises();
    const { user } = useUser()
    const [exercise, setExercise]= useState("");

    console.log({exercises, setExercises})
    return (
        <ul className="exercises_list">
            {exercises.map((exercise) => {
                return (
                    /* <Link to={`?id=${exercise.id}`}> */
                    <li key={exercise.id}>
                        {/*user.type_user === 'admin' && <DeteleExerciseButton id={exercise.id}/>*/}
                        <Exercise exercise={exercise} setExercise={setExercise}/>
                    </li>
                    /* </Link> */
                )
            })}
        </ul>
    )
}

export default ExercisesList
