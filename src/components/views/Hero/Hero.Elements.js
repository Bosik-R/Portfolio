import styled from 'styled-components';
import { BsEyeSlash, BsEye } from 'react-icons/bs';

export const Container = styled.div`
	background-color: #0c0c0c;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: 100vh;
	position: relative;
	z-index: 1;

	@media (max-width: 767px) {
		padding: 0 15px;
	}

	@media (max-width: 425px) {
		padding: 0 5px;
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
	padding: 8px 24px;
	z-index: 3;

	@media (max-width: 767px) {
		padding: 8px 12px;
	}

	@media (max-width: 425px) {
		padding: 0 6px;
	}
`;

export const Title = styled.h1`
	width: 100%;
	color: #fff;
	font-size: 48px;
	text-align: left;

	@media (max-width: 768px) {
		font-size: 32px;
	}

	@media (max-width: 425px) {
		font-size: 20px;
	}
`;

export const Paragraph = styled.p`
	margin-top: 24px;
	color: #fff;
	font-size: 24px;
	text-align: center;
	max-width: 600px;

	@media (max-width: 768px) {
		font-size: 18px;
	}

	@media (max-width: 480px) {
		font-size: 12px;
	}
`;

export const Span = styled.span`
	text-transform: uppercase;
	font-size: 26px;
	font-weight: bold;
	padding-left: 10px;
	background: #ffffff;
	background: linear-gradient(to right, #ffffff 0%, #ff2200 70%);
	background-clip: text;
	background: -webkit-linear-gradient(to right, #ffffff 0%, #ff2200 70%);
	background: -moz-linear-gradient(to right, #ffffff 0%, #ff2200 70%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	@media (max-width: 767px) {
		font-size: 20px;
	}

	@media (max-width: 425px) {
		font-size: 16px;
	}
`;

export const BtnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-self: flex-end;
	margin-top: 32px;
	padding-right: 32px;

	@media (max-width: 767px) {
		padding-right: 20px;
	}

	@media (max-width: 425px) {
		padding-right: 12px;
	}
`;

export const Button = styled.button`
	width: ${({ isHover }) => (isHover ? '180px' : '60px')};
	height: ${({ hiden }) => (hiden ? '0px' : '60px')};
	opacity: ${({ hiden }) => (hiden ? '0' : '1')};
	border-radius: 50px;
	background-color: #01bf71;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 18px;
	overflow: hidden;
	position: relative;
	transition: all 0.5s ease;

	@media (max-width: 768px) {
		width: 180px;
	}
`;

export const BtnContent = styled.div`
	width: ${({ isHover }) => (isHover ? '100px' : '0px')};
	font-size: ${({ isHover }) => (isHover ? '16px' : '0px')};
	margin-right: ${({ isHover }) => (isHover ? '8px' : '0px')};
	transition: all 0.5s ease;
	overflow: hidden;
	color: #ffffff;

	@media (max-width: 768px) {
		width: 100px;
		font-size: 16px;
	}
`;

export const IconHidenWrapper = styled.div`
	position: absolute;
	top: 15px;
	right: 15px;
	transform: scale(${({ isHover }) => (isHover ? '0' : '1')});
	transition: all 0.5s ease;

	@media (max-width: 768px) {
		opacity: 0;
	}
`;

export const EyeHiden = styled(BsEyeSlash)`
	font-size: 26px;
	color: #ffffff;
`;

export const IconVisibleWrapper = styled.div`
	z-index: 2;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	right: ${({ isHover }) => (isHover ? '16px' : '-20px')};
	opacity: ${({ isHover }) => (isHover ? '1' : '0')};
	transition: all 0.5s ease;
	transition-delay: 0.3s;

	@media (max-width: 768px) {
		right: 16px;
		opacity: 1;
	}
`;

export const EyeVisible = styled(BsEye)`
	font-size: 26px;
	color: #ffffff;
`;
