import React, {Component} from 'react';
import './App.css';
import Homepage from './homepage/homepage';
import Blurbpage from './blurbpage/blurbpage';
import NavBar from './navbar/NavBar'
import AboutMe from './aboutme/aboutme'

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Homepage/>
                <Blurbpage/>
                <AboutMe/>
            </div>
        );
    }
};

export default App;
