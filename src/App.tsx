import React from 'react';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { AppWrapper } from './GlobalStyles';
import { Hero, Navbar, About, Work, Contact, Footer } from './components';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <Navbar />
        {/* TODO: #41 Sticky links in desktop mode */}
        {/* TODO: #40 Sticky mailto in desktop mode */}
        <Hero />
        <Work />
        <About />
        <Contact />
        <Footer />
      </AppWrapper>
    </ThemeProvider>
  );
};

export default App;
