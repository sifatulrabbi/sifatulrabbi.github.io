import React from 'react';
import GlobalStyles from './GlobalStyles';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Navbar, Hero, Works, Footer, Contact, Skills } from './components';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Navbar />
            <Hero />
            <Works />
            <Skills />
            <Contact />
            <Footer />
        </ThemeProvider>
    );
};

export default App;
