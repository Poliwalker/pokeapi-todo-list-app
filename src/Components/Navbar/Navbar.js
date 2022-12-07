import React from 'react';
import { useNavigate } from 'react-router-dom';
import LinkItems from '../LinkItems/LinkItems';
import {
	NavbarContainer,
	NavbarLogo,
	TitleStyled,
	LinkContainerStyled,
} from './NavbarStyles';

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<NavbarContainer>
			<NavbarLogo onClick={() => navigate('/')}>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"
					alt="Pokebola-logo"
				/>
				<TitleStyled>Entrega N°2</TitleStyled>
			</NavbarLogo>

			<LinkContainerStyled>
				<LinkItems to="/">Home</LinkItems>
				<LinkItems to="/todo">Todo</LinkItems>
				<LinkItems to="/pokedex">Pokedex</LinkItems>
			</LinkContainerStyled>
		</NavbarContainer>
	);
};

export default Navbar;
