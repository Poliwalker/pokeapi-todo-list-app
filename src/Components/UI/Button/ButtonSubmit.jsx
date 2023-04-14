import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
	background-color: #4747ff;
	color: #ffffff;
	width: 100px;
	height: 40px;
	font-weight: 700;
	border-radius: 5px;
	cursor: pointer;
`;

const ButtonSubmit = ({ children }) => {
	return <ButtonStyled>{children}</ButtonStyled>;
};

export default ButtonSubmit;
