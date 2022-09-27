import { Link } from 'react-router-dom'
import { useTokenContext } from '../../contexts/TokenContext'
import { toast } from 'react-toastify'
import './styles.css'
import flexiones from '../../assets/imagenes/flexiones.jpg'
import useUser from '../../hooks/useUser'
import DeteleExerciseButton from '../DeleteExerciseButton/DeleteExerciseButton'
import EditExerciseButton from '../ModifyExerciseButton/ModifyExerciseButton'
import LikeButton from '../LikeButton/LikeButton'
import Trash from '../../assets/imagenes/trash.png'
import { useState } from 'react'
import EditExerciseForm from '../EditExerciseForm/EditExerciseForm'
import Edit from '../../assets/imagenes/edit.png'
import useExercises from '../../hooks/useExercises'
import Heart from '../Heart/Heart'

const Exercise = ({ exercise, setExercise }) => {
    /* console.log({exercise, setExercise}); */
    const { id, idUser, n_like, title, description, photo, typology } = exercise
    const { user } = useUser()
    const { token } = useTokenContext()
    const [loading, setLoading] = useState(true)
    const [exercises, setExercises] = useState('')

    return (
        <section className="boxes">
            {/* {user.type_user === 'admin' && <DeteleExerciseButton exercise={exercise}/> } */}
            {/* {user.type_user === 'admin' && 
      <button id='deleteButton'
        onClick={async () => {
          try {
            const res = await fetch(`${process.env.REACT_APP_API_URL}/deleteExercise/${exercise.id}`, {
              method: "DELETE",
              headers: {
                authorization: token,
              }
            })
            //console.log(res);
            const body = await res.json();
          
            if (!res.ok) {
                throw new Error(body.message);
            }
             //console.log(body)
            setExercises([...exercises])
            toast.success(body.message)
          } catch (error) {
            console.error(error.message);
            toast.error(error.message);
          }
        }}
      >
        <img src={Trash } alt="Logout" height ="64" width="64" />
      </button>
      } */}
            {user.type_user === 'admin' && (
                <EditExerciseButton
                    exercise={exercise}
                    setExercise={setExercise}
                />
                
            )}

            <Link className="Link" to={`?id=${id}`}>
                <h3 className="title">{title}</h3>
                <p className="typology">{typology}</p>
                {/* <img  src={flexiones}></img> */}
                {/* {photo.length > 0 && (
                    <img
                        height="180"
                        src={`${process.env.REACT_APP_API_URL}/imagenes/${photo}`}
                        alt={title}
                    />
                )} */}

                <p className="nLikes">Likes: {n_like}</p>
            </Link>

            {/* <LikeButton id={id} /> */}

            {/* <button
                type="button"
                onClick={async () => {
                    try {
                        const consulta = `${process.env.REACT_APP_API_URL}/addLike/${id}`
                        //console.log(consulta)

                        const res = await fetch(consulta, {
                            method: 'POST',
                            headers: {
                                authorization: token,
                            },
                        })
                        const body = await res.json()
                        //console.log(body)

                        if (!res.ok) {
                            throw new Error(
                                'Unexpected error fetching API. Please, try again or contact support'
                            )
                        }

                        toast.success(body.message)
                        setExercises({ ...exercises })
                        //console.log(like)
                    } catch (error) {
                        console.error(error.message)
                        toast.error(error.message)
                    } finally {
                        setLoading(false)
                    }
                }}
            >
                Me gusta!
            </button> */}
        </section>
    )
}

export default Exercise
