import './style.css';
import { useTokenContext } from '../../contexts/TokenContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
/* import Favicon from '../../assets/imagenes/FavB.png'; */
import Favicon from '../../assets/imagenes/start.png';

const FavButtonList = () => {
    const { token } = useTokenContext();
    const navigate = useNavigate();

    return (
        <input type="image" src={Favicon}
        className="logoutButton"
        onClick={() => {
            navigate('/viewFavoritesList');
        }}
        />
        
        
        
    );
};

export default FavButtonList;
