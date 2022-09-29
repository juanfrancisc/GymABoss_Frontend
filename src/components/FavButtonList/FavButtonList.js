import { useTokenContext } from '../../contexts/TokenContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

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
            ⭐
        </button>
    );
};

export default FavButtonList;
