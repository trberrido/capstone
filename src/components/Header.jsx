import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';
const Header = ({children}) => {
	return (<header className='content-column'>
		<Link to='/'><img alt='' src={logo} /></Link>
		{children}
	</header>)
}

export default Header;