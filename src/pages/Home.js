import React, { useState } from 'react';
import Sidebar from '../components/Siedebar/Sidebar';
import NavBar from '../components/NavBar/NavBar';
import Hero from '../components/Hero/Hero';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Hero />
    </>
  )
}

export default Home;