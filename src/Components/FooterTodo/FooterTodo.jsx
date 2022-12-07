import React, { useContext, useState } from 'react';
import {
	FooterTodoContainer,
	LabelTodoContainer,
	InputsTypeCheckbox,
	BtnEditAndDelete,
	TitleCompleteTodo,
} from './FooterTodoStyles';
import { DataContext } from '../../Context/ContextTodo';

const FooterTodo = () => {
	const [checkAll, setCheckAll] = useState(false);
	const [todos, setTodos] = useContext(DataContext);

	const handleCheckAll = () => {
		const newTodos = [...todos];
		newTodos.forEach((todo) => {
			todo.complete = !checkAll;
		});
		setTodos(newTodos);
		setCheckAll(!checkAll);
	};

	const deleteTodo = () => {
		const newTodos = todos.filter((todo) => {
			return todo.complete === false;
		});
		setTodos(newTodos);
		setCheckAll(false);
	};

	return (
		<>
			{todos.length === 0 ? (
				<TitleCompleteTodo>
					🙌 Felicitaciones... No tiene tareas pendientes 👌
				</TitleCompleteTodo>
			) : (
				<FooterTodoContainer>
					<LabelTodoContainer>
						<InputsTypeCheckbox
							type="checkbox"
							onClick={handleCheckAll}
							checked={checkAll}
						/>
						All
					</LabelTodoContainer>
					<p> tiene {todos.length} tareas hechas</p>
					<BtnEditAndDelete id="delete" onClick={deleteTodo}>
						Borrar
					</BtnEditAndDelete>
				</FooterTodoContainer>
			)}
		</>
	);
};

export default FooterTodo;
