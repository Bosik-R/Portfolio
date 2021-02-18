import styled from 'styled-components';
import { SiHeroku, SiGithub } from 'react-icons/si';

export const Container = styled.div`
	min-height: 860px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	background-color: #fff;
`;

export const Title = styled.h1`
	font-size: 40px;
	color: #010606;
	margin-bottom: 60px;
	margin-top: 30px;

	@media (max-width: 480px) {
		font-size: 20px;
	}
`;

export const Wrapper = styled.div`
	max-width: 1280px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
`;

export const Card = styled.div`
	max-width: 580px;
	width: 100%;
	margin: 30px;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: nowrap;
	background-color: #010606;
	border-radius: 10px;

	@media (max-width: 767px) {
		flex-direction: column;
		align-items: center;
		//margin: 20px 5px;
	}
`;

export const LeftWrapper = styled.div`
	width: 38%;
	//width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	padding: 25px 15px;

	@media (max-width: 767px) {
		width: 98%;
		flex-direction: column;
		align-items: center;
	}
`;

export const Image = styled.img`
	max-width: 200px;
	width: 100%;
	height: auto;
	object-fit: fill;
	margin-bottom: 10px;
	border-radius: 10px;

	@media (max-width: 767px) {
		max-width: 350px;
	}

	@media (max-width: 425px) {
		max-width: 300px;
	}
`;

export const LinksWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

export const HerokuLink = styled.a``;

export const HerokuIcon = styled(SiHeroku)`
	width: 35px;
	height: 35px;
	color: #79589f;
	margin: 10px;

	&:hover {
		color: #01fb71;
	}
`;
export const GitLink = styled.a``;

export const GitIcon = styled(SiGithub)`
	width: 35px;
	height: 35px;
	color: #fff;
	margin: 10px;

	&:hover {
		color: #01fb71;
	}
`;

export const RightWrapper = styled.div`
	width: 58%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	color: #fff;
	padding: 10px 15px;
	//margin-left: 10px;

	@media (max-width: 767px) {
		width: 98%;
	}
`;

export const ContentTitle = styled.h4`
	width: 100%;
	font-size: 18px;
	padding-bottom: 10px;
	margin-bottom: 40px;
	text-align: center;
	border-bottom: 2px solid hsl(218, 17%, 62%);
`;

export const Content = styled.div`
	padding: 15px;

	@media (max-width: 425px) {
		padding: 10px;
	}
`;

export const Paragraph = styled.p`
	padding-bottom: 10px;
	margin-bottom: 10px;
	text-indent: 20px;
	text-align: justify;
	text-justify: inter-word;
	border-bottom: 1px dotted hsl(218, 17%, 62%);
`;
