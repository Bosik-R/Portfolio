import styled, { css } from 'styled-components';

import { ChevronCompactLeft } from '@styled-icons/bootstrap/ChevronCompactLeft';
import { ChevronCompactRight } from '@styled-icons/bootstrap/ChevronCompactRight';
import { Eye } from '@styled-icons/heroicons-solid/Eye';
import { Github } from '@styled-icons/boxicons-logos/Github';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

export const Card = styled.article`
	position: relative;
	max-width: 1024px;
	width: 100%;
	height: 520px;
	margin: 0 20px 20px 20px;
	display: flex;
	border: 20px solid #0b1122;
	border-radius: 10px;
	background-color: #0b1122;

	@media (max-width: 768px) {
		flex-direction: column;
		height: auto;
	}
`;

export const ImageWrapper = styled.div`
	order: ${({ invert }) => (invert ? '2' : '1')};
	position: relative;
	max-width: 480px;
	max-height: 480px;
	width: 100%;
	height: 100%;
	overflow: hidden;
	height: auto;
	object-fit: fill;
	margin: ${({ invert }) => (invert ? '0 0 0 20px ' : '0 20px 0 0')};
	border-radius: 10px;
	font-size: 0; // set on parent element to fix the 4px gap between div and img that represents whitespace for img

	@media (max-width: 768px) {
		margin: 0 0 20px 0;
		order: 1;
		max-width: 768px;
		max-height: 768px;
	}
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 10px;
	opacity: ${({ fade }) => (fade ? '0' : '1')};
	transition: all 0.5s linear;
`;
export const ButtonsWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;
const sharedStyles = css`
	position: absolute;
	background-color: #01bf71;
	transition: opacity 0.4s;
	height: 60px;
	width: 30px;
	display: grid;
	place-items: center;
	border: none;
	transform: translateY(-50%);

	&:disabled {
		opacity: 0;
	}

	@media (max-width: 450px) {
		height: 40px;
		width: 20px;
	}
`;
export const BackBtn = styled(ButtonBack)`
	${sharedStyles};
	top: 50%;
	left: 0;
	border-radius: 0px 5px 5px 0px;
`;

export const NextBtn = styled(ButtonNext)`
	${sharedStyles};
	top: 50%;
	right: 0;
	border-radius: 5px 0px 0px 5px;
`;

const sharedIconStyles = css`
	font-size: 40px;
	color: #ffffff;

	@media (max-width: 450px) {
		font-size: 15px;
	}
`;

export const ArrowIconLeft = styled(ChevronCompactLeft)`
	${sharedIconStyles};
`;

export const ArrowIconRight = styled(ChevronCompactRight)`
	${sharedIconStyles};
`;

export const CardContent = styled.div`
	order: ${({ invert }) => (invert ? '1' : '2')};
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 0 10px;
	background-color: #010606;
	color: #fff;
	border-radius: 10px;

	@media (max-width: 768px) {
		width: 100%;
		order: 2;
	}
`;

export const Title = styled.h2`
	font-size: 26px;
	padding: 20px 10px;
	letter-spacing: 2px;
`;

export const TechWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding: 12px 0;
	border-top: 1px solid #808080;
	border-bottom: 1px solid #808080;
`;

export const Tech = styled.span`
	font-size: 12px;
	font-weight: 500;
	letter-spacing: 1.5px;
	border: 1px solid #000000;
	border-radius: 5px;
	padding: 5px 10px;
	margin: 5px;
	color: #ffffff;
	background-color: #01bf71;

	@media (max-width: 768px) {
		font-size: 10px;
	}
`;

export const Description = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px 0;
	padding: 10px 15px 10px 10px;
	overflow-y: scroll;

	@media (min-width: 769px) {
		&::-webkit-scrollbar {
			width: 10px;
			height: 10px;
		}
		&::-webkit-scrollbar-thumb {
			background: #01bf71;
			border-radius: 15px;
		}
		&::-webkit-scrollbar-track {
			background: #0b1122;
			border-radius: 15px;
			box-shadow: inset 1px 0px 4px #f0f0f0;
		}
	}
`;

export const Paragraph = styled.p`
	text-indent: 20px;
	text-align: justify;
	text-justify: inter-word;

	@media (max-width: 768px) {
		font-size: 12px;
	}
`;

export const LinksWrapper = styled.div`
	padding: 10px 20px;
	margin: 20px 0;
	display: flex;

	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;
		align-items: center;
	}
`;

export const Link = styled.a`
	text-decoration: none;
	position: relative;
	padding: 10px 15px;
	margin-right: 20px;
	font-size: 14px;
	cursor: pointer;
	color: #ffffff;
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 10px;
	transition: all 0.2s ease;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		border-radius: 10px;
		background-color: rgba(0, 0, 0, 0.4);
	}

	&:hover {
		box-shadow: 4px 4px 10px -4px #ffffff;

		&::after {
			z-index: -1;
		}
	}

	&:active {
		color: #fff;
		top: 3px;
		left: 3px;
		box-shadow: 0px 0px 7px -4px #ffffff;
	}

	@media (max-width: 768px) {
		margin-bottom: 15px;

		&::after {
			z-index: -1;
		}
	}
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
