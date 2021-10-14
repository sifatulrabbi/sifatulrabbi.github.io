import React from 'react';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { AppWrapper } from './GlobalStyles';
import { Hero, Navbar, About, Work, Contact, Footer } from './components';
import { getRepos, IData } from './libs/getRepoData';

interface Props {}
interface State {
  data: IData[];
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount(): void {
    this.setState({ data: getRepos() });
    console.log('hello');
  }

  UNSAFE_componentWillMount() {
    this.setState({ data: getRepos() });
  }

  render(): JSX.Element {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppWrapper>
          <Navbar />
          {/* TODO: #41 Sticky links in desktop mode */}
          {/* TODO: #40 Sticky mailto in desktop mode */}
          <Hero />
          <Work data={this.state.data} />
          <About />
          <Contact />
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
