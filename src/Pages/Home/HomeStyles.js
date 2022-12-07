import styled from 'styled-components';
import { tablet } from '../../Media/Queries';

export const HomeContainer = styled.div`
	width: 600px;
	height: 500px;
	margin: 0 auto;
	background-color: #4646ff;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 30px;
	margin-top: 2rem;
	border-radius: 10px;
`;

export const HomeTitle = styled.h1`
	font-size: 40px;
	font-family: 'Poppins';
	color: #ffffff;
	margin-bottom: 20px;
`;

export const SubtitleHome = styled.h2`
	font-size: 20px;
	text-align: center;
`;

export const GifHome = styled.img`
	width: 300px;
	height: auto;
	margin-top: 50px;

	${tablet} {
		width: 80%;
	}
`;
