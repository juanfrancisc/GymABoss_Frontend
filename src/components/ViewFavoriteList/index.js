import { useEffect, useState } from 'react';
import useUser from '../../hooks/useUser';
import { useTokenContext } from '../../contexts/TokenContext';
import { toast } from 'react-toastify';
import './styles.css'
import { Link } from 'react-router-dom';
import FavButton from '../FavButton/FavButton';

const ViewFavoriteList = ({setFavExercices}) => {
    const [loading, setLoading] = useState(true);

    const { token } = useTokenContext();

    const [favorites , setFavorites] = useState();
    /* console.log(favorites) */


    useEffect (() => {
        const fetchFavoritesList = async () => {
            try {
                const consulta = `${process.env.REACT_APP_API_URL}/viewFavorites`
                /* console.log(consulta) */
                const res = await fetch(consulta, {
                    method: 'POST',
                    headers: {
                        authorization: token,
                    },
                });

                const body = await res.json();

                /* console.log(body) */
                if( body.status === "0" ){
                    toast.success( "No existe ningun ejercicio marcado como favorito");
                    setFavorites("")
                    return
                }

                setFavorites(body.data)
                
            } catch (error) {
                console.error(error.message);
                toast.error(error.message);

            } finally {
                setLoading(false);
            }
        };
        fetchFavoritesList();
    },[favorites]);


    return (
        <>
            <h2> Mis Favoritos</h2>
            <ul className='boxes-fav'>      
            {favorites &&
            favorites.map((object) => {
                return ( 
                <li className='boxes-fav' key={object.id}>
                    
                    <Link className='boxes-fav' to={`../verExercise/${object.id}`}>
                        <section>
                            <img src={`${process.env.REACT_APP_API_URL}/imagenes/${object.photo}`} alt={object.title} />
                        </section>
                        <section>
                            <h3>{object.title}</h3>
                            <p>{object.typology}</p>
                            <p>{object.description}</p>
                                
                        </section>
                    </Link>
                    <FavButton id={object.id} setFavExercices={setFavExercices} />
                    
                </li>)
            })
            }
            </ul>
        </>
    )
}

export default ViewFavoriteList;