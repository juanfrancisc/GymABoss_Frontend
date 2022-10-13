import { useState, useEffect } from 'react';
import { useTokenContext } from '../contexts/TokenContext';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const useExercises = () => {
	const [exercises, setExercises] = useState([]);
	const [loading, setLoading] = useState(true);

	const { token } = useTokenContext();

	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		const fetchExercises = async () => {
			try {
				const consulta = `${
					process.env.REACT_APP_API_URL
				}/getExercises?${searchParams.toString()}`;

				const res = await fetch(consulta, {
					method: 'GET',
					headers: {
						authorization: token,
					},
				});

				const body = await res.json();

				if (!res.ok) {
					throw new Error(
						'Unexpected error fetching API. Please, try again or contact support'
					);
				}

				setExercises(body.data);
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
		const updatedExercises = exercises.filter((item) => item.id !== id);
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
