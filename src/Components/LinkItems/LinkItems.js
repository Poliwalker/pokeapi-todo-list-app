import React from 'react';
import { LinkItemsStyled } from './LinkItemsStyles';
import { useContext } from 'react';
import { DataContext } from '../../Context/ContextTodo';

const LinkItems = ({ to, children }) => {
	const [todos, setTodos] = useContext(DataContext);

	return (
		<LinkItemsStyled
			className={({ todos }) => (todos.complete ? 'active' : '')}
			to={to}
		>
			{children}
		</LinkItemsStyled>
	);
};

export default LinkItems;
