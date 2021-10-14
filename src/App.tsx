import React from 'react';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { AppWrapper } from './GlobalStyles';
/** Components */
import { Hero, Navbar, About, Work, Contact, Footer } from './components';

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
  render() {
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
  }
}

export default App;
