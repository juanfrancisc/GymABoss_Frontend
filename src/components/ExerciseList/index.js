import { Link } from 'react-router-dom'
import './styles.css'
import Exercise from '../Exercise'
import useUser from '../../hooks/useUser'
/* import DeteleExerciseButton from "../DeleteExerciseButton/DeleteExerciseButton";
 */
const ExercisesList = ({ exercises }) => {
    const { user } = useUser()
    return (
        <ul className="exercises_list">
            {exercises.map((exercise) => {
                return (
                    /* <Link to={`?id=${exercise.id}`}> */
                    <li key={exercise.id}>
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
