import BookingForm from "./BookingForm";
import { render, screen } from '@testing-library/react';

test('Render the book form heading content', () => {
	render(<BookingForm availableTimes={[1,2,3]}/>)
	const headingElement = screen.getByText('Fill to book');
	expect(headingElement).toBeInTheDocument();
})

test('Render the book form heading classes', () => {
	render(<BookingForm availableTimes={[1,2,3]}/>)
	const headingElement = screen.getByText('Fill to book');
	expect(headingElement).toHaveClass('form-heading');
})