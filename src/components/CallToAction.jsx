import Button from './Button';
import './calltoaction.css'
import ctaPicture from '../assets/restauranfood.jpg';

const CallToAction = () => {
	return (
	<section class="cta__bg">
		<div class='cta content-column'>
			<div class='cta__leftcolumn'>
				<h1 class='cta__title'>
					<span class='cta-title__line cta-title__firstline'>Little Lemon</span>
					<span class='cta-title__line cta-title__secondline'>Chicago</span>
				</h1>
				<p class='cta__paragraph'>
					We are a family ownded mediterranean restaurant,
					focused on traditional recipes served with a modern twist.
				</p>
				<Button href='book' label='Reserve a table' />
			</div>
			<img class='cta__rightcolumn' alt='' src={ctaPicture} />
		</div>
	</section>
	);
}

export default CallToAction;