import { useState, useEffect } from "react";
import { useTokenContext } from "../contexts/TokenContext";
import { toast } from "react-toastify";

const useUser = () => {
    const [user, setUser] = useState("")
    const [loading, setLoading] = useState(true);

    const { token } = useTokenContext();
    //console.log(token)

    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    console.log(decodedToken)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/getUser/${decodedToken.id}`,{
            method: "GET",
            headers: {
              authorization: token,
            }
        });
        const body = await res.json();
        console.log(body)

        if (!res.ok) {
          throw new Error(
            "Unexpected error fetching API. Please, try again or contact support"
          );
        }

        setUser(body.data);
        //console.log(body.data)
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