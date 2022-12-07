import styled from 'styled-components';

export const TodoPageContainer = styled.div`
	max-width: 500px;
	width: 100%;
	min-height: 400px;
	box-shadow: 0 2px 6px #4747ff;
	margin: 50px auto;
	padding: 50px;
	font-family: 'poppins';

	@media (max-width: 400px) {
		padding: 10px;
	}
`;

export const TodoPageTitle = styled.h2`
	text-align: center;
	text-transform: uppercase;
	color: #4747ff;
	font-family: 'poppins', sans-serif;
	font-weight: 600;
	font-size: 45px;
`;

export const TodoPageList = styled.li`
	list-style: none;
	border: 1px solid #4747ff;
	padding: 10px;
	margin: 10px 0;
	display: flex;
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
	background: #ffa500;
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

export const FooterTodo = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;
`;
