import React, { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const todosStore = JSON.parse(localStorage.getItem('todosStore'));
		if (todosStore) setTodos(todosStore);
	}, []);

	useEffect(() => {
		localStorage.setItem('todosStore', JSON.stringify(todos));
	}, [todos]);

	return (
		<DataContext.Provider value={[todos, setTodos]}>
			{props.children}
		</DataContext.Provider>
	);
};
