import styled from 'styled-components';

export const Card = styled.div`
	max-width: 300px;
	width: 100%;
	background-color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	margin: 0 15px 50px 15px;
`;

export const Icon = styled.img`
	height: 160px;
	width: 160px;
	margin-bottom: 10px;
`;

export const IconTitle = styled.button`
	width: 60%;
	text-align: center;
	font-size: 18px;
	margin-bottom: 15px;
	padding: 5px 20px;
	cursor: pointer;
	border-radius: 50px;
	background-color: ${({ open }) => (open ? '#010606' : '#10bf71')};
	color: #fff;

	&:hover {
		background-color: #010606;
		color: #fff;
	}
`;

export const Content = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	height: ${({ open }) => (open ? '450px' : '0')};
	transition: all 0.5s ease;
	overflow: hidden;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	margin: 20px 10px;
	width: 100%;
`;

export const SoftSkill = styled.div`
	width: 130px;
	height: 130px;
	padding: 5px;
	margin-bottom: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const SoftSkillImage = styled.img`
	width: 100px;
	height: 80px;
	margin-bottom: 10px;
`;

export const SoftSkillName = styled.h6`
	color: #01bf71;
	margin: 0;
	padding: 0;
	text-align: center;
`;
