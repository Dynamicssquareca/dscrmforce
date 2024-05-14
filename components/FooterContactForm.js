import React from 'react';
import { useRouter } from 'next/router';
import Form from './Form';



const FooterContactForm = () => {
const router = useRouter();

 // Define the pathname of the page where you want to hide the component
 const hiddenPagePaths = ['/about-us','/contact-us'];

 const shouldHideComponent = hiddenPagePaths.includes(router.pathname);
  // Conditionally render the component based on whether it should be hidden
  if (shouldHideComponent) {
    // Return null to hide the component
    return null;
  }
  const getHeaderText = () => {
    switch (router.pathname) {
        case '/':
            return 'Get in touch with our team to <br/> discuss your CRM needs';
        case '/solutions':
            return 'Unlock the Power of <br/> CRMforcePlus Today!';
        case '/page3':
            return 'Request Callback for Page 3';
        default:
            return 'Get in touch with our team <br/> to discuss your CRM needs';
    }
};


    return (
        <div className='container bottom-form'>
            <div className='row'>
                <div className='col-lg-6 align-self-center'>
                    <div className='form-left'>
                        <span>Contact Us</span>
                        <h3 dangerouslySetInnerHTML={{ __html: getHeaderText() }}></h3>
                        <div className="cont-info">
                            <a href="tel:9876543210"><b>T:</b> 9876 543 210</a>
                            <a href="mailto:info@crmforceplus.com"><b>E:</b> info@crmforceplus.com</a>
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
