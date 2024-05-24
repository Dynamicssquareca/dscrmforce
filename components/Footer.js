import React from 'react';
import { useRouter } from 'next/router';
import FooterContactForm from './FooterContactForm';
import FormSubscribe from './FormSubscribe';
import ScrollToTopButton from './ScrollToTopButton';

const Footer = () => {
    const router = useRouter();
    const { pathname } = router;

// Define classes based on different routes
let footerClass = '';

if (pathname === '/contact-us' || pathname === '/about-us') {
  footerClass = 'footer-pad';
} 
// } else if (pathname === '/page2') {
//   footerClass = 'page2-footer';
// } else if (pathname === '/page3') {
//   footerClass = 'page3-footer';
// }

    return (
        <>
        <FooterContactForm  />
            <footer id="footer" className="footer">
                <div className={`footer-top ${footerClass}`}>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-lg-4 col-md-12 footer-info">
                                <a href="/" className="logo d-flex align-items-center">
                                <img src="/crmforceplus-white.png" alt="crmforceplus-logo-white" />
                                    {/* <span>FlexStart</span> */}
                                </a>
                                <p>Since 2011, we have been serving our global customers, enabling them to make more profits by implementing tech-driven cloud solutions.</p>
                                <div className="social-links mt-3">
                                    <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                                    <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                                    <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                                    <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Quick Links</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-2 col-6 footer-links">
                                <h4>Business Apps</h4>
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Solutions</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Industries</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Company</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Resources</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-12 footer-contact text-center text-md-start">
                                <h4>Subscribe our Newsletter</h4>
                                <FormSubscribe />
                            </div>

                        </div>
                    </div>
                   
                </div>
                <div className='bottom-footer'>
                <div className="container">
                        <div className="copyright">© Copyright 2024 crmforceplus, Inc. All rights reserved. Various trademarks held by their respective owners.</div>
                    </div>
                </div>
            </footer>
            <ScrollToTopButton />
        </>
    );
}

export default Footer;
