import React from 'react';
import FooterTodo from '../../Components/FooterTodo/FooterTodo';
import FormTodo from '../../Components/FormTodo/FormTodo';
import ListTodo from '../../Components/ListToDo/ListTodo';
import { TodoPageContainer, TodoPageTitle } from './TodoPageStyle';

const TodoPage = () => {
	return (
		<TodoPageContainer style={{ color: 'white' }}>
			<TodoPageTitle>Todo List</TodoPageTitle>
			<FormTodo />
			<ListTodo />
			<FooterTodo />
		</TodoPageContainer>
	);
};

export default TodoPage;
