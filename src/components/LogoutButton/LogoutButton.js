import './LogoutButton.css'
import { useTokenContext } from "../../contexts/TokenContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LogoutButton = () => {
  const { setToken } = useTokenContext();
  const navigate = useNavigate();

  return (
    <button className='logoutButton'
      onClick={() => {
        setToken("");
        navigate("/");
        toast.success("Unlogged succesfully :)");
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;