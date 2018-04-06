import React, { Component } from 'react';
import './App.css';
import Homepage from './mainpage/Homepage';
import NavBar from './mynavbar/NavBar';
import Intro from './intro/Introduction';

class App extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Homepage />
                <Intro />
            </div>
        );
    }
};

export default App;
