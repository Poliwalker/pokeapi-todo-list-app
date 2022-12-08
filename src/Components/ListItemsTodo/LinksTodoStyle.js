import styled from 'styled-components';

export const TodoPageList = styled.li`
	list-style: none;
	border: 1px solid #4747ff;
	padding: 10px;
	margin: 10px 0;
	display: flex;
	overflow: auto;
	justify-content: space-between;
	align-items: center;
	text-transform: capitalize;
	& .active {
		opacity: 0.5;
		text-decoration: line-through;
	}
`;

export const LabelTodo = styled.label`
	cursor: pointer;

	& .active {
		opacity: 0.5;
		text-decoration: line-through;
	}
`;

export const BtnEditAndDelete = styled.button`
	border: none;
	outline: none;
	color: #ffffff;
	background: #4747ff;
	padding: 5px 15px;
	cursor: pointer;

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	& #delete {
		background-color: crimson;
	}
`;

export const InputsTypeCheckbox = styled.input`
	margin-right: 5px;
	transform: translateY(1px);
`;
