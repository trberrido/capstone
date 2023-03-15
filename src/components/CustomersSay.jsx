import './customerssay.css';
import sam from '../assets/sam.jpg'
import marcus from '../assets/marcus.jpg'
import vargas from '../assets/vargas.jpg'
import tania from '../assets/tania.jpg'

const Review = ({name, img, rating, comment}) => {
	const stars = [
		'☆☆☆☆☆',
		'★☆☆☆☆',
		'★★☆☆☆',
		'★★★☆☆',
		'★★★★☆',
		'★★★★★'
	];
	return (
		<article class='review-card'>
			<div class='review-card__padding'>
				<p class='review-card__rating'>{stars[rating]}</p>
				<div class='review-card__id'>
					<div class='review-card__img' style={{backgroundImage:`url(${img})`}}></div>
					<h2 class='review-card__name'>{name}</h2>
				</div>
				<p class='review-card__comment'>{comment}</p>
			</div>
		</article>
	);
}

const CustomersSay = () => {
	const reviews = [
		{
			name: 'Sam',
			img: sam,
			rating: 5,
			comment: 'If you\'re not afraid of being happy just go!'
		},
		{
			name: 'Marcus',
			img: marcus,
			rating: 0,
			comment: 'I didn\'t want to be happy'
		},
		{
			name: 'Vargas',
			img: vargas,
			rating: 1,
			comment: 'They were no burrito :('
		},
		{
			name: 'Tania',
			img: tania,
			rating: 5,
			comment: 'Found my roots thank to you Hadrian!'
		},

	];
	return (
	<section class='content-column'>
		<h1 class='testimonials__title'>Testimonials</h1>
		<div class='reviews-container'>
			{
				reviews.map(review => (
					<Review
						name={review.name}
						img={review.img}
						rating={review.rating}
						comment={review.comment}
					/>
				))
			}
		</div>
	</section>
	);
}

export default CustomersSay;