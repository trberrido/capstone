import HomePage from "./HomePage";
import BookingPage from './BookingPage';

import { useReducer } from "react";
import {Routes, Route } from 'react-router-dom'

import { fetchAPI } from "../api/api";

const Main = () => {

	const initializeTimes = () => fetchAPI(new Date());

	const updateTimes = (state, action) => {
		if (action.type === 'setDate'){
			return fetchAPI(new Date(action.date));
		}
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