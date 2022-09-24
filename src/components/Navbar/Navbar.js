import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTokenContext } from "../../contexts/TokenContext";
import LogoutButton from "../LogoutButton/LogoutButton";
import NewExerciseButton from "../NewExerciseButton/NewExereciseButton";
/* import { useState } from "react"; */
import useUser from "../../hooks/useUser";

const Navbar = () => {
  const { token } = useTokenContext();
  const { user } = useUser();

  return (
    <nav>
      {token && (
        <ul>
          <li>
            <h4>Hola: {user.name}. {user.type_user === 'admin' ? "Estas logado como "+user.type_user:"" }</h4>
          </li>
          <li>
            <Link to="?typology=cardio" className="LinkNavbar">
              Cardio
            </Link>
          </li>
          <li>
            <Link to="?typology=musculacion" className="LinkNavbar">
              Musculación
            </Link>
          </li>
          <li>
            <Link to="?typology=relajacion" className="LinkNavbar">
              Relajación
            </Link>
          </li>
          <li>
            <Link to="?typology=natacion" className="LinkNavbar">
              Natación
            </Link>
          </li>
          <li>
            <Link to="?typology" className="LinkNavbar">
              Todas las tipologias
            </Link>
          </li>
          <li className="logout">
            {user.type_user === 'admin' && <NewExerciseButton />  } 
          </li>
          <li className="logout">
            <LogoutButton />
          </li>
        </ul>
      )}
          
      
    </nav>
  );
};

export default Navbar;
