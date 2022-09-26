import './RegisterForm.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
//Falta importar useNavigate
import { useNavigate } from 'react-router-dom'

const RegisterForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    //Falta crear esta variable
    const navigate = useNavigate()

    return (
        <form
            onSubmit={async (event) => {
                try {
                    event.preventDefault()

                    const newUser = { name, email, password }
                    console.log(newUser)
                    const res = await fetch(
                        `${process.env.REACT_APP_API_URL}/register`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(newUser),
                        }
                    )
                    const body = await res.json()
                    //console.log(body)

                    if (!res.ok) {
                        throw new Error(body.message)
                    }

                    toast.success(body.message)
                    navigate('/login')
                } catch (error) {
                    console.error(error.message)
                    toast.error(error.message)
                }
            }}
        >
            <label htmlFor="name">Name:</label>
            <input
                id="name"
                type="name"
                value={name}
                onChange={(event) => {
                    setName(event.target.value)
                }}
            />
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value)
                }}
            />
            <label htmlFor="password">Password:</label>
            <input
                id="password"
                type="password"
                value={password}
                onChange={(event) => {
                    setPassword(event.target.value)
                }}
            />
            <button type="submit">Register</button>
        </form>
    )
}

export default RegisterForm
