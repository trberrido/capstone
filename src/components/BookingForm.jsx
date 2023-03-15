import { useState } from "react";
import './bookingform.css';

import { submitAPI } from '../api/api.js'

const BookingForm = ({ availableTimes, dispatch, date }) => {

	const occasionOptions = [
		'Birthday', 'Anniversary'
	];

	const [formData, setFormData] = useState({
		date: date.toISOString().substring(0, 10),
		time: (availableTimes && availableTimes.length) ? availableTimes[0] : '',
		guests: 1,
		occasion: occasionOptions[0]
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		submitAPI(new FormData(e.target))
	}

	const handleInput = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value})
		if (e.target.name === 'date'){
			dispatch({type: 'setDate', date: e.target.value});
		}
	}

	return (
	<>
		<p className='form-heading content-column'>Fill to book</p>
		<form aria-label="Booking form" className='form content-column' onSubmit={handleSubmit}>

			<div className="form__input-container">
				<label className='form__label' htmlFor="res-date" >Choose date *</label>
				<input className='form__input' type='date' id='res-date' name='date' onChange={handleInput} value={formData.date} required />
			</div>

			<div className="form__input-container">
				<label htmlFor="res-time"  className='form__label' >Choose time *</label>
				<select className='form__input' id='rest-time' name='time' value={formData.time} onChange={handleInput} required>
					{
						availableTimes && availableTimes.map(option => (
							<option key={option} value={option ? option : ''}>{option}:00</option>
						))
					}
				</select>
			</div>

			<div className="form__input-container">
				<label className='form__label' htmlFor="guests">Number of guests *</label>
				<input className='form__input' type='number' name='guests' min='1' max='10' onChange={handleInput} value={formData.guests} required />
			</div>

			<div className="form__input-container">
				<label className='form__label' htmlFor="occasion" >Occasion *</label>
				<select id='occasion' className='form__input' name='occasion' value={formData.occasion} onChange={handleInput} required>
					{
						occasionOptions.map(option => (
							<option key={option} value={option}>{option}</option>
						))
					}
				</select>
			</div>

			<input aria-label="On Click" className='button' type='submit' value='Make your reservation'/>
		</form>
	</>
	);
}

export default BookingForm;