import React, { useState } from 'react';
import Sidebar from '../Siedebar/Sidebar';
import NavBar from '../NavBar/NavBar';
import Hero from '../../views/Hero/Hero';
import Skills from '../../views/Skills/Skills';
import MyWork from '../../views/MyWork/MyWork';
import Contact from '../../views/Contact/Contact';
import Certificat from '../../../images/certificat.jpg';
import * as S from './MainLayout.Elements';

const MainLayout = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [overlay, setOverlay] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const toggleOverlay = () => {
		setOverlay(!overlay);
	};

	const position = window.scrollY;

	return (
		<S.MainWrapper>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<NavBar toggle={toggle} />
			<Hero />
			<MyWork />
			<Skills toggleOverlay={toggleOverlay} />
			<Contact />
			<S.Overlay overlay={overlay} onClick={() => toggleOverlay()}>
				<S.ImageWrapper position={position} overlay={overlay}>
					<S.Info overlay={overlay}>-= Click anywhere to close =-</S.Info>
					<S.Image src={Certificat} alt='certificat' overlay={overlay} />
				</S.ImageWrapper>
			</S.Overlay>
		</S.MainWrapper>
	);
};

export default MainLayout;
