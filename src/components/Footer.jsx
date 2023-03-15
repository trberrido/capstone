import logo from '../assets/Logo.svg';
import './footer.css'

const Footer = () => {
	return (<footer class='footer'>
		<div class='content-column footer__content'>
			<img alt='' src={logo} />
			<ul class='footer__ul'>
				<li class='footer__li'><a class='footer__a' href='/'>Home</a></li>
				<li class='footer__li'><a class='footer__a' href='/about'>About</a></li>
				<li class='footer__li'><a class='footer__a' href='/menu'>Menu</a></li>
				<li class='footer__li'><a class='footer__a' href='/reservations'>Reservations</a></li>
				<li class='footer__li'><a class='footer__a' href='/order'>Order online</a></li>
				<li class='footer__li'><a class='footer__a' href='/login'>Login</a></li>
			</ul>
			<p class='footer__p'>
				Adress<br />
				Phone Number<br />
				email
			</p>
			<p class='footer__p'>
				Adress<br />
				Phone Number<br />
				email
			</p>
		</div>
	</footer>)
}

export default Footer;