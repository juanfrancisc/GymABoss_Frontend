import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const useUserById = (userId) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_URL}/users/${userId}`
        );

        const body = await res.json();
        //console.log(body)

        if (!res.ok) {
          throw new Error(body.message);
        }

        setUser(body.data);
      } catch (error) {
        console.error(error.message);
        toast.error(error.message);
      }
    };

    fetchUser();
  }, [userId]);

  const likeExercice = (id) => {

    const updatedLike = likeExercice.map((exercise) => {
      if (exercise.id === id) {
        exercise.like = 1;
      }

      return exercise;
    });

    setUser({ ...user, likeExercice: updatedLike });
  };

  return { user, setUser, likeExercice };
};

export default useUserById;