import { useState, useEffect } from 'react';
import { useTokenContext } from '../contexts/TokenContext';
import { toast } from 'react-toastify';

const useExerciseId = (id) => {
    const [exercise, setExercise] = useState(null);
    const [loading, setLoading] = useState(true);

    //console.log(exercise)

    const { token } = useTokenContext();

    useEffect(() => {
        const fetchExercisesId = async () => {
            try {
                const consulta = `${process.env.REACT_APP_API_URL}/getExerciseId/${id}`;
                const res = await fetch(consulta, {
                    method: 'GET',
                    headers: {
                        authorization: token,
                    },
                });

                const body = await res.json();
                //console.log(body)

                if (!res.ok) {
                    throw new Error(
                        'Unexpected error fetching API. Please, try again or contact support'
                    );
                }

                setExercise(body.data);
                //console.log(body.data)
            } catch (error) {
                console.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchExercisesId();
    }, [id]);

    return { exercise, setExercise, loading };
};

export default useExerciseId;
