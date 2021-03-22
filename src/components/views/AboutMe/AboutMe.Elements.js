import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	min-height: 860px;
	display: flex;
	color: #010606;
	background-color: #f9f9f9;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 30px 20px;
`;

export const Title = styled.h1`
	font-weight: bold;
	font-size: 60px;
	margin-bottom: 80px;

	@media (max-width: 768px) {
		font-size: 40px;
	}

	@media (max-width: 425px) {
		font-size: 25px;
	}
`;

export const Wrapper = styled.div`
	max-width: 1200px;
	width: 100%;
	border: 2px solid #010606;
	border-radius: 50px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	margin: 0 20px;
	box-shadow: 7px 12px 15px 5px #555555;

	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: flex-start;
	}
`;

export const LeftColumn = styled.div`
	width: 65%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 20px;

	@media (max-width: 768px) {
		order: 2;
		width: 100%;
	}
`;

export const Subtitle = styled.h2`
	font-weight: bold;
	text-indent: 30px;
	font-size: 30px;
	margin-bottom: 50px;

	@media (max-width: 768px) {
		font-size: 24px;
	}

	@media (max-width: 425px) {
		font-size: 18px;
	}
`;

export const Paragraph = styled.p`
	font-size: 24px;
	text-indent: 20px;
	margin-bottom: 20px;
	text-align: justify;
	text-justify: inter-word;

	@media (max-width: 768px) {
		font-size: 18px;
	}

	@media (max-width: 425px) {
		font-size: 12px;
	}
`;

export const RightColumn = styled.div`
	width: 35%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;

	@media (max-width: 768px) {
		order: 1;
		width: 100%;
		align-items: center;
		justify-content: flex-start;
		padding-bottom: 150px;
	}
`;

export const ImageWrapper = styled.div`
	max-width: 400px;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	padding: 40px 20px;
	@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');

	&::before {
		content: 'Tomasz Rosik';
		position: absolute;
		bottom: -80px;
		font-size: 60px;
		font-family: 'Cookie', cursive;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		width: 100px;
		height: 30px;
		border-radius: 50%;
		background-color: #e1e1e1;
		z-index: 1;
	}
`;

export const Image = styled.img`
	width: 200px;
	height: auto;
	border-radius: 50%;
	border: 10px solid #01bf71;
	z-index: 2;
`;
