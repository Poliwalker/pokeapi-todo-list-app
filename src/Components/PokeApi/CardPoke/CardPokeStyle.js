import styled from 'styled-components';
import { POKEMON_TYPE_COLORS } from '../../../DataPoke/Colors';

export const CardPokeContainer = styled.div`
	width: 300px;
	height: 400px;
	margin: 20px;
	padding: 20px;
	background-color: ${({ type }) => POKEMON_TYPE_COLORS[type]};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: 10px;
`;

export const CardPokeDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const CardPokeImage = styled.img`
	width: 200px;
	height: 250px;
	border-radius: 10px;
`;

export const CardPokeName = styled.h2`
	font-size: 20px;
`;
export const CardPokeType = styled.h3`
	font-size: 15px;
`;

export const CardPokeButton = styled.button`
	width: 100px;
	height: 30px;
	border: none;
	border-radius: 5px;
	background-color: #fff;
`;

export const CardTypeContainerStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	& p {
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
		color: #686868;
	}
`;
