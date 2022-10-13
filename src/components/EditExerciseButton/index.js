import Edit from '../../assets/imagenes/edit.png'
import { useNavigate } from 'react-router-dom'
import './styles.css'


const EditExerciseButton = ({ exercise }) => {
    const navigate = useNavigate()
    const { id } = exercise

    return (
        <input height={45} 
        type="image" 
        alt="boton modificar ejercicio"
        src={Edit}
        className="Modify_button"
        onClick={() => {
            navigate(`../editExercises/${id}`)
        }} />
        
    );
}

export default EditExerciseButton
