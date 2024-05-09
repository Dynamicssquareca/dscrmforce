import ContactUSForm from '@/components/ContactUSForm';
import React from 'react';

const ContactUs = () => {
    return (
        <>
            <section className="hero">
                <div id="hero"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="hero-content">
                                <h1>Get in Touch with Us</h1>
                                <p>Got questions or issues? Our support team is here to assist you every step of the way.<br /> Reach out anytime—we're ready to help!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='m-t-m-240'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-11'>
                            <div className='form-two'>
                                <ContactUSForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="heading-style-one">
                                <span>Why Choose  Us</span>
                                <h2>We deliver innovative solutions tailored to your needs, backed by exceptional customer support</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='box-icon-box box-icon-box-center'>
                                <img src="/img/icons/mission-icon.png" alt="mission-icon" width={64} height={64} />
                                <h3>Tailored Solutions</h3>
                                <p>Customized offerings to meet your unique needs.</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='box-icon-box box-icon-box-center'>
                                <img src="/img/icons/mission-icon.png" alt="mission-icon" width={64} height={64} />
                                <h3>Exceptional Support</h3>
                                <p>Dedicated customer support team ready to assist you.</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='box-icon-box box-icon-box-center'>
                                <img src="/img/icons/mission-icon.png" alt="mission-icon" width={64} height={64} />
                                <h3>Proven Results</h3>
                                <p>Thousands of satisfied users trust our reliable solutions</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='box-icon-box box-icon-box-center'>
                                <img src="/img/icons/mission-icon.png" alt="mission-icon" width={64} height={64} />
                                <h3>Expertise and Innovation</h3>
                                <p>Experience excellence with our innovative approach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUs;
