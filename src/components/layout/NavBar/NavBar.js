import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavBarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
} from './NavBar.Elements';

const NavBar = ({ toggle, visible }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<Nav scrollNav={scrollNav}>
				<NavBarContainer>
					<NavLogo onClick={toggleHome}>Portfolio</NavLogo>
					<MobileIcon onClick={toggle}>
						<FaBars />
					</MobileIcon>
					<NavMenu visible={visible}>
						<NavItem>
							<NavLinks
								to='who_am_I'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
							>
								who am i
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to='my_skills'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
							>
								my skills
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to='my_work'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
							>
								my work
							</NavLinks>
						</NavItem>
						<NavItem>
							<NavLinks
								to='contact'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
							>
								contact
							</NavLinks>
						</NavItem>
					</NavMenu>
				</NavBarContainer>
			</Nav>
		</>
	);
};

export default NavBar;
