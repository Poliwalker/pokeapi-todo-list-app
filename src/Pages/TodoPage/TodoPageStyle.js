import styled from 'styled-components';
import { TiCancel } from 'react-icons/ti';

export const TodoPageContainer = styled.div`
	width: 80%;
	height: 80vh;
	min-height: 400px;
	box-shadow: 0 2px 6px #4747ff;
	margin: 3.5% auto;
	padding: 50px;
	font-family: 'poppins';
	background-color: #ffffff;
	display: flex;
	justify-content: space-around;

	@media (max-width: 400px) {
		padding: 10px;
	}
`;

export const FormContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 100px;

	& h2 {
		color: #4747ff;
		font-size: 2rem;
		font-weight: 700;
		font-family: 'poppins';
	}
`;

export const FormStyled = styled.form`
	padding: 20px;
`;

export const InputStyled = styled.input`
	padding: 0.4rem 1rem;
	border-radius: 5px;
	border: 1px solid #4747ff;
	color: #4747ff;

	&:focus {
		outline: none;
	}

	&::placeholder {
		color: #4747ff;
	}
`;

export const RenderTaskContainer = styled.div`
	background: url('https://external-preview.redd.it/PuaoGyhLB300wV7PcOQRTvCY55XhxceQFhCfLxQRQIY.jpg?auto=webp&s=135c56fc2a585257e9b38c7d8c1200c9e6d2b08f');
	width: 100%;
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	& h3 {
		color: #ffffff;
		font-size: 36px;
		background-color: #4747ff;
	}
`;

export const TaskContainer = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	list-style: none;
`;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const TaskStyled = styled.li`
	background-color: #4747ff;
	color: #ffffff;
	padding: 5px;
	border-radius: 5px;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

export const DeleteIcon = styled(TiCancel)`
	color: #ff511cd3;
	font-size: 1.5rem;
	cursor: pointer;
`;

export const QuantityTask = styled.p`
	color: #4747ff;
	background-color: #ffffff;
	font-size: 1rem;
	font-weight: 500;
	padding: 4px 15px;
	margin-top: 30px;
`;

export const ButtonDelete = styled.button`
	background-color: #4747ff;
	color: #ffffff;
	padding: 5px 10px;
	width: 200px;
	border-radius: 10px;
	cursor: pointer;
	visibility: ${(props) => (props.task ? 'visible' : 'hidden')};
`;
