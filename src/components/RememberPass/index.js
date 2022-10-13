import './styles.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const RememberPass = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()

    return (
        <form
            className="RememberForm"
            onSubmit={async (event) => {
                try {
                    event.preventDefault()

                    const res = await fetch(
                        `${process.env.REACT_APP_API_URL}/rememberPass`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({ email }),
                        }
                    )

                    const body = await res.json()

                    if (!res.ok) {
                        throw new Error(body.message)
                    }
                    toast.success('Correo enviado con exito!')
                    navigate('/')
                } catch (error) {
                    console.error(error.message)
                    toast.error(error.message)
                }
            }}
        >
            <p>
                Escribe aquí debajo tu correo electrónico, te enviamos una nueva
                contraseña a ese correo
            </p>
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
            />
            <button type="submit" className="Pass">
                Restaurar
            </button>
        </form>
    )
}

export default RememberPass
