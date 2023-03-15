import './chicago.css';
import img from '../assets/mna.jpg';

const Chicago = () => {
	return (
		<section class='content-column'>
			<h1 class='chicago__title'>
				<span class='chicago-title__line chicago-title__firstline'>Little Lemon </span>
				<span class='chicago-title__line chicago-title__secondline'>Chicago</span>
			</h1>
			<div class='chicago-content'>
				<p class='chicago-paragraph'>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.<br />
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
				</p>
				<img class='chicago-img' alt='' src={img} />
			</div>
		</section>
	)
}

export default Chicago;