import "./Navbar.css";
import { Link } from "react-router-dom";
import { useTokenContext } from "../../contexts/TokenContext";
import LogoutButton from "../LogoutButton/LogoutButton";
import NewExerciseButton from "../NewExerciseButton/NewExereciseButton";
import { useState } from "react";

const Navbar = () => {
  const { token } = useTokenContext();


  return (
    <nav>
      {token && (
        <ul>
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
        </ul>
      )}
      {/* <div className="logout">
        <NewExerciseButton />
      </div> */}      
      <div className="logout">
        <LogoutButton />
      </div>
    </nav>
  );
};

export default Navbar;
