import React, { lazy, Suspense } from 'react';
import './scss/App.scss';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Hero = lazy(() => import('./components/Hero/Hero'));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<div>loading...</div>}>
        <Navbar />
        <Hero />
      </Suspense>
    </div>
  );
}

export default App;
