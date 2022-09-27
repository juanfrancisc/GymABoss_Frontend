import { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import { useTokenContext } from '../../contexts/TokenContext'
import useExerciseId from '../../hooks/useExerciseId'

const EditExerciseForm = ( exercise, setExercise, setShowEditForm ) => {
    //const {exercise, setExercise} = useExerciseId();

    const {
        id: id,
        title: currentTittle,
        description: currentDescription,
        typology: currentTypology,
        photoName: currentPhotoName,
    } = exercise

    const [newTitle, setNewTitle] = useState(currentTittle)
    const [newDescription, setNewDescription] = useState(currentDescription)
    const [newTypology, setNewTypology] = useState(currentTypology)
    const [newPhotoPreview, setNewPhotoPreview] = useState(currentPhotoName)

    const newPhotoRef = useRef()

    const { token } = useTokenContext

    return (
        <form
            onSubmit={async (event) => {
                try {
                    event.preventDefault()

                    const newPhoto = newPhotoRef.current.file[0]
                    console.log(newPhoto)

                    if (
                        !newTitle ||
                        newDescription ||
                        newTypology ||
                        newPhoto
                    ) {
                        toast.warn(
                            'No has modificado ningun datos del ejercicio'
                        )
                        return
                    }

                    if (newTitle || newDescription || newTypology || newPhoto) {
                        const formData = new FormData()
                        formData.append('title', newTitle)
                        formData.append('description', newDescription)
                        formData.append('typology', newTypology)
                        formData.append('photo', newPhoto)

                        const res = await fetch(
                            `${process.env.REACT_APP_API_URL}/modifyExercises/${id}`,
                            {
                                method: 'POST',
                                headers: { authorization: token },
                                body: formData,
                            }
                        )

                        const body = await res.json()
                        console.log(body)

                        if (!res.ok) {
                            throw new Error(body.message)
                        }

                        setExercise({
                            ...exercise,
                            title: newTitle || exercise.title,
                            description: newDescription || exercise.description,
                            typology: newTypology || exercise.typology,
                            photo: newPhoto || exercise.photo,
                        })

                        toast.success('Exercise updated succesfully!')
                        setShowEditForm(false)
                    }
                } catch (error) {
                    console.error(error.message)
                    toast.error(error.message)
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
                    setNewTitle(event.target.value)
                }}
                placeholder={currentTittle}
            />

            <label className="new_description" htmlFor="description">
                Descripción:
            </label>
            <input
                id="description"
                value={newDescription}
                onChange={(event) => {
                    setNewDescription(event.target.value)
                }}
                placeholder={currentDescription}
            />

            <label className="new_typology" htmlFor="typology">
                Tipología:
            </label>
            <select 
                name="typology"
                id="typology"
                onChange={(event) => {
                    setNewTypology(event.target.value)
                }}
                placeholder={currentTypology}
            >
            <option value="" selected></option>
            <option value="cardio">Cardio</option>
            <option value="musculacion">Musculación</option>
            <option value="relajacion">Relejación</option>
            <option value="natacion">Natación</option>
        </select>

            <label className="new_photo" htmlFor="photo">
                Foto:
            </label>
            <input
                id="photo"
                type="file"
                accept="image/*"
                ref={newPhotoRef}
                onChange={() => {
                    const newPhoto = new newPhotoRef.current.file[0]()
                    setNewPhotoPreview(URL.createObjectURL(newPhoto))
                }}
            />

            <button>Actualizar Ejercicio</button>
        </form>
    )
}

export default EditExerciseForm
