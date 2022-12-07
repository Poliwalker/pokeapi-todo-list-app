import React, { useContext } from 'react';
import LinksTodo from '../ListItemsTodo/LinksTodo';
import { DataContext } from '../../Context/ContextTodo';

const ListTodo = () => {
	const [todos, setTodos] = useContext(DataContext);

	const switchComplete = (id) => {
		const newTodos = [...todos];
		newTodos.forEach((todo, index) => {
			if (index === id) {
				todo.complete = !todo.complete;
			}
		});
		setTodos(newTodos);
	};

	const handleEditTodos = (id, editValue) => {
		const newTodos = [...todos];
		newTodos.forEach((todo, index) => {
			if (index === id) {
				todo.name = editValue;
			}
		});
		setTodos(newTodos);
	};

	return (
		<ul>
			{todos.map((todo, index) => (
				<LinksTodo
					key={index}
					todo={todo}
					id={index}
					checkComplete={switchComplete}
					handleEditTodos={handleEditTodos}
				/>
			))}
		</ul>
	);
};

export default ListTodo;
