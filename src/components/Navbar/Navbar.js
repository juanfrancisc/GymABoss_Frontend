import { Link } from "react-router-dom";
import { useTokenContext } from "../../contexts/TokenContext";
//import LogoutButton from "../LogoutButton";

const Navbar = () => {
  const { token } = useTokenContext();

  return (
    <nav>
      <ul>
        {!token && (
          <>
            <li>
              <Link to="/cardio">Cardio</Link>
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
          </>
        )}

        {token && (
          <li>
            {/*<LogoutButton />*/}
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;