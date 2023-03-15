import './button.css';
import { Link } from 'react-router-dom';

const Button = ({href, label}) => {
	return (
	<Link className='button' to={href}>
		{label}
	</Link>);
}

export default Button;