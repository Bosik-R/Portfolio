import styled from 'styled-components';

import { ChevronCompactLeft } from '@styled-icons/bootstrap/ChevronCompactLeft';
import { ChevronCompactRight } from '@styled-icons/bootstrap/ChevronCompactRight';
import { Close } from '@styled-icons/evaicons-solid/Close';
import { Eye } from '@styled-icons/heroicons-solid/Eye';
import { Github } from '@styled-icons/boxicons-logos/Github';

export const Container = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.8);
`;

export const Card = styled.div`
	position: relative;
	max-width: 900px;
	width: 90%;
	margin: 20px;
	display: flex;
	//align-items: flex-start;
	z-index: 2;
	background-color: #ffffff;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const CloseIcon = styled(Close)`
	width: 25px;
	font-weight: 600;
	position: absolute;
	top: 5px;
	right: 5px;
	color: #000000;
	cursor: pointer;

	@media (max-width: 768px) {
		width: 25px;
		background-color: #ffffff;
		padding: 2px;
		z-index: 1;
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	width: 50%;
	object-fit: scale-down;
	font-size: 0; // set on parent element to fix the 4px gap between div and img that represents whitespace for img

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	//object-fit: fill;
`;

export const ArrowIconLeft = styled(ChevronCompactLeft)`
	position: absolute;
	top: 50%;
	left: 0;
	height: 60px;
	width: 20px;
	color: #ffffff;
	background-color: #01bf71;
	transform: translateY(-50%);
	cursor: pointer;
`;
export const ArrowIconRight = styled(ChevronCompactRight)`
	position: absolute;
	background-color: #01bf71;
	top: 50%;
	right: 0;
	height: 60px;
	width: 20px;
	color: #ffffff;
	transform: translateY(-50%);
	cursor: pointer;
`;

export const CardContent = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 0 10px;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const Title = styled.h2`
	font-size: 26px;
	padding: 5px 10px;
`;

export const TechWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding: 5px 10px;
	margin: 20px 0;
	border-bottom: 1px solid #808080;
	border-top: 1px solid #808080;
`;

export const Tech = styled.span`
	font-size: 10px;
	font-weight: 500;
	letter-spacing: 1.5px;
	border: 1px solid #000000;
	padding: 5px 10px;
	margin: 5px 10px;
	color: #ffffff;
	background-color: #01bf71;
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 0;
`;

export const Paragraph = styled.p`
	padding: 0 10px 10px 0;
	text-indent: 15px;
	text-align: justify;
	text-justify: inter-word;
`;

export const LinksWrapper = styled.div`
	padding: 10px 20px;
	margin-bottom: 50px;
`;

export const Link = styled.a`
	text-decoration: none;
	border: 1px solid black;
	padding: 10px 15px;
	margin-right: 20px;
	font-size: 12px;
	cursor: pointer;
	color: #010606;
`;

export const Live = styled(Eye)`
	height: 20px;
	color: #01bf71;
	margin-right: 10px;
`;

export const GitIcon = styled(Github)`
	height: 20px;
	color: #01bf71;
	margin-right: 10px;
`;
