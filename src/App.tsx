import React from 'react';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { AppWrapper } from './GlobalStyles';
// prettier-ignore
import { Hero, Navbar, About, Work, Contact, Footer, StickyEmail, StickyLinks, } from './components';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppWrapper>
        <Navbar />
        <StickyEmail />
        <StickyLinks />
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
