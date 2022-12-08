import styled from 'styled-components';
import { mobile } from '../../Media/Queries';

export const SearchPokemonRender = styled.div`
	display: flex;
	justify-content: center;
`;

export const SearchPokemonContainer = styled.div`
	padding: 30px 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SearchPokemonTitle = styled.h2`
	font-size: 2rem;
	font-weight: 700;
	color: #fff;
	background-color: red;
	padding: 1rem 4rem;
	border-radius: 10px;
	${mobile} {
		padding: 1rem 2rem;
	}
`;
