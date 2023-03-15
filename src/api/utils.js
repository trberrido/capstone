import { fetchAPI } from "./api";

export const initializeTimes = (date) => fetchAPI(date);

export const updateTimes = (state, action) => {
	if (action.type === 'setDate'){
		return fetchAPI(new Date(action.date));
	}
	return state;
};