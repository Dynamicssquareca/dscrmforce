import ContactUSForm from '@/components/ContactUSForm';
import Image from 'next/image';
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
                                <p>Looking for Salesforce experts? We are just a call away to help you out in every possible way.<br/> Reach out anytime—we're ready to help!
</p>
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
                                <h2>Our customer-centric approach empowers you to attain great customer satisfaction with superior results</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-3'>
                            <div className='box-icon-box box-icon-box-center'>
                                <Image src="/img/icons/Group-1.png" alt="Tailored Solutions" width={64} height={64} />
                                <h3>Tailored Solutions</h3>
                                <p>Customized offerings to meet your unique needs.</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='box-icon-box box-icon-box-center'>
                                <Image src="/img/icons/Group-2.png" alt="Exceptional Support" width={64} height={64} />
                                <h3>Proven Track Records</h3>
                                <p>Helped businesses achieve great results.</p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='box-icon-box box-icon-box-center'>
                                <Image src="/img/icons/Group-3.png" alt="Proven Results" width={64} height={64} />
                                <h3>Certified Experts</h3>
                                <p>Unlock Salesforce potential with professionals. </p>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='box-icon-box box-icon-box-center'>
                                <Image src="/img/icons/Group-4.png" alt="Expertise and Innovation" width={64} height={64} />
                                <h3>Tailored Solutions</h3>
                                <p>Acquire your personalized solution today!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactUs;
