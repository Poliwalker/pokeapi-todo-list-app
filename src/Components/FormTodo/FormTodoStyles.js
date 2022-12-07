import styled from 'styled-components';

export const TodoPageForm = styled.form`
	width: 100%;
	height: 50px;
	margin: 20px 0;
	display: flex;
`;

export const TodoPageInput = styled.input`
	flex: 3;
	border: none;
	outline: none;
	border-bottom: 1px solid #555;
	margin: 0 5px;
`;

export const TodoPageButton = styled.button`
	flex: 1;
	background: #4747ff;
	color: white;
	letter-spacing: 2px;
	cursor: pointer;
`;
