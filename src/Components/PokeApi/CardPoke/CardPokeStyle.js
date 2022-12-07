import styled from 'styled-components';

export const CardPokeContainer = styled.div`
	width: 300px;
	height: 400px;
	margin: 20px;
	padding: 20px;
	background-color: #131415;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: 10px;
	border: 1px solid #fff;
`;

export const CardPokeNumberNameContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
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
	font-size: 30px;
	color: #ef3e33;
`;
export const CardPokeType = styled.h3`
	font-size: 15px;
`;

export const CardPokeButton = styled.button`
	padding: 5px;
	border: none;
	font-size: 18px;
	font-weight: 600;
	border-radius: 50px;
	background-color: #ef3e33;
	color: #fff;
`;

export const CardTypeContainerStyled = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
	& p {
		font-weight: 400;
		font-size: 18px;
		line-height: 17px;
		color: #7a7a7a;
	}
`;
