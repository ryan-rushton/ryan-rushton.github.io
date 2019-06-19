import React, { Component } from "react";
import NavBarPresentation from "./NavBarPresentation";
import logo from "../static/RR_Logo_Outlined.svg";

const LOGO_HEIGHT = 48;
const LOGO_WIDTH = 70;

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownVisible: false
        };

        this.onDropdownClick = this.onDropdownClick.bind(this);
    }

    onDropdownClick() {
        this.setState(prevState => ({
            dropdownVisible: !prevState.dropdownVisible
        }));
    }

    render() {
        const { dropdownVisible } = this.state;
        return (
            <NavBarPresentation
                dropdownVisible={dropdownVisible}
                logo={logo}
                logoHeight={LOGO_HEIGHT}
                logoWidth={LOGO_WIDTH}
                onDropdownClick={this.onDropdownClick}
            />
        );
    }
}

export default NavBar;
