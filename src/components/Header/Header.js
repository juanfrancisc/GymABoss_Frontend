import "./header.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useTokenContext } from "../../contexts/TokenContext";
import TypologyFilter from "../TypologyFilter/TypologyFilter";


const Header = () => {
    const { token } = useTokenContext();
  return (
    <header>
        <Link to="/">
            <h1>Gym a Boss</h1>
        </Link>

        {token && (
          <li>
            <Navbar />
            <TypologyFilter />
          </li>
        )}
    </header>
  );
};

export default Header;