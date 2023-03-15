import './chicago.css';
import img from '../assets/mna.jpg';

const Chicago = () => {
	return (
		<section className='content-column'>
			<h1 className='chicago__title'>
				<span className='chicago-title__line chicago-title__firstline'>Little Lemon </span>
				<span className='chicago-title__line chicago-title__secondline'>Chicago</span>
			</h1>
			<div className='chicago-content'>
				<p className='chicago-paragraph'>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.<br />
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
				</p>
				<img className='chicago-img' alt='' src={img} />
			</div>
		</section>
	)
}

export default Chicago;