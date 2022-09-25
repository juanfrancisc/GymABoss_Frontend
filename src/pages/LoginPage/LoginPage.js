import './LoginPage.css'
import logo from "../../assets/imagenes/logo.png"
import { useTokenContext } from "../../contexts/TokenContext";
import { Navigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = () => {
  const { token } = useTokenContext();

  if (token) {
    return <Navigate to="/exercisesPage" />;
  }

  return (
    <section>
      <h2>Login</h2>
      <section id="logo">
        <fieldset >
          <LoginForm />
        </fieldset>
        <fieldset className='logo'>
          <img src={logo} alt="Logo de Gym a Boos" />
        </fieldset>
      </section> 
    </section>
  );
};

export default LoginPage;