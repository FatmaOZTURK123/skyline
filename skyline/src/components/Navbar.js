import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isShrunk, setShrunk] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
    
            setShrunk(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${isShrunk ? 'navbar-shrink' : ''}`}>
            <div className="container">
                <a className="navbar-brand" href="#page-top">SKYLINE</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu <i className="fas fa-bars ms-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" href="#etapes">Étapes</a></li>
                        <li className="nav-item"><a className="nav-link" href="#carTable">Nos voitures</a></li>
                        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
