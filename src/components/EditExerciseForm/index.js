import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTokenContext } from '../../contexts/TokenContext';


const EditExerciseForm = ({ exercise }) => {

    const {
        id,
        name: currentTitle,
        description: currentDescription,
        typology: currentTypology,
        photo: currentPhoto,
    } = exercise;

    const [newTitle, setNewTitle] = useState(currentTitle);
    const [newDescription, setNewDescription] = useState(currentDescription);
    const [newTypology, setNewTypology] = useState(currentTypology);
    const [newPhoto, setNewPhoto] = useState(currentPhoto);


    const newPhotoRef = useRef(newPhoto);

    const { token } = useTokenContext();

    const navigate = useNavigate();

    return (
        <form
        className="form_new"
            onSubmit={async (event) => {
                try {
                    event.preventDefault();

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

                        if (!res.ok) {
                            throw new Error(body.message);
                        }
                        toast.success(body.title)
                        
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
                Descripci??n:
            </label>
            <textarea
                id="description"
                value={newDescription}
                onChange={(event) => {
                    setNewDescription(event.target.value);
                }}
                placeholder={currentDescription}
            />
            <label className="new_typology" htmlFor="typology">
                Tipolog??a:
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
                <option value="Musculacion">Musculaci??n</option>
                <option value="Relajacion">Relajaci??n</option>
                <option value="Natacion">Nataci??n</option>
            </select>

            <label className="new_photo" htmlFor="photo">
                Foto:
            </label>
            <input
                name="photo"
                ref={newPhotoRef}
                id="photo"
                type="file"
                accept="image/*"
                onChange={(e) => {
                    console.log(e.target.files)
                    setNewPhoto(e.target.files[0])
                }}

            /> 

            <button className="button_crear">Actualizar Ejercicio</button>
        </form>
    );
};

export default EditExerciseForm;
