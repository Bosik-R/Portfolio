import styled from 'styled-components';

export const Container = styled.section`
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	height: 860px;
	margin: 50px 0;
	padding: 30px 10px;
`;

export const Title = styled.h1`
	font-size: 40px;
	color: #fff;
	margin-bottom: 60px;

	@media (max-width: 480px) {
		font-size: 20px;
	}
`;

export const FormElement = styled.form`
	max-width: 600px;
	width: 100%;
	background-color: inherit;
	//margin: 20px;
	padding: 20px 0;
	border: 10px solid #01bf71;
	border-radius: 50px;
`;

export const MessageStatus = styled.p`
	font-size: 24px;
	padding: 20px;
	text-align: center;
	width: 100%;
	color: ${({ send }) => (send ? '#01bf71' : '#db0202')};

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
