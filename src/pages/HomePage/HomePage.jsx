import React, { lazy, Suspense } from 'react';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';

const Navbar = lazy(() => import('../../components/Navbar/Navbar'));
const Hero = lazy(() => import('../../components/Hero/Hero'));
const ProjectSection = lazy(() =>
    import('../../components/ProjectSection/ProjectSection')
);
const BottomBar = lazy(() => import('../../components/BottomBar/BottomBar'));
const AboutMe = lazy(() => import('../../components/AboutMe/AboutMe'));
const MyServices = lazy(() => import('../../components/MyServices/MyServices'));
const ContactSection = lazy(() =>
    import('../../components/ContactSection/ContactSection')
);
const Footer = lazy(() => import('../../components/Footer/Footer'));

const HomePage = () => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <div className="homePage">
                <Navbar />
                <Hero />
                <BottomBar />
                <ProjectSection />
                <AboutMe />
                <MyServices />
                <ContactSection />
                <Footer />
            </div>
        </Suspense>
    );
};

export default HomePage;
