import './nav.css';

const Nav = () => {
	return (<nav class="main-nav">
		<ul class="main-nav__ul">
			<li class="main-nav__li"><a class="main-nav__a" href='/'>Home</a></li>
			<li class="main-nav__li"><a class="main-nav__a" href='/about'>About</a></li>
			<li class="main-nav__li"><a class="main-nav__a" href='/menu'>Menu</a></li>
			<li class="main-nav__li"><a class="main-nav__a" href='/reservations'>Reservations</a></li>
			<li class="main-nav__li"><a class="main-nav__a" href='/order'>Order online</a></li>
			<li class="main-nav__li"><a class="main-nav__a" href='/login'>Login</a></li>
		</ul>
	</nav>)
}

export default Nav;