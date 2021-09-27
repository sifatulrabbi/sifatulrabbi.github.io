import React from 'react';
import GlobalStyles from './GlobalStyles';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Cursor, Navbar, Hero, Works, Footer, Contact, Skills } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <Cursor />
                <Navbar />
                <Hero />
                <Works />
                <Skills />
                <Contact />
                <Footer />
            </ThemeProvider>
        </Router>
    );
};

export default App;
