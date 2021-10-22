import React, { lazy, Suspense } from 'react';
import { Hero } from '../../components';

const Work = lazy(() => import('../../components/Work/Work'));
const About = lazy(() => import('../../components/About/About'));
const Contact = lazy(() => import('../../components/Contact/Contact'));

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <Work />
        <About />
        <Contact />
      </Suspense>
    </>
  );
};

export default HomePage;
