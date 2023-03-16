import { updateTimes, initializeTimes } from "../api/utils.js";
import { fetchAPI } from "../api/api.js";

test("a unit test for the initializeTimes function to validate that it returns the correct expected value.", () => {
	// correct expected value == the return of fetchAPI
	const today = new Date();
	expect(initializeTimes(today)).toStrictEqual(fetchAPI(today))
})

test("test for the updateTimes function to validate that it returns the same value that is provided in the state", () => {

	// the same value that is provided in the state
	// i.e. initializeTimes()
	const today = new Date();
	const state = initializeTimes(today);
	const action = {
		type: 'setDate',
		date: today.toISOString().substring(0, 10)
	}
	expect(updateTimes(state, action)).toStrictEqual(initializeTimes(today));
})