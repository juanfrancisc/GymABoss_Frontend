import { useState, useEffect } from "react";
import { useTokenContext } from "../contexts/TokenContext";
import { toast } from "react-toastify";

const useUser = () => {
    const [user, setUser] = useState("")
    const [loading, setLoading] = useState(true);

    const { token } = useTokenContext();

    const decodedToken = JSON.parse(atob(token.split(".")[1]));

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/users/${decodedToken.id}`,{
            method: "GET",
            headers: {
              authorization: token,
            }
        });
        const body = await res.json();

        if (!res.ok) {
          throw new Error(
            "Unexpected error fetching API. Please, try again or contact support"
          );
        }

        setUser(body.data);
        
      } catch (error) {
        console.error(error.message);
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};

export default useUser;