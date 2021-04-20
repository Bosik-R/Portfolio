import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import * as S from './NavBar.Elements';

const NavBar = ({ toggle }) => {
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
			<S.Nav scrollNav={scrollNav}>
				<S.NavBarContainer>
					<S.NavLogo onClick={toggleHome}>Home</S.NavLogo>
					<S.MobileIcon onClick={toggle}>
						<FaBars />
					</S.MobileIcon>
					<S.NavMenu>
						<S.NavItem>
							<S.NavLinks
								to='my_work'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
							>
								my work
							</S.NavLinks>
						</S.NavItem>
						<S.NavItem>
							<S.NavLinks
								to='my_skills'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
							>
								my skills
							</S.NavLinks>
						</S.NavItem>
						<S.NavItem>
							<S.NavLinks
								to='contact'
								smooth={true}
								duration={500}
								spy={true}
								exact='true'
								offset={-80}
							>
								contact
							</S.NavLinks>
						</S.NavItem>
					</S.NavMenu>
				</S.NavBarContainer>
			</S.Nav>
		</>
	);
};

export default NavBar;
