import './style.css';
import { useNavigate } from 'react-router-dom';
import Favicon from '../../assets/imagenes/start.png';

const FavButtonList = () => {
    const navigate = useNavigate();

    return (
        <input type="image" 
        alt="Boton de lista de favoritos"
        src={Favicon}
        className="logoutButton"
        onClick={() => {
            navigate('/viewFavoritesList');
        }}
        />
        
        
        
    );
};

export default FavButtonList;
