import React from 'react';
import { Wrapper } from './navbar.styles';
import Title from '../../../Title';

interface Props {}
interface State {
  navlinks: { id: string; name: string; link: string }[];
}

class Navbar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      navlinks: [
        { id: 'about', name: 'About', link: 'about' },
        { id: 'services', name: 'Services', link: 'services' },
        { id: 'Contact', name: 'Contact', link: 'contact' },
      ],
    };
  }

  render() {
    return (
      <Wrapper>
        {this.state.navlinks.map((link) => (
          <button className='link_btn' key={link.id}>
            <Title text={link.name} />
          </button>
        ))}
      </Wrapper>
    );
  }
}

export default Navbar;
