import "./LoginForm.css";
import { useState } from "react";
import { useTokenContext } from "../../contexts/TokenContext";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useTokenContext();

  return (
    <form
      onSubmit={async (event) => {
        try {
          event.preventDefault();

          const res = await fetch(`${process.env.REACT_APP_API_URL}/getLogin`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          const body = await res.json();
          //console.log(body)
          //console.log(body.status)
          console.log(body.authtoken);
          if (!res.ok) {
            throw new Error(body.message);
          }

          setToken(body.authtoken);
          toast.success("Logged succesfully");
        } catch (error) {
          console.error(error.message);
          toast.error(error.message);
        }
      }}
    >
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />

      <label htmlFor="password">Password:</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
