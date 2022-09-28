import { useState, useRef } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTokenContext } from '../../contexts/TokenContext';
import useExerciseId from '../../hooks/useExerciseId';

/* const EditExerciseForm = ({ exercise, setExercise, setShowEditForm }) => { */
const EditExerciseForm = ({ exercise }) => {

    const {
        id: id,
        name: currentTitle,
        description: currentDescription,
        typology: currentTypology,
        photo: currentPhoto,
    } = exercise;

    const [newTitle, setNewTitle] = useState(currentTitle);
    const [newDescription, setNewDescription] = useState(currentDescription);
    const [newTypology, setNewTypology] = useState(currentTypology);
    const [newPhoto, setNewPhoto] = useState(currentPhoto);

    const newPhotoRef = useRef();

    const { token } = useTokenContext();

    const navigate = useNavigate();

    return (
        <form
            onSubmit={async (event) => {
                try {
                    event.preventDefault();

                    const newPhoto = newPhotoRef;

                    if (
                        !newTitle ||
                        !newDescription ||
                        !newTypology ||
                        !newPhoto
                    ) {
                        toast.warn(
                            'No has modificado ningun datos del ejercicio'
                        );
                        return;
                    }

                    if (newTitle || newDescription || newTypology || newPhoto) {
                        const formData = new FormData();
                        formData.append('title', newTitle);
                        formData.append('description', newDescription);
                        formData.append('typology', newTypology);
                        formData.append('photo', newPhoto);

                        const res = await fetch(
                            `${process.env.REACT_APP_API_URL}/modifyExercises/${id}`,
                            {
                                method: 'POST',
                                headers: { authorization: token },
                                body: formData,
                            }
                        );

                        const body = await res.json();
                        /* console.log(body); */

                        if (!res.ok) {
                            throw new Error(body.message);
                        }

                        toast.success('Exercise updated succesfully!');
                        //setShowEditForm(false);
                        navigate("/")
                    }
                } catch (error) {
                    console.error(error.message);
                    toast.error(error.message);
                }
            }}
        >
            <label className="new_title" htmlFor="title">
                Titulo:
            </label>
            <input
                id="title"
                value={newTitle}
                onChange={(event) => {
                    event.preventDefault();
                    setNewTitle(event.target.value);
                }}
                placeholder={currentTitle}
            />

            <label className="new_description" htmlFor="description">
                Descripción:
            </label>
            <input
                id="description"
                value={newDescription}
                onChange={(event) => {
                    setNewDescription(event.target.value);
                }}
                placeholder={currentDescription}
            />

            <label className="new_typology" htmlFor="typology">
                Tipología:
            </label>
            <select
                name="typology"
                id="typology"
                value={newTypology}
                onChange={(event) => {
                    setNewTypology(event.target.value);
                }}
                placeholder={currentTypology}
            >
                <option value="Cardio">Cardio</option>
                <option value="Musculacion">Musculación</option>
                <option value="Relajacion">Relajación</option>
                <option value="Natacion">Natación</option>
            </select>

            <label className="new_photo" htmlFor="photo">
                Foto:
            </label>
            {/* <input
                name="photo"
                value={newPhoto}
                id="photo"
                type="file"
                accept="image/*"
                /* ref={newPhotoPreview} */ 
                /* onChange={() => {

                    const newPhoto = new newPhotoRef.current.file[0];
                    setNewPhotoPreview(URL.createObjectURL(newPhoto));                    
                }} */
                /* onChange={(e) => {
                    console.log(e.target.files)
                    setNewPhotoPreview(e.target.files[0])
                }} */
            /> */}

            <button>Actualizar Ejercicio</button>
        </form>
    );
};

export default EditExerciseForm;
