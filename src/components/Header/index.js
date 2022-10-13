import './styles.css'
import Navbar from '../Navbar'
import { useTokenContext } from '../../contexts/TokenContext'

const Header = () => {
    const { token } = useTokenContext()
    return <>{token && <Navbar />}</>
}

export default Header
