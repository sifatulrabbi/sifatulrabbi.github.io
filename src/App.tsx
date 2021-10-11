import React from 'react';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { AppWrapper } from './GlobalStyles';
/** Components */
import { Hero, Navbar, About } from './components';

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppWrapper>
          <Navbar />
          <Hero />
          <About />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
