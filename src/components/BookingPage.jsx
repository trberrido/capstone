import BookingForm from './BookingForm'
import './bookingpage.css'
import img from '../assets/restaurantchef.jpg';

const BookingPage = ({availableTimes, dispatch, date, submitForm}) => {
	return (<>
		<div className='booking-header'>
			<div className='content-column booking-content'>
				<h1 className='booking-header__title'>Reserve a table</h1>
				<img alt='' src={img} className='booking-header__img'/>
			</div>
		</div>
		<BookingForm dispatch={dispatch} submitForm={submitForm} date={date} availableTimes={availableTimes} />
	</>);
}

export default BookingPage;