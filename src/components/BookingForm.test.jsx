import BookingForm from "./BookingForm";
import { render, screen, fireEvent } from '@testing-library/react';
import { initializeTimes } from "../api/utils";
import { fetchAPI } from "../api/api.js";

test('Render the book form heading content', () => {
	const initTimes = initializeTimes(new Date());
	render(<BookingForm availableTimes={initTimes} dispatch={false} date={new Date()} />)
	const headingElement = screen.getByText('Fill to book');
	expect(headingElement).toBeInTheDocument();
	expect(headingElement).toHaveClass('form-heading');
})

test('check if input have correct attributes', () => {

	const initTimes = initializeTimes(new Date());
	render(<BookingForm availableTimes={initTimes} dispatch={false} date={new Date()} />)

	// date is type = date
	const dateinput = screen.getByLabelText('Choose date', {exact: false});
	expect(dateinput.getAttribute('type')).toEqual('date');

	// time is required
	const timeselect = screen.getByLabelText('Choose time', {exact:false});
	expect(timeselect.getAttribute('required')).toEqual("");

	// date is type = date + min max attributes
	const guestsinput = screen.getByLabelText('Number of guests', {exact: false});
	expect(guestsinput.getAttribute('type')).toEqual('number');
	expect(guestsinput.getAttribute('min')).toEqual('1');
	expect(guestsinput.getAttribute('max')).toEqual('10');

	// occasion is required
	const occasionselect = screen.getByLabelText('Occasion', {exact:false});
	expect(occasionselect.getAttribute('required')).toEqual("");

})

test ('unit tests to verify both the valid and invalid states for these functions', () => {

	const initTimes = initializeTimes(new Date());

	render(<BookingForm availableTimes={initTimes} dispatch={() => {}} date={new Date()} />)
	const submitButton = screen.getByRole('button');

	// input date
		// wrong
	const dateinput = screen.getByLabelText('Choose date', {exact: false});
	fireEvent.change(dateinput, { target: {value: '2023-02-28'} } )
	expect(submitButton).toHaveAttribute("disabled")
		// good
	fireEvent.change(dateinput, { target: {value: '2024-02-28'} } )
	expect(submitButton).not.toHaveAttribute("disabled")

	// input time
		//wrong
	const timeInput = screen.getByLabelText('Choose time', {exact: false});
	fireEvent.change(timeInput, { target: {value: '16:00'} } )
	expect(submitButton).toHaveAttribute("disabled")
		//good
	const avTimes = fetchAPI(new Date('2024-02-28'))
	fireEvent.change(timeInput, { target: {value: avTimes[0]} } )
	expect(submitButton).not.toHaveAttribute("disabled")

	// input guest
		//wrong
	const guestsInput = screen.getByLabelText('Number of guests', {exact: false});
	fireEvent.change(guestsInput, { target: { value: 100 } } )
	expect(submitButton).toHaveAttribute("disabled")
	fireEvent.change(guestsInput, { target: { value: 0 } } )
	expect(submitButton).toHaveAttribute("disabled")
		//good
	fireEvent.change(guestsInput, { target: { value: 9 } } )
	expect(submitButton).not.toHaveAttribute("disabled")

	// input occasion
		//wrong
	const occasInput = screen.getByLabelText('Occasion', {exact: false})
	fireEvent.change(occasInput, {target: {value: 'Christmas'}})
	expect(submitButton).toHaveAttribute('disabled')
	fireEvent.change(occasInput, {target: {value: ''}})
	expect(submitButton).toHaveAttribute('disabled')
		//good
	fireEvent.change(occasInput, {target: {value: 'Birthday'}})
	expect(submitButton).not.toHaveAttribute('disabled')
})