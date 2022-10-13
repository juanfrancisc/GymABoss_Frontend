import './styles.css';
import { toast } from 'react-toastify';
import { useTokenContext } from '../../contexts/TokenContext';
import { useState, useEffect } from 'react';


const FavButton = ({ id, removeFavorite }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const { token } = useTokenContext();
	

	useEffect(() => {
		const checkFavorite = async () => {
			try {
				const consulta = `${process.env.REACT_APP_API_URL}/checkFavorite/${id}`;

				const res = await fetch(consulta, {
					method: 'GET',
					headers: {
						authorization: token,
					},
				});

				const body = await res.json();

				if (!res.ok) {
					throw new Error(body.message);
				}

				setIsFavorite(body.isFavorite);
			} catch (error) {
				console.error(error.message);
				toast.error(error.message);
			}
		};

		checkFavorite();
	}, []);

	const favExerciseId = async (id, token) => {
		try {
			const consulta = `${process.env.REACT_APP_API_URL}/addFavorite/${id}`;

			const res = await fetch(consulta, {
				method: 'POST',
				headers: {
					authorization: token,
				},
			});

			const body = await res.json();

			if (!res.ok) {
				throw new Error(body.message);
			}

			setIsFavorite(body.favorited);
			toast.success(body.message);
		} catch (error) {
			console.error(error.message);
			toast.error(error.message);
		}
	};

	return (
		<>
			<input
				type="image"
				alt="Boton Favorito"
				className={`FavButton ${isFavorite && 'favorited'}`}
				id={id}
				values="Ir a favoritos"
				onClick={() => {
					favExerciseId(id, token);

					if (removeFavorite) {
						removeFavorite(id);
						
					}
				}}
			></input>
		</>
	);
};

export default FavButton;