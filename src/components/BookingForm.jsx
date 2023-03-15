import { useState } from "react";
import './bookingform.css';

const availableTimes = [17, 18, 19, 20, 21, 22];
const occasionOptions = [
	{text: '--Please select an occasion--', value: ''},
	{text: 'Birthday', value: 'Birthday'},
	{text: 'Anniversary', value: 'Anniversary'}
];
const BookingForm = () => {
	const [formData, setFormData] = useState({
		date: '',
		time: availableTimes[0],
		guests: 1,
		occasion: ''
	});

	const handleSubmit = (e) => {
		e.preventDefault();
	}

	const handleInput = (e) => {
		console.log(e.target.value)
		setFormData({...formData, [e.target.name]: e.target.value})
	}

	return (
	<form className='form content-column' onSubmit={handleSubmit}>

		<label className='form__label' htmlFor="res-date" >Choose date</label>
		<input className='form__input' type='date' id='res-date' name='date' onChange={handleInput} value={formData.date} required />

		<label htmlFor="res-time" className='form__label'>Choose time</label>
		<select id='rest-time' className='form__input' name='time' value={formData.time} onChange={handleInput} required>
			{
				availableTimes.map(option => (
					<option key={option} value={option}>{option}:00</option>
				))
			}
		</select>

		<label htmlFor="guests" className='form__label'>Number of guests</label>
		<input type='number'  className='form__input' name='guests' min='1' max='10' onChange={handleInput} value={formData.guests} required />

		<label htmlFor="occasion" className='form__label'>Occasion</label>
		<select id='occasion' className='form__input' name='occasion' value={formData.occasion} onChange={handleInput} required>
			{
				occasionOptions.map(option => (
					<option key={option.value} value={option.value}>{option.text}</option>
				))
			}
		</select>

		<input type='submit' className='button' value='Make your reservation'/>
	</form>);
}

export default BookingForm;