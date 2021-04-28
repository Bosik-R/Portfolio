import styled from 'styled-components';

export const MainWrapper = styled.div`
	position: relative;
	background-color: #010606;
`;

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	padding-top: 150px;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	background-color: rgba(0, 0, 0, 0.9);
	z-index: ${({ overlay }) => (overlay ? '999' : '-1')};
	opacity: ${({ overlay }) => (overlay ? '1' : '0')};
	transition: all 0.6s ease;
`;

export const ImageWrapper = styled.div`
	position: sticky;
	margin-top: calc(${(props) => props.position}px + 20px);
	width: 60%;
	transform-origin: top;
	transform: ${({ overlay }) =>
		overlay ? 'rotateX(0deg)' : 'rotateX(-100deg)'};
	opacity: ${({ overlay }) => (overlay ? '1' : '0')};
	clip-path: ${({ overlay }) =>
		overlay
			? 'polygon(0 0, 100% 0, 100% 100%, 0 100%);'
			: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%);'};
	transition: all 0.3s linear;

	@media (max-width: 767px) {
		width: 90%;
		margin-top: calc(${(props) => props.position}px + 10px);
	}
`;

export const Info = styled.p`
	text-align: center;
	padding: 10px 20px;
	color: #01bf71;
`;

export const Image = styled.img`
	width: 100%;
`;
