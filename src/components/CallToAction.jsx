import Button from './Button';
import './calltoaction.css'
import ctaPicture from '../assets/restauranfood.jpg';

const CallToAction = () => {
	return (
	<section className="cta__bg">
		<div className='cta content-column'>
			<div className='cta__leftcolumn'>
				<h1 className='cta__title'>
					<span className='cta-title__line cta-title__firstline'>Little Lemon </span>
					<span className='cta-title__line cta-title__secondline'>Chicago</span>
				</h1>
				<p className='cta__paragraph'>
					We are a family ownded mediterranean restaurant,
					focused on traditional recipes served with a modern twist.
				</p>
				<Button href='booking' label='Reserve a table' />
			</div>
			<img className='cta__rightcolumn' alt='' src={ctaPicture} />
		</div>
	</section>
	);
}

export default CallToAction;