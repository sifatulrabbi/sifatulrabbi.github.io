import React from 'react';
import GlobalStyles from './GlobalStyles';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Navbar, Content, Hero } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
    return (
        <Router>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <div id='app'>
                    <Navbar />
                    <Content>
                        <Hero />
                    </Content>
                </div>
            </ThemeProvider>
        </Router>
    );
};

export default App;
