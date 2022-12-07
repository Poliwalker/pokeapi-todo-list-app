import React from 'react';
import {
	CardPokeButton,
	CardPokeContainer,
	CardPokeDataContainer,
	CardPokeName,
} from './CardPokeStyle';
import Type from '../Type/Type';
import { CardTypeContainerStyled } from './CardPokeStyle';
import ImgPoke from '../ImgPoke/ImgPoke';

const Pokemon = (props) => {
	const { name, sprites, types, order } = props;

	return (
		<CardPokeContainer>
			<ImgPoke image={sprites?.other.home.front_default} alt={name} />
			<CardPokeDataContainer>
				<CardPokeName>{name}</CardPokeName>
				<CardPokeButton>N°:{order}</CardPokeButton>
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
