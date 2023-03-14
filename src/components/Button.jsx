import './button.css';

const Button = ({href, label}) => {
	return (
	<a class='button' href={href}>
		{label}
	</a>);
}

export default Button;