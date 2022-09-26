import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useTokenContext } from "../../contexts/TokenContext";


const EditExerciseForm = (exercise, setExercise, setShowEditForm) => {

    console.log(exercise.photo)
    const { 
        id: id,
        title: currentTittle,
        description: currentDescription,
        typology: currentTypology,
        photoName: currentPhotoName
    } = exercise;

    

    const [newTitle, setNewTitle] = useState("")
    const [newDescription, setNewDescription] = useState("")
    const [newTypology, setNewTypology] = useState("")
    const [newPhotoPreview, setNewPhotoPreview] = useState("")

    const newPhotoRef = useRef();

    const { token } = useTokenContext;

    return (
        <form onSubmit={async (event) => {

            try {
                event.preventDefault();

            const newPhoto = newPhotoRef.current.file[0]
            console.log(newPhoto)

            if(!newTitle || newDescription || newTypology || newPhoto){
                toast.warn("No has modificado ningun datos del ejercicio")
                return;
            }
            
            if(newTitle || newDescription || newTypology || newPhoto){
                const formData = new FormData();
                formData.append("title", newTitle);
                formData.append("description", newDescription);
                formData.append("typology", newTypology);
                formData.append("photo", newPhoto)

                const res = await fetch(`${process.env.REACT_APP_API_URL}/modifyExercises/${id}`,{
                    method: "POST",
                    headers: { authorization: token },
                    body: formData,
                });

                const body = await res.json();
                console.log(body)

                if (!res.ok) {
                    throw new Error(body.message);
                }

                setExercise({...exercise,
                    title: newTitle || exercise.title,
                    description: newDescription || exercise.description,
                    typology: newTypology || exercise.typology,
                    photo: newPhoto || exercise.photo
                })

                toast.success("Exercise updated succesfully!");
                setShowEditForm(false);
            }
            } catch (error) {
                console.error(error.message);
                toast.error(error.message);
            }

        }}>

        <label htmlFor="title">Titulo:</label>
        <input
            id="title"
            value={newTitle}
            onChange={(event) => {
            setNewTitle(event.target.value);
            }}
            placeholder={currentTittle}
        />

        <label htmlFor="description">Descripción:</label>
        <input
            id="description"
            value={newDescription}
            onChange={(event) => {
            setNewDescription(event.target.value);
            }}
            placeholder={currentDescription}
        />

        <label htmlFor="typology">Tipología:</label>
        <select name="typology" id="typology"
            onChange={(event) => {
            setNewTypology(event.target.value)
            }}
            placeholder={currentTypology}
            >
            <option value="cardio">Cardio</option>
            <option value="musculacion">Musculación</option>
            <option value="relajacion">Relejación</option>
            <option value="natacion">Natación</option>
        </select>


        <label htmlFor="photo">Foto:</label>
        <input id="photo" 
            type="file" 
            accept="image/*" 
            ref={newPhotoRef} 
            onChange={() => {
                const newPhoto = new newPhotoRef.current.file[0];
                setNewPhotoPreview(URL.createObjectURL(newPhoto))
            }}
        />

        <button>Actualizar Ejercicio</button>

        </form>
    )
}

export default EditExerciseForm;