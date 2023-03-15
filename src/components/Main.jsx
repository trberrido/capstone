import HomePage from "./HomePage";
import BookingPage from './BookingPage';

import { useReducer } from "react";
import {Routes, Route } from 'react-router-dom'

const Main = () => {
	const initializeTimes = () => [17, 18, 19, 20, 21, 22];
	const updateTimes = (state, action) => {
		/* if (action.type === 'addDate')
			return (null)
		if (action.type === 'removeTime')
			return (null) */
		return state;
	};
	const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
	return (<main>
		<Routes>
			<Route path="/" element={<HomePage />}></Route>
			<Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}></Route>
		</Routes>
	</main>)
}

export default Main;