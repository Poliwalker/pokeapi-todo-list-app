import { useSelector } from 'react-redux';
import { LinkItemsStyled } from './LinkItemsStyles';

const LinkItems = ({ to, children }) => {
	const todos = useSelector((state) => state.todos);

	return (
		<LinkItemsStyled to={to} task={todos.length}>
			{children}
		</LinkItemsStyled>
	);
};

export default LinkItems;
