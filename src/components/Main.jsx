import HomePage from "./HomePage";
import BookingPage from './BookingPage';

import { useReducer } from "react";
import {Routes, Route } from 'react-router-dom'

import { updateTimes, initializeTimes } from "../api/utils.js";

const Main = () => {

	const today = new Date();
	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(today));

	return (<main>
		<Routes>
			<Route path="/" element={<HomePage />}></Route>
			<Route path="/booking" element={<BookingPage date={today} availableTimes={availableTimes} dispatch={dispatch} />}></Route>
		</Routes>
	</main>)
}

export default Main;