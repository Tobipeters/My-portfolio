import React from 'react';
import Nav from './components/Navbar/index'
import Header from './components/Header/index'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <div className="app" >
            <Nav />
            <Header />
        </div>
    );
}

export default App;