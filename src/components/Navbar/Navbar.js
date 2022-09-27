import './Navbar.css'
import { Link } from 'react-router-dom'
import { useTokenContext } from '../../contexts/TokenContext'
import LogoutButton from '../LogoutButton/LogoutButton'
import NewExerciseButton from '../NewExerciseButton/NewExereciseButton'
/* import { useState } from "react"; */
import useUser from '../../hooks/useUser'
import logo from '../../assets/imagenes/logo.png'

const Navbar = () => {
    const { token } = useTokenContext()
    const { user } = useUser()

    return (
        <nav>
            {token && (
                <>
                    <ul className="ul_nav">
                        <li>
                            <Link to="/">
                                <img
                                    className="logo_nav"
                                    src={logo}
                                    alt="Logo de Gym a Boos"
                                />
                            </Link>
                        </li>
                        <li>
                            <h4 className="bienvenido">
                                Bienvenido, {user.name}.{' '}
                                {user.type_user === 'admin'
                                    ? 'Estas logado como ' + user.type_user
                                    : ''}
                            </h4>
                        </li>
                        <li>
                            <Link to="?typology=cardio" className="LinkNavbar">
                                Cardio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="?typology=musculacion"
                                className="LinkNavbar"
                            >
                                Musculación
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="?typology=relajacion"
                                className="LinkNavbar"
                            >
                                Relajación
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="?typology=natacion"
                                className="LinkNavbar"
                            >
                                Natación
                            </Link>
                        </li>
                        <li>
                            <Link to="?typology" className="LinkNavbar">
                                Todas las tipologias
                            </Link>
                        </li>
                    </ul>
                    <ul className="last_ul">
                        <li>
                            {user.type_user === 'admin' && (
                                <NewExerciseButton />
                            )}
                        </li>
                        <li>
                            <LogoutButton />
                        </li>
                    </ul>
                </>
            )}
        </nav>
    )
}

export default Navbar
