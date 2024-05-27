import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 100) { // Adjust this value as needed
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    return (
        <>
            <header id="header" className={`header ${isFixed ? 'fixed header-scrolled' : ''}`}>
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="/" className="logo d-flex align-items-center">
                        <img src="/crmforceplus-logo.png" alt="crmforceplus-logo" />
                    </a>
                    <Nav />
                </div>
            </header>
        </>
    );
}

export default Header;
