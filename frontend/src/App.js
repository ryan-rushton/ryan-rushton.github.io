import React, { Component } from 'react';
import './App.css';
import Homepage from './Homepage/Homepage';
import NavBar from './NavBar/NavBar';
import Intro from './Introduction/Introduction';

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
