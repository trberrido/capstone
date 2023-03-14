import "./specials.css"
import Button from "./Button";

import greekSalad from '../assets/greeksalad.jpg'
import lemonDessert from '../assets/lemondessert.jpg'
import bruschetta from '../assets/warm-bruschetta-1.jpg'

const RecipeCard = ({title, price, description, img}) => {
	return (
		<article class='recipe-card'>
			<div style={{backgroundImage: `url(${img})`}} class='recipe-card__img' />
			<div class='recipe-card__padding' >
				<div class='recipe-card__header'>
					<h2 class='recipe-card__title'>{title}</h2>
					<p class='recipe-card__price'>${price}</p>
				</div>
				<p class='recipe-card__description'>{description}</p>
			</div>
		</article>
	);
}

const Specials = () => {
	const recipes = [
		{
			title: 'Greek Salad',
			img: greekSalad,
			price: 12.99,
			description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
		},
		{
			title: 'Bruscheta',
			img: bruschetta,
			price: 5.99,
			description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
		},
		{
			title: 'Lemon desert',
			img: lemonDessert,
			price: 5.00,
			description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
		}
	];
	return (
		<section class='content-column'>
			<div class='specials__header'>
				<h1>This weeks specials!</h1>
				<Button href='/menu' label='Online Menu' />
			</div>
			<div class='recipes__container'>
				{
					recipes.map((recipe) => (
						<RecipeCard
							price={recipe.price}
							description={recipe.description}
							title={recipe.title}
							img={recipe.img}
						/>
					))
				}
			</div>
		</section>
	)
}

export default Specials;