import BookingForm from "./BookingForm";
import { render, screen } from '@testing-library/react';

test('Render the book form heading content', () => {
	render(<BookingForm availableTimes={false} dispatch={false} date={new Date()} />)
	const headingElement = screen.getByText('Fill to book');
	expect(headingElement).toBeInTheDocument();
})

test('Render the book form heading classes', () => {
	render(<BookingForm availableTimes={false} dispatch={false} date={new Date()} />)
	const headingElement = screen.getByText('Fill to book');
	expect(headingElement).toHaveClass('form-heading');
})