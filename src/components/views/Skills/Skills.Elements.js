import styled from 'styled-components';

export const Container = styled.div`
	min-height: 860px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #010606;
	position: relative;
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
	max-width: 1000px;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
`;

export const Overlay = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: grid;
	place-content: center;
	background-color: rgba(0, 0, 0, 0.86);
`;

export const OverlayItem = styled.img`
	width: 100%;
	z-index: 10;
`;
