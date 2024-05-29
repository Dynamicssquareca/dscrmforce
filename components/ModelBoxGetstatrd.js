import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormCta from './FormCta';
import { useRouter } from 'next/router';

const ModelBoxGetstatrd = ({ headerText, buttonText, buttonTextSpan, ...args }) => {
    const [modal, setModal] = useState(false);
    const router = useRouter();
  
    const toggle = () => setModal(!modal);
  
    const handleSubmit = async () => {
        setTimeout(() => {
            router.push('/thank-you');
        }, 3000);
    };

    console.log("ModelBoxGetstatrd rendered with props:", { headerText, buttonText, buttonTextSpan });

    return (
        <div className='custom-model'>
            <a className="getstarted scrollto" onClick={toggle}>Get Started</a>
            <Modal className='model-form' isOpen={modal} toggle={toggle} {...args} centered>
                <ModalHeader toggle={toggle}></ModalHeader>
                <ModalBody>
                    <div className='d-flex-model'>
                        <div className='model-left'>
                            <div>
                                <h3>Get Your <span>Free</span><br/> Salesforce <span>Consultation</span></h3>
                                <p>Transform your business with customized<br/> Salesforce Solutions</p>
                            </div>
                            <img src="/img/banner/hero-shape.png" alt="img" />
                        </div>
                        <div className='model-right'>
                            <FormCta onSubmit={handleSubmit} />
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ModelBoxGetstatrd;
