import React from 'react';
import Nav from './components/Navbar/index'
import Header from './components/Header/index'
import Portfolio from './components/Portfolio/index'
import Footer from './components/Footer/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const App = () => {
    return (
        <div className="app" >
            <Nav />
            <Header />
            <Portfolio />
            <Footer />
        </div>
    );
}

export default App;