import HomePage from "./HomePage";
import BookingPage from './BookingPage';

import { useEffect, useReducer, useState } from "react";
import {Routes, Route, useNavigate } from 'react-router-dom'

import { updateTimes, initializeTimes } from "../api/utils.js";
import { submitAPI } from '../api/api.js'
import NotFoundPage from "./NotFoundPage";
import ConfirmedBooking from "./ConfirmedBooking";

const Main = () => {

	const today = new Date();
	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(today));
	const navigate = useNavigate();

	const [isFormValide, setIsFormValide] = useState(false);

	const submitForm = (formData) => {
		setIsFormValide(submitAPI(formData))
	}

	useEffect(() => {
		if (isFormValide){
			setIsFormValide(false);
			navigate("/confirmation");
		}
	}, [isFormValide, navigate])

	return (<main>
		<Routes>
			<Route path="/" element={<HomePage />}></Route>
			<Route path="/booking" element={<BookingPage submitForm={submitForm} date={today} availableTimes={availableTimes} dispatch={dispatch} />}></Route>
			<Route path="/confirmation" element={<ConfirmedBooking />} />
			<Route path='*' element={<NotFoundPage />} />
		</Routes>
	</main>)
}

export default Main;