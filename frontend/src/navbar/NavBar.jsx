import React from 'react';
import NavBarPresentation from './NavBarPresentation';
import logo from '../static/RR_Logo_Outlined.svg';

const LOGO_HEIGHT = 48;
const LOGO_WIDTH = 70;

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownVisible: false,
        }

        this.onSubmenuMouseHover = this.onSubmenuMouseHover.bind(this);
        this.onSubmenuMouseLeave = this.onSubmenuMouseLeave.bind(this);
    }

    onSubmenuMouseHover() {
        this.setState(() => ({
            dropdownVisible: true,
        }));
    }

    onSubmenuMouseLeave() {
        this.setState(() => ({
            dropdownVisible: false,
        }));
    }

    render() {
        return (
            <NavBarPresentation
                dropdownVisible={this.state.dropdownVisible}
                logo={logo}
                logoHeight={LOGO_HEIGHT}
                logoWidth={LOGO_WIDTH}
                onSubmenuMouseHover={this.onSubmenuMouseHover}
                onSubmenuMouseLeave={this.onSubmenuMouseLeave}
            />
        );
    }
};

export default NavBar;
