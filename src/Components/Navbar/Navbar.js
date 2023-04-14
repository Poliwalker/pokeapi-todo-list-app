import { useNavigate } from 'react-router-dom';
import LinkItems from '../LinkItems/LinkItems';
import {
	NavbarContainer,
	NavbarLogo,
	TitleStyled,
	LinkContainerStyled,
} from './NavbarStyles';
import { useSelector } from 'react-redux';

const Navbar = () => {
	const todos = useSelector((state) => state.todos);

	const navigate = useNavigate();
	return (
		<NavbarContainer>
			<NavbarLogo onClick={() => navigate('/')}>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"
					alt="Pokebola-logo"
				/>
				<TitleStyled>PokeApi-Todo</TitleStyled>
			</NavbarLogo>

			<LinkContainerStyled>
				<LinkItems to="/">Home</LinkItems>
				<LinkItems to="/todo">Todo ({todos.length})</LinkItems>
				<LinkItems to="/pokedex">Pokedex</LinkItems>
			</LinkContainerStyled>
		</NavbarContainer>
	);
};

export default Navbar;
