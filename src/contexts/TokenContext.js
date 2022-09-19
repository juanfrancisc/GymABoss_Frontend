import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TokenContext = createContext();

export const CustomTokenContextProvider = ({ children }) => {
  console.log("TokenContext")
  const [token, setToken] = useLocalStorage("token");
  const [loggedUser, setLoggedUser] = useState({});
  console.log(token)
  useEffect(() => {
    if (!token) {
      setLoggedUser({});
      return;
    }

    console.log("1");
    const fetchUser = async () => {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1]));

        console.log("2");

        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/users/${decodedToken.id}`
        );

        const body = await res.json();
        
        console.log("3");

        if (!res.ok) {
          console.log("4");
          throw new Error(body.message);
        }

        setLoggedUser(body.data);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchUser();
  }, [token]);

  return (
    <TokenContext.Provider value={{ token, setToken, loggedUser, setLoggedUser }} >
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => {
  const { token, setToken, loggedUser, setLoggedUser } =
    useContext(TokenContext);

  return { token, setToken, loggedUser, setLoggedUser };

};