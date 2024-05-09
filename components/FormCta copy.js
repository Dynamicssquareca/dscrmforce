import React, { useState, useEffect } from 'react';

const FormCta = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(3); // Initial timer value in seconds
  const [timerId, setTimerId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your form submission logic here (e.g., using fetch or Axios)

    // Simulating form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Show the submission message
    setSubmitted(true);

    // Reset form fields after submission
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setMessage('');

    // Call the onSubmit function passed from the parent component
    onSubmit();

    // Start the redirection timer
    setTimerId(
      setInterval(() => {
        setRedirectTimer(prevTimer => {
          if (prevTimer === 0) {
            clearInterval(timerId); // Clear the interval when timer reaches 0
          }
          return prevTimer - 1;
        });
      }, 1000)
    );
  };

  useEffect(() => {
    // Clear the timer when redirectTimer reaches 0
    if (redirectTimer === 0) {
      clearInterval(timerId);
    }
    // Clear the interval when component unmounts
    return () => clearInterval(timerId);
  }, [redirectTimer]); // Update dependency array




  return (
    <form className="form-one" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" className="form-control" name="Name" placeholder="" value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="name">Full Name</label>
      </div>
      <div className="form-group">
        <input type="email" className="form-control" name="Company Email" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="name">Company Email</label>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" name="Phone Number" placeholder="" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <label htmlFor="name">Phone Number</label>
      </div>
      <div className="form-group">
        <input type="text" className="form-control" name="Company Name" placeholder="" value={company} onChange={(e) => setCompany(e.target.value)} />
        <label htmlFor="name">Company Name</label>
      </div>
      <div className="form-group mb-4">
        <textarea className="form-control" name="message" placeholder="" rows="3" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <label htmlFor="name">Message</label>
      </div>
      <div className="mb-5 form-check">
        <input
          type="checkbox"
          checked
          readOnly
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label">
          I agree to the
          <a href="/privacy-policy/" target="_blank">
            {" "}
            Privacy Policy{" "}
          </a>
          and
          <a href="/terms-of-use/" target="_blank">
            {" "}
            Terms of Service{" "}
          </a>
          .
        </label>
      </div>
      <div>
        <button className='btn btn-prime btn-full' type="submit" disabled={submitted}>{submitted ? `Submitting (${redirectTimer})` : 'Request CallBack'}</button>
        {/* <button  type="submit" value="Submit" className='btn btn-prime btn-full' >Request CallBack </button> */}
        {submitted && <p>Your form has been submitted!</p>}
      </div>
    </form>
  );
}

export default FormCta;
