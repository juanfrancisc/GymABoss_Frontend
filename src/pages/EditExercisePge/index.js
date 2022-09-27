<<<<<<< HEAD
import { Navigate } from "react-router-dom";
import EditExerciseForm from "../../components/EditExerciseForm/EditExerciseForm";
import { useTokenContext } from "../../contexts/TokenContext";
import useExerciseId from "../../hooks/useExerciseId";
import useExercises from "../../hooks/useExercises";


const EditExercisePage = () => {
  const { token } = useTokenContext();
  console.log("hola")
  const {exercise, setExercise} = useExerciseId();
  console.log(exercise)
  
   if (!token) {
    return <Navigate to="/login" />;
  }
=======
import { Navigate } from 'react-router-dom'
import EditExerciseForm from '../../components/EditExerciseForm/EditExerciseForm'
import { useTokenContext } from '../../contexts/TokenContext'
import useExerciseId from '../../hooks/useExerciseId'

const EditExercisePage = () => {
    const { token } = useTokenContext()

    const { exercise, setExercise } = useExerciseId()
    console.log(exercise)
>>>>>>> 587ee7769feccbc355af15d0df19b337a76ad85c

    if (!token) {
        return <Navigate to="/login" />
    }

    return (
        <section>
            <h2 className="exercise">Editar Ejercicio</h2>

            <EditExerciseForm exercise={exercise} setExercise={setExercise} />
        </section>
    )
}

export default EditExercisePage
