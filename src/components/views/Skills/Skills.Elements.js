import styled from 'styled-components';

export const Section = styled.section`
	min-height: 860px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
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

export const CategoryCard = styled.div`
	display: flex;
	flex-direction: column;
	width: ${(props) => props.width};
	background-color: #ffffff;
	border-radius: 10px;
	margin-bottom: 30px;

	@media (max-width: 767px) {
		width: 100%;
	}
`;

export const CategoryTitle = styled.h2`
	font-weight: bold;
	padding: 15px;
	border-radius: 10px 10px 0 0;
	background-color: #01bf71;
	color: #ffffff;
	letter-spacing: 2px;
	text-shadow: 4px 4px 4px #0b1122;
`;

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
	max-width: 450px;
	width: 95%;
	margin-top: 50px;
	border: none;
	border-radius: 10px;
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.05);
	}
`;

export const Certificat = styled.img`
	width: 100%;
	border-radius: inherit;
`;
