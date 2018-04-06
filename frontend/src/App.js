import React, { Component } from 'react';
import './App.css';
import Homepage from './homepage/Homepage';
import NavBar from './navbar/NavBar';
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
