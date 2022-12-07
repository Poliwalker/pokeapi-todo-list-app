import styled from 'styled-components';

export const LabelTodoContainer = styled.label`
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
	background: red;
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

export const FooterTodoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
`;

export const TitleCompleteTodo = styled.h2`
	text-align: center;
	font-family: 'Poppins';
	font-size: 25px;
`;
