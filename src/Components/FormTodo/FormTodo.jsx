import React, { useContext, useState } from 'react';
import {
	TodoPageForm,
	TodoPageButton,
	TodoPageInput,
} from '../FormTodo/FormTodoStyles';
import { DataContext } from '../../Context/ContextTodo';

const FormTodo = () => {
	const [todos, setTodos] = useContext(DataContext);
	const [todoName, setTodoName] = useState('');

	const addTodo = (e) => {
		e.preventDefault();
		setTodos([...todos, { name: todoName, complete: false }]);
		setTodoName('');
	};
	return (
		<TodoPageForm onSubmit={addTodo}>
			<TodoPageInput
				type="text"
				placeholder="¿Qué tienes que hacer?"
				name="todo"
				required
				value={todoName}
				onChange={(e) => setTodoName(e.target.value)}
			/>
			<TodoPageButton type="submit">Crear</TodoPageButton>
		</TodoPageForm>
	);
};

export default FormTodo;
