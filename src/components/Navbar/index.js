import './styles.css';
import { Link } from 'react-router-dom';
import { useTokenContext } from '../../contexts/TokenContext';
import LogoutButton from '../LogoutButton';
import NewExerciseButton from '../NewExerciseButton';
import { useSearchParams } from "react-router-dom";
import useUser from '../../hooks/useUser';
import logo from '../../assets/imagenes/logo.png';
import FavButtonList from '../FavButtonList';
import SearchForm from "../SearchForm";


const Navbar = () => {
    const { token } = useTokenContext();
    const { user } = useUser();
    const [searchParams, setSearchParams] = useSearchParams();

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
                        <li className="li_typo">
                            <Link
                                to="./exercisesPage?typology=cardio"
                                className="LinkNavbar"
                            >
                                Cardio
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="./exercisesPage?typology=musculacion"
                                className="LinkNavbar"
                            >
                                Musculaci??n
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="./exercisesPage?typology=relajacion"
                                className="LinkNavbar"
                            >
                                Relajaci??n
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="./exercisesPage?typology=natacion"
                                className="LinkNavbar"
                            >
                                Nataci??n
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="./exercisesPage?typology"
                                className="LinkNavbar"
                            >
                                Todas las tipologias
                            </Link>
                        </li>
                        <li>    
                        <SearchForm 
                            searchParams={searchParams}
                            setSearchParams={setSearchParams}
                            
                            />
                        </li>
                    </ul>
                    <ul className="last_ul">
                        <li>
                            {user.type_user === 'admin' && (
                                <NewExerciseButton />
                            )}
                        </li>
                        <li>
                            {user.type_user === 'normal' && <FavButtonList />}
                        </li>
                        <li>
                            <LogoutButton />
                        </li>
                    </ul>
                </>
            )}
        </nav>
    );
};

export default Navbar;
