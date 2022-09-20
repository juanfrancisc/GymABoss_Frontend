import { useNavigate } from "react-router-dom";

const RegisterButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/register");
      }}
    >
      Registro
    </button>
  );
};

export default RegisterButton;