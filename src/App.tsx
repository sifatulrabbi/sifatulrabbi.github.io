import React, { useState } from 'react';
import GlobalStyles from './GlobalStyles';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Navbar, Content, Hero, Sidebar } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

interface Props {}

interface State {
  show: boolean;
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  public changeShow = (): void => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { show } = this.state;

    return (
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div id='app'>
            <Navbar showSet={this.changeShow} show={show} />
            <Sidebar show={this.state.show} />
            <Content>
              <Hero />
            </Content>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
