import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkItemsStyled = styled(NavLink)`
	font-size: 20px;
	line-height: 24px;
	color: #ffffff;
	text-decoration: none;
	&.active {
		color: #090909;
		background-color: #ffffff;
		padding: 0 10px;
		border-radius: 5px;
	}
`;
