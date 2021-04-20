import React, { useState } from 'react';
import Sidebar from '../Siedebar/Sidebar';
import NavBar from '../NavBar/NavBar';
import Hero from '../../views/Hero/Hero';
import Skills from '../../views/Skills/Skills';
import MyWork from '../../views/MyWork/MyWork';
import Contact from '../../views/Contact/Contact';

const MainLayout = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<NavBar toggle={toggle} />
			<Hero />
			<MyWork />
			<Skills />
			<Contact />
		</>
	);
};

export default MainLayout;
