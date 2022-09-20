import './Navbar.css'
import { Link } from "react-router-dom";
import { useTokenContext } from "../../contexts/TokenContext";
import LogoutButton from "../LogoutButton/LogoutButton";

const Navbar = () => {
  const { token } = useTokenContext();

  return (
    <nav>
      {token && (
      <ul>
        <li>
          <a href="/Musculacion"> Pruebas </a>
        </li>
        <li>
          <Link to="exercisePage/cardio">Cardio</Link>
        </li>
        <li>
          <Link to="/musculacion">Musculación</Link>
        </li>
        <li>
          <Link to="/relajacion">Relajación</Link>
        </li>
        <li>
          <Link to="/natacion">Natación</Link>
        </li>
      </ul>)} 
      <div className='logout'>
        <LogoutButton />
      </div>              
    </nav>
  );
};

export default Navbar;