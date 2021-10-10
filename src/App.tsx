import React from 'react';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { AppWrapper } from './GlobalStyles';
/** Components */
import { Hero, Navbar } from './components';

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
  state = {};

  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppWrapper>
          <Navbar />
          <Hero />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
