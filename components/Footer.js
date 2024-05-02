import React from 'react';

const Footer = () => {
    return (
        <>
            <footer id="footer" className="footer">
                <div className='footer-top'>
                    <div className='container'>
                        <div className='row'>
                            <div className="col-lg-4 col-md-12 footer-info">
                                <a href="/" className="logo d-flex align-items-center">
                                <img src="/img/crmforceplus-logo-white.png" alt="crmforceplus-logo-white" />
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
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i className="bi bi-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-12 footer-contact text-center text-md-start">
                                <h4>Contact Us</h4>
                                <p>
                                    A108 Adam Street <br />
                                    New York, NY 535022<br />
                                    United States <br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="container">
                        <div className="copyright">
                            &copy; Copyright <strong><span>FlexStart</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">

                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
