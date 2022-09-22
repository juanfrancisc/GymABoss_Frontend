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
          <Link to="?typology=cardio">Cardio</Link>
        </li>
        <li>
          <Link to="?typology=musculacion">Musculación</Link>
        </li>
        <li>
          <Link to="?typology=relajacion">Relajación</Link>
        </li>
        <li>
          <Link to="?typology=natacion" >Natación</Link>
        </li>
      </ul>)} 
      <div className='logout'>
        <LogoutButton />
      </div>              
    </nav>
  );
};

export default Navbar;