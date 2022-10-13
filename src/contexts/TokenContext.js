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


    const fetchUser = async () => {
      try {
 
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/users`,{
            headers: {
              authorization: token,
            }
          }
        );
      
        
        const body = await res.json();


        if (!res.ok) {
          throw new Error(body.message);
        }

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