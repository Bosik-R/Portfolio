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
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	padding: 40px 20px;

	@media (max-width: 768px) {
		order: 1;
		width: 100%;
		align-items: center;
		justify-content: flex-start;
		padding-bottom: 50px;
	}
`;

export const ImageWrapper = styled.div`
	width: 300px;
	height: auto;
	display: flex;
	position: relative;
	@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');

	@media (max-width: 425px) {
		width: 200px;
	}

	&::before {
		content: 'Tomasz';
		position: absolute;
		bottom: -60px;
		left: 15px;
		font-size: 60px;
		font-family: 'Cookie', cursive;

		@media (max-width: 768px) {
			font-size: 40px;
			bottom: -40px;
			left: 50px;
		}

		@media (max-width: 425px) {
			left: 10px;
		}
	}

	&::after {
		content: 'Rosik';
		position: absolute;
		bottom: -60px;
		right: 40px;
		font-size: 60px;
		font-family: 'Cookie', cursive;

		@media (max-width: 768px) {
			font-size: 40px;
			bottom: -40px;
			right: 76px;
		}

		@media (max-width: 425px) {
			right: 25px;
		}
	}
`;

export const Svg = styled.img`
	width: 100%;
`;

export const Image = styled.img`
	position: absolute;
	top: 77px;
	left: 77px;
	width: 142px;
	height: 153px;
	border-radius: 50%;

	@media (max-width: 425px) {
		top: 52%;
		left: 50%;
		width: 90px;
		height: 90px;
		transform: translate(-50%, -50%);
	}
`;
