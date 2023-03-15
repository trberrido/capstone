import Button from "./Button";

const NotFoundPage = () => {
	return (<>
		<div className="content-column">
			<h1 style={{marginBottom: '3rem'}}>Error 404</h1>
			<Button href="/" label="Back to home page" />
		</div>
	</>)
}

export default NotFoundPage;