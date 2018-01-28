import React, {Component} from 'react';
import './App.css';
import Homepage from './homepage/homepage';
import NavBar from './navbar/NavBar'
import Intro from './Intro/intro'

class App extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Homepage/>
                <Intro/>
            </div>
        );
    }
};

export default App;
