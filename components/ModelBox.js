import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FormCta from './FormCta';
import { useRouter } from 'next/router';

function ModelBox({ headerText, buttonText, ...args }) {
    const [modal, setModal] = useState(false);
    const router = useRouter();
  
    const toggle = () => setModal(!modal);
  
    const handleSubmit = async () => {
      // Redirect to the thank you page after 5 seconds
      setTimeout(() => {
        router.push('/thank-you');
      }, 3000);
    };

  return (
    <div>
       <a className='btn btn-prime' onClick={toggle}>
       {buttonText}
      </a>
      <Modal className='model-form'  isOpen={modal} toggle={toggle} {...args} centered	
>
        <ModalHeader toggle={toggle}>{headerText}</ModalHeader>
        <ModalBody>
          <FormCta  onSubmit={handleSubmit}/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default ModelBox;