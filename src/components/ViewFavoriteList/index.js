import { useEffect, useState } from 'react';
import { useTokenContext } from '../../contexts/TokenContext';
import { toast } from 'react-toastify';
import './styles.css';
import { Link } from 'react-router-dom';
import FavButton from '../FavButton/index';

/* const ViewFavoriteList = ({exercises, favorites, setFavorites}) => { */
const ViewFavoriteList = () => {
	const [loading, setLoading] = useState(true);
	const { token } = useTokenContext();
	const [favorites, setFavorites] = useState([]);

	const removeFavorite = (id) => {
		const filteredFavorites = favorites.filter(
			(favorite) => favorite.id !== id
		);

		setFavorites(filteredFavorites);
	};

	useEffect(() => {
		const fetchFavoritesList = async () => {
			try {
				const consulta = `${process.env.REACT_APP_API_URL}/viewFavorites`;

				const res = await fetch(consulta, {
					method: 'POST',
					headers: {
						authorization: token,
					},
				});

				const body = await res.json();

				setFavorites(body.data);
			} catch (error) {
				console.error(error.message);
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		fetchFavoritesList();
	}, []);

    

	return (
		<>
			<h2> Mis Favoritos</h2>
			<ul className="boxes-fav">
				{(!favorites || favorites.length === 0) 
                ? (<h2>No has marcado ningún ejercicio como favorito</h2>) 
                : favorites.map((object) => {
						return (
							<li className="boxes-fav" key={object.id}>
								<Link
									className="boxes-fav"
									to={`../verExercise/${object.id}`}
								>
									<section>
										<img
											src={`${process.env.REACT_APP_API_URL}/imagenes/${object.photo}`}
											alt={object.title}
										/>
									</section>
									<section>
										<h3>{object.title}</h3>
										<p>{object.typology}</p>
										<p>{object.description}</p>
									</section>
								</Link>
								<FavButton
									id={object.id}
									favorites={favorites}
									removeFavorite={removeFavorite}
								/>
							</li>
						);
					})  }
			</ul>
		</>
	);
};

export default ViewFavoriteList;
