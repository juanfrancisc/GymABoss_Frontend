import { useNavigate } from "react-router-dom";

const RemenberButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate("/remenberPass");
      }}
    >
      Restablecer Contraseña
    </button>
  );
};

export default RemenberButton;