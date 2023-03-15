import { useState } from "react";
import './bookingform.css';

const BookingForm = ({ availableTimes, dispatch, date, submitForm }) => {

	const occasionOptions = [
		'Birthday', 'Anniversary'
	];

	const guests = {
		min: 1,
		max: 10
	}
	const [formData, setFormData] = useState({
		dateIsValid: true,
		guestsIsValid: true,
		timeIsValid: true,
		occasionIsValid: true,
		date: date.toISOString().substring(0, 10),
		time: (availableTimes && availableTimes.length) ? availableTimes[0] : '',
		guests: 1,
		occasion: occasionOptions[0]
	});

	const handleDate = (e) => {
		const newDate = new Date(e.target.value);
		if (newDate < new Date()){
			setFormData({...formData, date: e.target.value, dateIsValid: false})
		} else {
			setFormData({...formData, date: e.target.value, dateIsValid: true})
		}
		dispatch({type: 'setDate', date: e.target.value});
	}

	const handleGuests = (e) => {
		const newGuests = e.target.value;
		if (newGuests < guests.min || newGuests > guests.max){
			setFormData({...formData, guests: e.target.value, guestsIsValid: false})
		} else {
			setFormData({...formData, guests: e.target.value, guestsIsValid: true})
		}
	}

	const handleTime = (e) => {
		const newTime = e.target.value;
		if (availableTimes.includes(newTime)){
			setFormData({...formData, time: e.target.value, timeIsValid: true})
		} else {
			setFormData({...formData, time: e.target.value, timeIsValid: false})
		}
	}

	const handleOccasion = (e) => {
		const newOccasion = e.target.value;
		if (occasionOptions.includes(newOccasion)){
			setFormData({...formData, occasion: e.target.value, occasionIsValid: true})
		} else {
			setFormData({...formData, occasion: e.target.value, occasionIsValid: false})
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		submitForm(new FormData(e.target))
	}

	return (
	<>
		<p className='form-heading content-column'>Fill to book</p>
		<form aria-label="Booking form" className='form content-column' onSubmit={handleSubmit}>

			<div className={(formData.dateIsValid ? "" : "form__invalid ") + "form__input-container"}>
				<label className='form__label' htmlFor="res-date" >Choose date *</label>
				<input className='form__input' type='date' id='res-date' name='date' onChange={handleDate} value={formData.date} required />
				{
					(!formData.dateIsValid) && <p className="form__hint">It's not yet possible to book for the past.</p>
				}
			</div>

			<div className="form__input-container">
				<label htmlFor="res-time"  className='form__label' >Choose time *</label>
				<select className='form__input' id='rest-time' name='time' value={formData.time} onChange={handleTime} required>
					<option key='emptytime' value="">Select One</option>
					{
						availableTimes && availableTimes.map(option => (
							<option key={option} value={option ? option : ''}>{option}</option>
						))
					}
				</select>
			</div>

			<div className={(formData.guestsIsValid ? "" : "form__invalid ") + "form__input-container"}>
				<label className='form__label' htmlFor="guests">Number of guests *</label>
				<input className='form__input' type='number' name='guests' min={guests.min} max={guests.max} onChange={handleGuests} value={formData.guests} required />
				{
					(!formData.guestsIsValid) && <p className="form__hint">At least one person, maximum 10 personns allowed</p>
				}
			</div>

			<div className="form__input-container">
				<label className='form__label' htmlFor="occasion" >Occasion *</label>
				<select id='occasion' className='form__input' name='occasion' value={formData.occasion} onChange={handleOccasion} required>
					<option key='emptyoccasion' value="">Select One</option>
					{
						occasionOptions.map(option => (
							<option key={option} value={option}>{option}</option>
						))
					}
				</select>
			</div>

			<input disabled={!formData.dateIsValid || !formData.guestsIsValid || !formData.timeIsValid || !formData.occasionIsValid} aria-label="On Click" className='button' type='submit' value='Make your reservation'/>
		</form>
	</>
	);
}

export default BookingForm;