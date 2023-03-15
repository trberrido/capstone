import Button from "./Button";

const ConfirmedBooking = () => {
	return (<>
		<div className="content-column">
			<h1 style={{margin: '5rem 0'}}>Thank you !</h1>
			<p style={{marginBottom: '5rem'}}>Your reservation is made !</p>
			<Button href="/" label="Back to home page" />
		</div>
	</>);
}

export default ConfirmedBooking;