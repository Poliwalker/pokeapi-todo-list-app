import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Search from '../../Components/PokeApi/SearchPoke/Search';
import {
	SearchPokemonRender,
	SearchPokemonContainer,
	SearchPokemonTitle,
} from './SearchPokemonStyles';
import Pokemon from '../../Components/PokeApi/CardPoke/CardPoke';
import Loader from '../../Components/PokeApi/LoaderPokemon/Loader';

const SearchPokemon = () => {
	const [pokemon, setPokemon] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [data, setData] = useState();
	const [error, setError] = useState(false);

	const SearchPokeSubmit = async (e, pokemon) => {
		e.preventDefault();

		setData(null);
		setError(false);
		setIsLoading(true);

		try {
			let selectedPokemon = pokemon.toLowerCase().trim();

			const { data } = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`
			);
			console.log(data);
			setData(data);
		} catch (error) {
			setError('Pokemon not found');
		}

		setIsLoading(false);
	};

	return (
		<SearchPokemonContainer>
			<SearchPokemonTitle>POKEDEX</SearchPokemonTitle>
			<Search SearchPokeSubmit={SearchPokeSubmit} />
			<SearchPokemonRender>
				{isLoading && <Loader />}
				{error && <h2 style={{ color: ' red' }}>{error}</h2>}
				{data && <Pokemon {...data} />}
			</SearchPokemonRender>
		</SearchPokemonContainer>
	);
};

export default SearchPokemon;
