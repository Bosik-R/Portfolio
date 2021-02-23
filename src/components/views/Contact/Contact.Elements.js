import styled from 'styled-components';

export const Container = styled.div`
	color: #fff;
	background-color: #010606;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 860px;
	padding: 0 20px;
`;

export const FormElement = styled.form`
	max-width: 600px;
	width: 100%;
	background-color: inherit;
	margin: 20px;
	padding: 20px 0;
	border: 10px solid #01bf71;
	border-radius: 50px;
`;

export const MessageSucces = styled.p`
	font-size: ${({ message }) => (message ? '24px' : '0px')};
	opacity: ${({ message }) => (message ? '1' : '0')};
	padding: 20px;
	color: #01bf71;
	text-align: center;
	width: 100%;
	transition: all 0.5s ease-in-out;

	@media (max-width: 767px) {
		font-size: 24px;
		padding: 15px 0;
	}

	@media (max-width: 425px) {
		font-size: 16px;
		padding: 10px 0;
	}
`;

export const Row = styled.div`
	width: 100%;
	padding: 20px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const LabelElement = styled.label`
	font-size: 16px;
	width: 70%;
	text-align: left;
	padding-bottom: 10px;

	@media (max-width: 768px) {
		width: 80%;
	}

	@media (max-width: 425px) {
		width: 90%;
	}
`;

export const InputElement = styled.input`
	width: 70%;
	height: 40px;
	border: none;
	padding: 0 15px;

	@media (max-width: 768px) {
		width: 80%;
	}

	@media (max-width: 425px) {
		width: 90%;
	}


	&:hover,
	::focus {
		border-bottom: 2px solid #01bf71;
	}

	&::placeholder {
		color: #01bf71;
		opacity: 0.6;
	}
`;

export const TextareaElement = styled.textarea`
	width: 70%;
	min-height: 100px;
	border: none;
	padding: 5px 15px;

	@media (max-width: 768px) {
		width: 80%;
	}

	@media (max-width: 425px) {
		width: 90%;
	}

	&:hover,
	::focus {
		border-bottom: 2px solid #01bf71;
	}
`;

export const SubmitBtn = styled.button`
	width: 70%;
	height: 60px;
	border: none;
	border-radius: 50px;
	background-color: #01bf71;
	color: #fff;
	text-transform: uppercase;
	font-size: 22px;
	font-weight: bold;
	letter-spacing: 4px;
	padding: 5px 20px;
	cursor: pointer;

	@media (max-width: 768px) {
		width: 80%;
		font-size: 18px;
	}

	@media (max-width: 425px) {
		width: 90%;
	}
`;
