import { useState, useEffect } from 'react';
import { useTokenContext } from '../contexts/TokenContext';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const useExercises = () => {
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);

    //console.log([exercises, setExercises])

    const { token } = useTokenContext();

    const [searchParams, setSearchParams] = useSearchParams();
    //console.log(token)

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const consulta = `${
                    process.env.REACT_APP_API_URL
                }/getExercises?${searchParams.toString()}`;

                const parametro = `${searchParams}`
                
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

                /* if (parametro){
                    toast.success( "No existe ningun ejercicio creado con esa tipología");
                } */

                if (body.data <1 && parametro.length > 10){
                    toast.success( "No existe ningun ejercicio creado con esa tipología");
                }

                if (body.data < 1){
                    toast.success( "No existe ningun ejercicio creado aun. Puedes crear alguno");
                  }

                setExercises(body.data);
                /* console.log(body.data) */
                toast.success(body.message);
            } catch (error) {
                console.error(error.message);
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchExercises();
    }, [searchParams]);

    const setExerciseLikes = (id, likes) => {
        const updatedExercises = exercises.map((ex) => {
            if (ex.id === id) {
                ex.n_like = likes;
            }

            return ex;
        });
        setExercises(updatedExercises);

    };

    const setDeleteExercise = (id) => {
        const updatedExercises = exercises.filter(
            (item) => item.id !== id
        );
        setExercises(updatedExercises);
    };

    return {
        exercises,
        setExercises,
        loading,
        searchParams,
        setSearchParams,
        setExerciseLikes,
        setDeleteExercise,
    };
};

export default useExercises;
