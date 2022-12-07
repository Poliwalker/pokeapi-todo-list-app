import React from 'react';
import { LinkItemsStyled } from './LinkItemsStyles';
import { useContext } from 'react';
import { DataContext } from '../../Context/ContextTodo';

const LinkItems = ({ to, children }) => {
	const [todos, setTodos] = useContext(DataContext);

	const handleColor = () => {
		if (todos.complete) {
			return 'pending';
		}
	};

	return (
		<LinkItemsStyled
			handleColor={handleColor}
			className={({ todos }) => (todos.complete ? 'active' : 'pending')}
			to={to}
		>
			{children}
		</LinkItemsStyled>
	);
};

export default LinkItems;
