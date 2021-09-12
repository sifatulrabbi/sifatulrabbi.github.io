import React, { lazy, Suspense } from 'react';
import './scss/App.scss';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const ProjectSection = lazy(() => import('./components/ProjectSection/ProjectSection'));
const BottomBar = lazy(() => import('./components/BottomBar/BottomBar'));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>loading...</div>}>
        <Navbar />
        <Hero />
        <ProjectSection />
        <BottomBar />
      </Suspense>
    </div>
  );
}

export default App;
