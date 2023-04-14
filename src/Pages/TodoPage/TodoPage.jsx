import React, { useEffect, useState } from 'react';
import {
	ButtonContainer,
	ButtonDelete,
	DeleteIcon,
	FormContainer,
	FormStyled,
	InputStyled,
	QuantityTask,
	RenderTaskContainer,
	TaskContainer,
	TaskStyled,
	TodoPageContainer,
} from './TodoPageStyle';
import { useDispatch, useSelector } from 'react-redux';
import {
	addTodo,
	removeAllTodos,
	removeTodo,
} from '../../redux/todoSlice/todoSlice';
import ButtonSubmit from '../../Components/UI/Button/ButtonSubmit';

const TodoPage = () => {
	const todos = useSelector((state) => state.todos);
	const dispatch = useDispatch();
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(addTodo(value));
		setValue('');
	};

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<TodoPageContainer>
				<FormContainer className="form-task">
					<h2>Lista de tareas</h2>

					<FormStyled onSubmit={handleSubmit}>
						<InputStyled
							type="text"
							placeholder="mandate un recordatorio..."
							value={value}
							onChange={(e) => setValue(e.target.value)}
						/>
						<ButtonSubmit type="submit">Add todo</ButtonSubmit>
					</FormStyled>
				</FormContainer>
				<RenderTaskContainer>
					<TaskContainer>
						<h3>Esto es lo que tenes que hacer</h3>
						{todos.map((todo) => (
							<TaskStyled key={todo.id}>
								{todo.name}
								<DeleteIcon onClick={() => dispatch(removeTodo(todo))} />
							</TaskStyled>
						))}

						{todos.length > 0 && (
							<>
								<QuantityTask>usted tiene {todos.length} tareas</QuantityTask>
							</>
						)}
					</TaskContainer>
					<ButtonContainer>
						<ButtonDelete
							onClick={() => dispatch(removeAllTodos())}
							task={todos.length}
						>
							Delete Tasks
						</ButtonDelete>
					</ButtonContainer>
				</RenderTaskContainer>
			</TodoPageContainer>
		</>
	);
};

export default TodoPage;
