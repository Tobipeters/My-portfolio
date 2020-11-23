import React from 'react';
import Nav from './components/Navbar/index'
import Header from './components/Header/index'
import Portfolio from './components/Portfolio/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const App = () => {
    return (
        <div className="app" >
            <Nav />
            <Header />
            <Portfolio />
        </div>
    );
}

export default App;