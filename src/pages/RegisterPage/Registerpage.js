import "./RegisterPage.css";
import logo from "../../assets/imagenes/logo.png";
import RegisterForm from "../../components/RegisterForm";

const RegisterPage = () => {
  console.log("RegisterPage");
  return (
    <section>
      <h2>Register</h2>
      <section>
        <fieldset>
          <RegisterForm />
        </fieldset>
        <fieldset className="logo">
          <img src={logo} alt="Logo de Gym a boss" />
        </fieldset>
      </section>
    </section>
  );
};

export default RegisterPage;