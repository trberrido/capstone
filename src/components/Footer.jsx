import logo from '../assets/Logo.svg';
import './footer.css'

const Footer = () => {
	return (<footer className='footer'>
		<div className='content-column footer__content'>
			<img alt='' src={logo} />
			<ul className='footer__ul'>
				<li className='footer__li'><a className='footer__a' href='/'>Home</a></li>
				<li className='footer__li'><a className='footer__a' href='/about'>About</a></li>
				<li className='footer__li'><a className='footer__a' href='/menu'>Menu</a></li>
				<li className='footer__li'><a className='footer__a' href='/reservations'>Reservations</a></li>
				<li className='footer__li'><a className='footer__a' href='/order'>Order online</a></li>
				<li className='footer__li'><a className='footer__a' href='/login'>Login</a></li>
			</ul>
			<p className='footer__p'>
				1 Main St. Chicago IL<br />
				+1(500) 400 200<br />
				contact@llr.com
			</p>
			<p className='footer__p'>
				<a target='_blank' rel='noreferrer' href='https://instagram.com'>Instagram</a><br />
				<a target='_blank' rel='noreferrer' href='https://facebook.com'>Facebook</a>
			</p>
		</div>
	</footer>)
}

export default Footer;