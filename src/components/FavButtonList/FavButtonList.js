import './style.css';
import { useTokenContext } from '../../contexts/TokenContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Favicon from '../../assets/imagenes/FavB.png';

const FavButtonList = () => {
    const { token } = useTokenContext();
    const navigate = useNavigate();

    return (
        <button
            className="FavButtonList"
            onClick={() => {
                /**Realizado por David, se comenta para pruebas */
                /* navigate('/FavoritesPage/'); */

                /**En pruebas por JF */
                navigate('/viewFavoritesList');
            }}
        >
            <img src={Favicon} alt="Fav" height="60" width="60" />
        </button>
    );
};

export default FavButtonList;
