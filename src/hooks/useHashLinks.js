import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useHashLinks = () => {
    const location = useLocation();

    const aboutSection = document.getElementById('about');
    const projectsSection = document.getElementById('projects');
    const contactSection = document.getElementById('contact');

    const scrollWindow = (hashName) => {
        if (!aboutSection && !projectsSection && !contactSection) return;

        switch (hashName) {
            case '#projects':
                document.documentElement.scrollTop = projectsSection.offsetTop - 100;
                break;
            case '#contact':
                document.documentElement.scrollTop = contactSection.offsetTop - 100;
                break;
            case '#about':
                document.documentElement.scrollTop = aboutSection.offsetTop - 100;
                break;
            default:
                document.documentElement.scrollTop = 0;
        }
    };

    useEffect(() => {
        scrollWindow(location.hash);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);
};

export default useHashLinks;
