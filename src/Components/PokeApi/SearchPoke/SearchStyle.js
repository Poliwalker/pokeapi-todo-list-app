import styled from 'styled-components';

export const SearchPokemonForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SearchPokemonInput = styled.input`
	width: 300px;
	height: 40px;
	margin: 20px 0;
	padding: 0 10px;
	border: none;
	border-radius: 5px;
	font-size: 1rem;
	font-weight: 700;
	color: #131415;
	&:focus {
		outline: none;
	}
`;
