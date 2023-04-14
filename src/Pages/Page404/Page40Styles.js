import styled from 'styled-components';
import { TiWarning } from 'react-icons/ti';

export const Container404 = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	margin-top: 50px;
`;

export const Photo404 = styled.img`
	width: calc(100%, 800px);
	max-width: 1500px;
	border-radius: 5px;
`;

export const Description404Container = styled.p`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const Description404 = styled.p`
	font-size: 40px;
	color: #4747ff;
	max-width: 700px;
`;

export const Icon404 = styled(TiWarning)`
	color: #ff511cd3;
	font-size: 50px;
`;
