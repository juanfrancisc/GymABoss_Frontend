import useDeteleExercise from "../../hooks/useDeleteExercise"

const DeleteExercise = () => {

    const {id} = useDeteleExercise();
    console.log(id)

    return {id}
};

export default DeleteExercise;