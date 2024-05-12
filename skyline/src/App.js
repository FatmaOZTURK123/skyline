import React from 'react';
import './assets/css/styles.css';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import SectionEtapes from './components/SectionEtapes';
import TableauVoitures from './components/TableauVoitures';

const App = () => {
    return (
        <div className="App" id="page-top">
            <Navbar />
            <Header />
            <SectionEtapes id="etapes" />
            <TableauVoitures id="carTable" />
            <Contact id="contact" / >
            <Footer />
        </div>
    );
};

export default App;
