import './LogoutButton.css'
import { useTokenContext } from '../../contexts/TokenContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import IconLogout from '../../assets/imagenes/Logout_37127.png'

const LogoutButton = () => {
    const { setToken } = useTokenContext()
    const navigate = useNavigate()

    return (
        <input type="image" src={IconLogout}
        className="logoutButton"
        onClick={() => {
            setToken('')
            navigate('/')
            toast.success('Unlogged succesfully :)')
        }}
        />
        
    )
}

export default LogoutButton
