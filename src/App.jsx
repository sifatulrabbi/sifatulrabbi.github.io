import React, { lazy, Suspense } from 'react';
import './scss/App.scss';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const ProjectSection = lazy(() => import('./components/ProjectSection/ProjectSection'));
const BottomBar = lazy(() => import('./components/BottomBar/BottomBar'));
const AboutMe = lazy(() => import('./components/AboutMe/AboutMe'));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>loading...</div>}>
        <Navbar />
        <Hero />
        <BottomBar />
        <ProjectSection />
        <AboutMe />
      </Suspense>
    </div>
  );
}

export default App;
