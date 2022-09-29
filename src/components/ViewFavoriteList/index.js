import { useEffect, useState } from 'react';
import useUser from '../../hooks/useUser';
import { useTokenContext } from '../../contexts/TokenContext';
import { toast } from 'react-toastify';

const ViewFavoriteList = () => {
    const [loading, setLoading] = useState(true);

    const { token } = useTokenContext();

    const [favorites, setFavorites] = useState([])

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

                console.log(body.status)
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
    },[]);


    return (
        <>
            <h2> Mis Favoritos</h2>
            <ul >      
            {favorites &&
            favorites.map((object, index) => {
                return ( 
                <li className='boxes' key={index}>
                    <img src={`${process.env.REACT_APP_API_URL}/imagenes/${object.photo}`} alt={object.title} />
                    <h3>{object.title}</h3>
                    <p>{object.typology}</p>
                    <p>{object.description}</p>
                </li>)
            })
            }
            </ul>
        </>
    )
}

export default ViewFavoriteList;