import React, { useState } from 'react';
import GlobalStyles from './GlobalStyles';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Navbar, Content, Hero, Sidebar } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  const [show, showSet] = useState(false);

  const handleShow = () => {
    showSet((prev) => !prev);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div id='app'>
          <Navbar showSet={handleShow} />
          <Sidebar show={show} />
          <Content>
            <Hero />
          </Content>
        </div>
      </ThemeProvider>
    </Router>
  );
};

export default App;
