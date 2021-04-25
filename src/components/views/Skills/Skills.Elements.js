import styled from 'styled-components';

export const Section = styled.section`
	min-height: 860px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #010606;
	position: relative;
	padding: 30px 0;
`;

export const Title = styled.h1`
	font-size: 40px;
	color: #fff;
	margin-bottom: 60px;

	@media (max-width: 480px) {
		font-size: 20px;
	}
`;

export const Wrapper = styled.div`
	max-width: 1024px;
	width: 95%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-start;
`;

export const FrontEnd = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 10px;
	margin-bottom: 30px;
`;

export const BackEnd = styled.div`
	width: 55%;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 10px;

	@media (max-width: 767px) {
		width: 100%;
		margin-bottom: 30px;
	}
`;

export const BuildManagement = styled.div`
	width: 42%;
	display: flex;
	flex-direction: column;
	background-color: #ffffff;
	border-radius: 10px;

	@media (max-width: 767px) {
		width: 100%;
		margin-bottom: 30px;
	}
`;

export const SkillTitle = styled.h2`
	font-weight: bold;
	padding: 15px;
	border-radius: 10px 10px 0 0;
	background-color: #01bf71;
	color: #ffffff;
	letter-spacing: 2px;
	text-shadow: 4px 4px 4px #0b1122;
`;

export const Underline = styled.div``;

export const SkillsWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 10px;
`;

export const Skill = styled.img`
	height: 70px;
	margin-right: 20px;
	margin-bottom: 20px;
	background-color: #ffffff;
`;

export const OverlayButton = styled.button`
	cursor: pointer;
	width: 150px;
	margin-top: 50px;
	transition: all 0.3s ease;
	border-radius: 10px;

	&:hover {
		transform: scale(1.05);
	}
`;

export const Certificat = styled.img`
	width: 100%;
	border-radius: inherit;
`;
