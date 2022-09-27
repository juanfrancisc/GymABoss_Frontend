import Edit from '../../assets/imagenes/edit.png'
import { useNavigate } from 'react-router-dom'
import EditExerciseForm from '../EditExerciseForm/EditExerciseForm'
import './styles.css'


const EditExerciseButton = ({ exercise }) => {
    const navigate = useNavigate()
    const { id, title, description, typology, photo } = exercise
    /* console.log(title) */

    return (
        <button
            className="Modify_button"
            onClick={() => {
                //console.log(exercise);
                navigate(`../editExercises/${id}`)
            }}
        >
            <img src={Edit} alt="Logout" height="44" width="44" />
        </button>
    )
}

export default EditExerciseButton
