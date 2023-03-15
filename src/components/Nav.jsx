import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	const links = [
		{ name: 'Home', to: '/'},
		{ name: 'About', to: '/about'},
		{ name: 'Menu', to: '/menu'},
		{ name: 'Reservations', to: '/booking'},
		{ name: 'Order online', to: '/order'},
		{ name: 'Login', to: '/login'},
	]
	return (<nav className="main-nav">
		<ul className="main-nav__ul">
			{
				links.map(link => (
					<li key={link.name} className="main-nav__li">
						<Link className="main-nav__a" to={link.to}>{link.name}</Link>
					</li>
				))
			}
		</ul>
	</nav>)
}

export default Nav;