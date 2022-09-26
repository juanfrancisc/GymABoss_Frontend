import './header.css'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { useTokenContext } from '../../contexts/TokenContext'

const Header = () => {
    const { token } = useTokenContext()
    return <>{token && <Navbar />}</>
}

export default Header
