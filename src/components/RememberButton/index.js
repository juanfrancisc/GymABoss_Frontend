import { useNavigate } from "react-router-dom";

const RememberButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/rememberPass");
      }}
    >
      Restablecer Contraseña
    </button>
  );
};

export default RememberButton;