import styled from 'styled-components';
import { tablet, mobile } from '../../Media/Queries';

export const NavbarContainer = styled.nav`
	width: 100%;
	height: 60px;
	background-color: #4646ff;
	border-bottom: grey;
	display: flex;
	justify-content: space-around;
`;

export const NavbarLogo = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	& img {
		margin-top: 13px;
		width: 50px;
		height: 50px;
		margin-right: 10px;
	}
`;

export const TitleStyled = styled.h2`
	margin: 0;
	font-weight: 700;
	font-size: 24px;
	line-height: 40px;
	color: white;
	${tablet} {
		display: none;
	}
`;

export const LinkContainerStyled = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 45px;
	${mobile} {
		gap: 20px;
	}
`;
