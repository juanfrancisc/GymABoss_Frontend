import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TokenContext = createContext();

export const CustomTokenContextProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage("token");

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => {
  const { token, setToken } = useContext(TokenContext);

  return { token, setToken };

};