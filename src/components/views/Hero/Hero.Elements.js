import styled from 'styled-components';

export const Section = styled.section`
	background-color: #0c0c0c;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 30px;
	height: 100vh;
	position: relative;
	z-index: 1;

	@media (max-width: 767px) {
		padding: 20px;
	}

	::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.2) 0%,
				rgba(0, 0, 0, 0.6) 100%
			),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
		z-index: 2;
	}
`;

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: #232a34;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 900px;
	width: 100%;
	padding: 30px 20px;
	margin-top: 70px;
	z-index: 3;

	@media (max-width: 767px) {
		margin-top: 100px;
		padding: 30px 10px;
	}
`;

export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	flex-wrap: nowrap;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Title = styled.h1`
	color: #fff;
	font-size: 36px;
	position: relative;
	margin-right: 10px;

	@media (max-width: 768px) {
		font-size: 24px;
	}
`;

export const Glitch = styled.span`
	position: relative;
	color: #ffffff;
	font-size: 36px;
	font-weight: bold;
	text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
		-0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
		0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
	animation: glitch 2000ms infinite;

	@media (max-width: 768px) {
		font-size: 24px;
	}
`;

export const GlitchFront = styled.span`
	position: absolute;
	top: 0;
	right: 0;
	animation: glitch 2.5s infinite;
	clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
	transform: translate(-0.055em, -0.025em);
	opacity: 0.8;

	@media (max-width: 768px) {
		font-size: 24px;
	}

	@keyframes glitch {
		0% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
				-0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		14% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
				-0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		15% {
			text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
				0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
				-0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
		}
		49% {
			text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
				0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
				-0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
		}
		50% {
			text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
				0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
		}
		99% {
			text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
				0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
		}
		100% {
			text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
		}
	}
`;

export const GlitchBack = styled.span`
	animation: glitch 1575ms infinite;
	clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
	transform: translate(0.0125em, 0.025em);
	opacity: 0.8;
	position: absolute;
	top: 0;
	right: 0;

	@media (max-width: 768px) {
		font-size: 24px;
	}

	@keyframes glitch {
		0% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
				-0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		14% {
			text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
				-0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
				-0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
		}
		15% {
			text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
				0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
				-0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
		}
		49% {
			text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
				0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
				-0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
		}
		50% {
			text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
				0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
		}
		99% {
			text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
				0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75);
		}
		100% {
			text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
				-0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
				-0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
		}
	}
`;

export const BtnWrapper = styled.div`
	margin: 20px;
	display: flex;
	justify-content: center;
	align-items: flex-start;
`;

export const Lumin = styled.div`
	width: 100%;
	height: 2px;
	background-color: #01bf71;
	box-shadow: 0px 0px 10px 4px #01e087;
	margin: 20px 0 10px 0;
`;

export const Link = styled.a`
	text-decoration: none;
	position: relative;
	display: inline-block;
	text-align: center;
	width: 100px;
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
		font-size: 12px;
		margin-right: 10px;
		width: 80px;

		&::after {
			z-index: -1;
		}
	}
`;

export const ParagraphWrapper = styled.div`
	width: 100%;
	padding: 30px 10px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;

	@media (max-width: 767px) {
		font-size: 12px;
	}
`;

export const MyStory = styled.p`
	width: 50%;
	margin-bottom: 30px;
	color: #ffffff;
	text-indent: 20px;
	text-align: justify;
	text-justify: inter-word;

	@media (max-width: 767px) {
		width: 100%;
	}
`;

export const MyGool = styled.p`
	width: 50%;
	margin-bottom: 30px;
	color: #ffffff;
	align-self: flex-end;
	text-indent: 20px;
	text-align: justify;
	text-justify: inter-word;

	@media (max-width: 425px) {
		width: 100%;
	}
`;

export const TextColor = styled.span`
	color: #01fb71;
	font-weight: bolder;
`;

export const OverlayButton = styled.button`
	cursor: pointer;
	width: 150px;
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.1);
	}
`;

export const Certificat = styled.img`
	width: 100%;
`;
