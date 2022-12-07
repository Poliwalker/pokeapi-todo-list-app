import React from 'react';
import {
	CardPokeButton,
	CardPokeContainer,
	CardPokeDataContainer,
	CardPokeName,
	CardPokeNumberNameContainer,
} from './CardPokeStyle';
import Type from '../Type/Type';
import { CardTypeContainerStyled } from './CardPokeStyle';
import ImgPoke from '../ImgPoke/ImgPoke';

const Pokemon = (props) => {
	const { name, sprites, types, id } = props;

	return (
		<CardPokeContainer>
			<CardPokeNumberNameContainer>
				<CardPokeName>{name}</CardPokeName>
				<CardPokeButton>N°:{id}</CardPokeButton>
			</CardPokeNumberNameContainer>
			<ImgPoke image={sprites?.other.home.front_default} alt={name} />
			<CardPokeDataContainer>
				<CardTypeContainerStyled>
					<p>Tipo: </p>
					{types?.map((type) => (
						<Type key={type.slot} typeName={type.type.name} />
					))}
				</CardTypeContainerStyled>
			</CardPokeDataContainer>
		</CardPokeContainer>
	);
};

export default Pokemon;
