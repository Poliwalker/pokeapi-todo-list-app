import styled from 'styled-components';
import { tablet } from '../../Media/Queries';

export const HomeContainer = styled.div`
	width: 80%;
	height: 80vh;
	min-height: 400px;
	margin: 3.5% auto;
	background: url('https://www.egames.news/__export/1671210121885/sites/debate/img/2022/12/16/ash-ketchum-pokxmon_crop1671210018741.jpg_1602285434.jpg');
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px;
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
	background-color: #4747ff;
	color: #ffffff;
	padding: 10px;
	border-radius: 10px;
`;
