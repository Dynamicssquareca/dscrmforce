import React from 'react';
import Form from './Form';
import { useRouter } from 'next/router';


const ContactUSForm = () => {
    const router = useRouter();
    const handleFormSubmit = () => {
        console.log('Form submitted!');
        setTimeout(() => {
            router.push('/thank-you');
          }, 3000);
        // Perform any additional actions needed after form submission
      };

    return (
        <div className='container contact-form-left'>
            <div className='row'>
                <div className='col-lg-6 align-self-center'>
                    <div className='form-left'>
                        <div className='info-one'>
                            <span>Customer Support</span>
                            <p>Our dedicated support team is available to assist<br/> you with any inquiries or issues you may have. <br/><b>Contact us via email at</b>: <br/><a href='mailto:support@yourcompany.com'>support@yourcompany.com</a></p>
                        </div>
                        <div className='info-one'>
                            <span>For Sales Enquiry</span>
                            <p><a href='mailto:support@yourcompany.com'>sales@yourcompany.com.</a></p>
                        </div>
                        <div className='info-one'>
                            <span>Contact Number</span>
                            <p><a href='tel:+442035141057'>+44 203 5141057</a></p>
                        </div>
                        <div className='info-one'>
                            <span>Visit Us</span>
                            <p>123 Main Street,<br/>
                                City, State,<br/>
                                Zip Code
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <Form onSubmit={handleFormSubmit} />
                </div>
            </div>
        </div>
    );
}

export default ContactUSForm;
