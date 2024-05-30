import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Spinner } from 'reactstrap';


export default function SubscribeForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [pageUrl, setPageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Fetch the current page URL when the component mounts
    setPageUrl(window.location.href);
  }, []);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');
    setLoading(true); // Set loading to true when submitting the form

    if (!email) {
      setError('Email is required');
      setLoading(false); // Reset loading state on error
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      setLoading(false); // Reset loading state on error
      return;
    }

    // EmailJS configuration
    const serviceID = 'service_fg00l58';
    const templateID = 'template_25hm17g';
    const userID = 'QyvWavOKod6guRB-s';
    const templateParams = {
      from_email: email,
      page_url: pageUrl, // Include the current page URL
    };

    try {
      const response = await emailjs.send(serviceID, templateID, templateParams, userID);
      console.log('Email sent successfully:', response.status, response.text);
      setSuccess('Thank You for Subscription');
      setEmail('');
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to send email. Error:', err);
      setError('Failed to send email. Please try again later.');
    } finally {
      setLoading(false); // Reset loading state after submission
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-subscribe">
          <div className="input-group mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your Email"
              aria-label="Enter Your Email"
              aria-describedby="subscribe-button"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="subscribe-button"
                aria-label="Subscribe"
                disabled={loading} // Disable the button when loading
              >
              {loading ? <Spinner size="sm" color="light" /> : <i className="bi bi-arrow-right"></i>}
              </button> 
            </div>
          </div>
          {error && <div className="alert alert-danger">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}
        </div>
      </form>
      {submitted && (
        <div className="thank-you-message">
          Thank you for subscribing!
        </div>
      )}
    </>
  );
}
