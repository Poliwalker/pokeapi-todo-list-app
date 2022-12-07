import React from 'react';
import { SearchPokemonForm, SearchPokemonInput } from './SearchStyle';
import { useState } from 'react';

const Search = ({ SearchPokeSubmit }) => {
	const [pokemon, setPokemon] = useState('');

	return (
		<SearchPokemonForm
			onSubmit={(e) => {
				SearchPokeSubmit(e, pokemon);
				setPokemon('');
			}}
		>
			<SearchPokemonInput
				placeholder="Buscá tu pokemon..."
				value={pokemon}
				onChange={(e) => setPokemon(e.target.value)}
			/>
		</SearchPokemonForm>
	);
};

export default Search;
