import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const Nav = styled.nav`
	background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')};
	height: 80px;
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: -80px;
	font-size: 16px;
	position: sticky;
	top: 0;
	z-index: 10;
	transition: 0.8s all ease;

	@media (max-width: 767px) {
		height: 50px;
	}
`;

export const NavBarContainer = styled.div`
	max-width: 1100px;
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-between;
	z-index: 1;
	padding: 0 24px;
`;

export const NavLogo = styled.button`
	font-size: 24px;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
	background-color: inherit;
	cursor: pointer;
	color: #fff;
	outline-style: solid;
	outline-color: transparent;
	border: none;

	&:hover {
		color: #01bf71;
	}
`;

export const MobileIcon = styled.div`
	display: none;

	@media (max-width: 767px) {
		display: block;
		position: absolute;
		top: 0;
		right: 0;
		transform: translate(-100%, 60%);
		font-size: 20px;
		cursor: pointer;
		color: #fff;
	}
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;
	transition: opacity 0.5s ease;

	@media (max-width: 767px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
	height: 100%;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 16px;
	color: #fff;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid #01bf71;
	}

	&:hover {
		color: #01bf71;
	}
`;
