import React from 'react';
import { Hero, About, Work, Contact } from '../../components';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Contact />
    </>
  );
};

export default HomePage;
