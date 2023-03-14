import logo from '../assets/Logo.svg'

const Header = ({children}) => {
	return (<header>
		<img alt='' src={logo} />
		{children}
	</header>)
}

export default Header;