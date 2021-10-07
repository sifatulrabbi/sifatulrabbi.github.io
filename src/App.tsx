import React, { Component } from 'react';
import GlobalStyles from './GlobalStyles';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { Navbar, Content, Hero, Sidebar, Overlay } from './components';
import { BrowserRouter as Router } from 'react-router-dom';

interface Props {}

interface State {
  show: boolean;
}

class App extends Component<Props, State> {
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
            <Navbar setShow={this.changeShow} show={show} />
            <Sidebar show={this.state.show} />
            <Content>
              <Hero />
            </Content>
            <Overlay show={show} setShow={this.changeShow} />
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
