import React, { lazy, Suspense, useState } from 'react';
import './scss/App.scss';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import useHashLinks from './hooks/useHashLinks';

const Navbar = lazy(() => import('./components/Navbar/Navbar'));
const Hero = lazy(() => import('./components/Hero/Hero'));
const ProjectSection = lazy(() => import('./components/ProjectSection/ProjectSection'));
const AboutMe = lazy(() => import('./components/AboutMe/AboutMe'));
const MyServices = lazy(() => import('./components/MyServices/MyServices'));
const ContactSection = lazy(() => import('./components/ContactSection/ContactSection'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
    const [loading, setLoading] = useState(true);

    useHashLinks();

    setTimeout(() => {
        setLoading(false);
    }, 500);

    if (loading) return <LoadingScreen />;

    return (
        <Suspense fallback={<LoadingScreen />}>
            <Navbar />
            <Hero />
            <ProjectSection />
            <MyServices />
            <ContactSection />
        </Suspense>
    );
}

export default App;
