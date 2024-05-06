import React from 'react';
import Form from './Form';

const FooterContactForm = () => {
    return (
        <div className='container bottom-form'>
            <div className='row'>
                <div className='col-lg-6 align-self-center'>
                    <div className='form-left'>
                        <span>Contact Us</span>
                        <h3>Get in touch with our team to discuss your CRM needs</h3>
                        <div className="cont-info">
                            <a href="">T:  9876 543 210</a>
                            <a href="">E: info@crmforceplus.com</a>
                        </div>
                    </div>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-5'>
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default FooterContactForm;
