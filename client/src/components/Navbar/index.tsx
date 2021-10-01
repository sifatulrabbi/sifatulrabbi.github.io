import { Component } from 'react';
import { Wrapper } from './navar.styles';
import { logo } from '../../images';

class Navbar extends Component {
    render() {
        return (
            <Wrapper>
                <nav className='navbar'>
                    <button className='navbar_logo_button'>
                        <img className='navbar_logo_button_img' src={logo} alt='logo' />
                    </button>
                </nav>
                <div className='contentBar'></div>
            </Wrapper>
        );
    }
}

export default Navbar;
