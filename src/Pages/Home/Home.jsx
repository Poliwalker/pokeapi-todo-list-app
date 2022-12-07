import React from 'react';
import { GifHome, HomeContainer, HomeTitle, SubtitleHome } from './HomeStyles';

const Home = () => {
	return (
		<HomeContainer>
			<HomeTitle>Entrega N°2</HomeTitle>
			<SubtitleHome>Entrega Todo y PokeApi Pokedex</SubtitleHome>

			<GifHome
				src="https://acegif.com/wp-content/uploads/gifs/spongebob-rainbow-1.gif"
				alt=""
			/>
		</HomeContainer>
	);
};

export default Home;
