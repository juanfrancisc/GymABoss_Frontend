import './LikeButton.css';
import { toast } from 'react-toastify';
import { useTokenContext } from '../../contexts/TokenContext';
import { useState, useEffect } from 'react';

const LikeButton = ({ id, setExerciseLikes }) => {
	const { token } = useTokenContext();
	

	const [verifyLike, setVerifyLike] = useState([]);

	const likeExerciseId = async (id, token) => {
		
		try {
			const consulta = `${process.env.REACT_APP_API_URL}/addLike/${id}`;

			const res = await fetch(consulta, {
				method: 'POST',
				headers: {
					authorization: token,
				},
			});

			const body = await res.json();

			toast.success(body.message);

			setExerciseLikes(id, body.likeCount);
		} catch (error) {
			console.error(error.message);
			toast.error(error.message);
		}
	};

	useEffect(() => {
		const verifyLikeUser = async () => {
			try {
				const consulta = `${process.env.REACT_APP_API_URL}/like`;

				const res = await fetch(consulta, {
					method: 'GET',
					headers: {
						authorization: token,
					},
				});

				const body = await res.json();

				setVerifyLike(body.data);
			} catch (error) {
				console.error(error.message);
				toast.error(error.message);
			}
		};
		verifyLikeUser();
	}, [token]);

	return (
		<>
			{verifyLike.includes(id) ? (
				<input
					type="image"
					alt="Boton Like"
					className="LikeButton_like"
					onClick={() => {
						likeExerciseId(id, token);
						setVerifyLike(
							verifyLike.filter((idLiked) => id !== idLiked)
						);
					}}
				/>
			) : (
				<input
					type="image"
					alt="Boton Like"
					className="LikeButton"
					onClick={() => {
						likeExerciseId(id, token);
						setVerifyLike([...verifyLike, id]);
					}}
				/>
			)}
		</>
	);
};

export default LikeButton;
