import styled from 'styled-components';

export const Container = styled.section`
	min-height: 860px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	background-color: #fff;
	position: relative;
	background-color: #010606;
	padding: 30px 10px;
`;

export const Title = styled.h1`
	font-size: 40px;
	color: #010606;
	margin-bottom: 60px;
	color: #ffffff;

	@media (max-width: 480px) {
		font-size: 20px;
	}
`;

export const Wrapper = styled.div`
	//padding: 20px;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 30px;

	@media (min-width: 1860px) {
		flex-direction: row;
		justify-content: center;
		flex-wrap: wrap;
	}
`;
