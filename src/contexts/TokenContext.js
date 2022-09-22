import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { toast } from "react-toastify";

export const TokenContext = createContext();

export const CustomTokenContextProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token");
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    if (!token) {
      setLoggedUser({});
      return;
    }

    //console.log("1");
    const fetchUser = async () => {
      try {
        console.log({token})

        //console.log("2");
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/users`,{
            headers: {
              authorization: token,
            }
          }
        );
      
        
        const body = await res.json();

        //console.log("3");

        if (!res.ok) {
          //console.log("4");
          throw new Error(body.message);
        }
        //console.log("5")
        //console.log(body.data)
        setLoggedUser(body.data);
        toast.success(body.message)
      } catch (error) {
        console.error(error.message);
        toast.error(error.message);
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