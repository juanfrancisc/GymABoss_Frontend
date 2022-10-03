import Edit from '../../assets/imagenes/edit.png'
import { useNavigate } from 'react-router-dom'
import EditExerciseForm from '../EditExerciseForm/EditExerciseForm'
import './styles.css'


const EditExerciseButton = ({ exercise }) => {
    const navigate = useNavigate()
    const { id, title, description, typology, photo } = exercise
    /* console.log(title) */

    return (
        <input height={45} type="image" src={Edit}
        className="Modify_button"
        onClick={() => {
            navigate(`../editExercises/${id}`)
        }} />
        
    );
}

export default EditExerciseButton
