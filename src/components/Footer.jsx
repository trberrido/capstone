import logo from '../assets/Logo.svg';

const Footer = () => {
	return (<footer>
		<img alt='' src={logo} />
		<ul>
			<li><a href='/'>Home</a></li>
			<li><a href='/about'>About</a></li>
			<li><a href='/menu'>Menu</a></li>
			<li><a href='/reservations'>Reservations</a></li>
			<li><a href='/order'>Order online</a></li>
			<li><a href='/login'>Login</a></li>
		</ul>
		<p>
			Adress<br />
			Phone Number<br />
			email
		</p>
		<p>
			Adress<br />
			Phone Number<br />
			email
		</p>
	</footer>)
}

export default Footer;