import React, { useState } from 'react';
import {
	TodoPageList,
	LabelTodo,
	InputsTypeCheckbox,
	BtnEditAndDelete,
} from './LinksTodoStyle';

const LinksTodo = ({ todo, id, checkComplete, handleEditTodos }) => {
	const [onEdit, setOnEdit] = useState(false);
	const [editValue, setEditValue] = useState(todo.name);

	const handleOnEdit = () => {
		setOnEdit(true);
	};

	const handleSave = (id) => {
		setOnEdit(false);
		if (editValue) {
			handleEditTodos(id, editValue);
		} else {
			setEditValue(todo.name);
		}
	};

	if (onEdit) {
		return (
			<TodoPageList>
				<InputsTypeCheckbox
					type="text"
					id="editValue"
					value={editValue}
					name="editValue"
					onChange={(e) => setEditValue(e.target.value)}
				/>

				<BtnEditAndDelete onClick={() => handleSave(id)}>Save</BtnEditAndDelete>
			</TodoPageList>
		);
	} else {
		return (
			<TodoPageList>
				<LabelTodo htmlFor={id} className={todo.complete ? 'active' : ''}>
					<InputsTypeCheckbox
						type="checkbox"
						id={id}
						checked={todo.complete}
						onChange={() => checkComplete(id)}
					/>
					{todo.name}
				</LabelTodo>
				<BtnEditAndDelete disabled={todo.complete} onClick={handleOnEdit}>
					Edit
				</BtnEditAndDelete>
			</TodoPageList>
		);
	}
};

export default LinksTodo;
