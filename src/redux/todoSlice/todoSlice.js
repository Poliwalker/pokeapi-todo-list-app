import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			const value = action.payload;
			const newsTodos = {
				name: value.toLowerCase().trim(),
				id: Date.now(),
				completed: false,
			};
			if (!value.length) {
				alert('ingresa una tarea');
			} else if (state.some((todo) => todo.name === value)) {
				alert('esa tarea ya existe');
			} else {
				state.push(newsTodos);
			}
		},
		removeTodo: (state, action) => {
			const name = action.payload.name.toLowerCase().trim();

			if (window.confirm(`¿Estas seguro de eliminar la tarea ${name}?`)) {
				return state.filter((todo) => todo.name !== name); // filtramos nuestro estado y retornamos todos los que no coincidan con el nombre de la tarea que queremos eliminar
			} else {
				return;
			}
		},
		removeAllTodos: () => {
			return initialState;
		},
	},
});

export default todoSlice.reducer;

export const { addTodo, removeTodo, removeAllTodos } = todoSlice.actions;
