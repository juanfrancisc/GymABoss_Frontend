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
                navigate('/FavoritesPage/');
            }}
        >
            ⭐
        </button>
    );
};

export default FavButtonList;
