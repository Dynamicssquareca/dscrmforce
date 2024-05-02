import React from 'react';
import Link from 'next/link';
import Nav from './Nav';

const Header = () => {
    return (
        <>
            <header id="header" className="header">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <Link href="/" className="logo d-flex align-items-center">
                        <img src="/img/crmforceplus-logo.png" alt="crmforceplus-logo" />
                    </Link>
                    <Nav />
                </div>
            </header>
        </>
    );
}

export default Header;
