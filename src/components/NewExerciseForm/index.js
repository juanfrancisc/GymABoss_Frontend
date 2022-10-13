import { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import { useTokenContext } from '../../contexts/TokenContext'
import { useNavigate } from 'react-router-dom'
import './styles.css'

const NewExerciseForm = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [typology, setTypology] = useState('')
    const { token } = useTokenContext()


    const navigate = useNavigate()

    const photoRef = useRef()

    return (
        <form
            className="form_new"
            onSubmit={async (event) => {
                try {
                    event.preventDefault()
                    const exerecisePhoto = photoRef.current.files[0]

                    const formData = new FormData()
                    if (!exerecisePhoto) {
                        throw new Error(
                            'No hay ninguna foto seleccionada para subir, es obligatorio indicar una.'
                        )
                    }
                    formData.append('photo', exerecisePhoto)
                    formData.append('title', title)
                    formData.append('description', description)
                    formData.append('typology', typology)

                    const res = await fetch(
                        `${process.env.REACT_APP_API_URL}/newExercise`,
                        {
                            method: 'POST',
                            headers: {
                                authorization: token,
                            },
                            body: formData,
                        }
                    )

                    const body = await res.json()

                    if (!res.ok) {
                        throw new Error(body.message)
                    }

                    toast.success(body.message)
                    navigate('/')
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
                className="input_title"
                id="title"
                value={title}
                onChange={(event) => {
                    setTitle(event.target.value)
                }}
            />

            <label className="new_description" htmlFor="description">
                Descripción:
            </label>
            <textarea
                className="input_description"
                id="description"
                value={description}
                onChange={(event) => {
                    setDescription(event.target.value)
                }}
            />

            <label className="new_typology" htmlFor="typology">
                Tipología:
            </label>
            <select defaultValue=""
                className="select_typology"
                name="typology"
                id="typology"
                onChange={(event) => {
                    setTypology(event.target.value)
                }}
            >
                <option value="" disabled>Escoge una tipología</option>
                <option value="cardio">Cardio</option>
                <option value="musculacion">Musculación</option>
                <option value="relajacion">Relejación</option>
                <option value="natacion">Natación</option>
            </select>

            <label className="new_photo" htmlFor="photo">
                Imagen:
            </label>
            <input
                className="input_photo"
                id="photo"
                type="file"
                accept="image/*"
                ref={photoRef}
            />

            <button className="button_crear">Crear ejercicio</button>
        </form>
    )
}

export default NewExerciseForm
