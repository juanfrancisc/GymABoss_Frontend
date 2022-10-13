import { Navigate, useParams } from 'react-router-dom';
import EditExerciseForm from '../../components/EditExerciseForm/index';
import { useTokenContext } from '../../contexts/TokenContext';
import useExerciseId from '../../hooks/useExerciseId';

const EditExercisePage = () => {
    const { token } = useTokenContext();
    const { id } = useParams(); //esto saca la porción con :nombre de la URL
    const { exercise, loading, setExercise } = useExerciseId(id);

    if (!token) {
        return <Navigate to="/login" />;
    }

    if (loading) return <p>Cargando...</p>;

    return (
        <section>
            <h2 className="exercise">Editar Ejercicio</h2>

            <EditExerciseForm exercise={exercise} setExercise={setExercise} />
        </section>
    );
};

export default EditExercisePage;
