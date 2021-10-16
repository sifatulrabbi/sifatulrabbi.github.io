import React from 'react';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { AppWrapper } from './GlobalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Footer, StickyEmail, StickyLinks } from './components';
import { HomePage } from './Pages';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <AppWrapper>
            <Navbar />
            <StickyEmail />
            <StickyLinks />
            <Route exact path={'/'}>
              <HomePage />
            </Route>
            <Route exact path={'/project/'}>
              <div>Page under development</div>
            </Route>
            <Footer />
          </AppWrapper>
        </ThemeProvider>
      </Switch>
    </Router>
  );
};

export default App;
