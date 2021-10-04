import React from 'react';
import styled from 'styled-components';
import Title from '../../Title';

interface Props {}
interface State {
  navlinks: { id: string; name: string; link: string }[];
}

const Wrapper = styled.div`
  width: 100%;
  height: max-content;

  ul {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    list-style-type: none;
    color: ${({ theme }) => theme.palette.dark};

    li {
      padding-bottom: 0.5rem;
      border-bottom: 2px solid transparent;

      &.active {
        border-color: ${({ theme }) => theme.palette.main};
        color: ${({ theme }) => theme.palette.main};
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoint}) {
    ul {
      justify-content: flex-start;

      li {
        margin: 0 1rem;
      }
    }
  }
`;

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
        <ul>
          {this.state.navlinks.map((link) => (
            <li key={link.id}>
              <button>
                <Title text={link.name} />
              </button>
            </li>
          ))}
        </ul>
      </Wrapper>
    );
  }
}

export default Navbar;
