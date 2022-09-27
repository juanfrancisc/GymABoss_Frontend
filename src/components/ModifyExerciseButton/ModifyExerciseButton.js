import Edit from '../../assets/imagenes/edit.png'
import { useNavigate } from 'react-router-dom'
import EditExerciseForm from '../EditExerciseForm/EditExerciseForm'
import './styles.css'

<<<<<<< HEAD
const EditExerciseButton = ({exercise}) => {

    const navigate = useNavigate();

    const { id, title, description, typology, photo} = exercise;
=======
const EditExerciseButton = ({ exercise }) => {
    const navigate = useNavigate()
    /*  console.log(exercise) */
    const { id, title, description, typology, photo } = exercise
    /* console.log(title) */
>>>>>>> 587ee7769feccbc355af15d0df19b337a76ad85c
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
