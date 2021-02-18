import styled from 'styled-components';

export const Card = styled.div`
	width: 300px;
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
	display: block;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: ${({ open }) => (open ? '480px' : '0')};
	transition: all 0.5s ease;
	overflow: hidden;
`;

export const Wrapper = styled.div`
	display: inline-flex;
	align-items: center;
	width: 50%;
	justify-content: flex-start;
	flex-direction: column;
	padding: 10px;
`;
export const Name = styled.h3`
	padding-bottom: 20px;
	color: #01bf71;
	text-decoration: underline;
	font-size: 24px;
	font-weight: bold;
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	padding: 0;
	margin: 0;
	list-style: circle;
	list-style-position: inside;
`;

export const Skill = styled.li`
	padding: 0 5px 5px 5px;
	font-size: 12px;
	font-weight: 400;
	white-space: nowrap;
	overflow: hidden;
	text-decoration: none;
`;

export const Image = styled.img`
	max-width: 300px;
	width: 100%;
	height: auto;
	margin-top: 10px;
	object-fit: fill;
	cursor: pointer;
`;

//export const OverlayItem = styled.img`
//	width: 100%;
//	z-index: 999;
//`;
