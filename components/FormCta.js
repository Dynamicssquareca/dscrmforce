import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';

const FormCta = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [redirectTimer, setRedirectTimer] = useState(3);
  const [timerId, setTimerId] = useState(null);


  const [errors, setErrors] = useState({});

  const [defaultCountryCode, setDefaultCountryCode] = useState('us');
  const [pageUrl, setPageUrl] = useState('');
  useEffect(() => {
    // Fetch IP information when the component mounts
    setPageUrl(window.location.href);
    fetchCountryCodeByIP();
  }, []);

  const fetchCountryCodeByIP = () => {
    axios.get('')//https://api.ipdata.co?api-key=00163619f1de9b2adebdc3a316b8958c4864bcc38ca547a8fd081d6e
      .then(response => {
        const countryCode = response.data.country_code.toLowerCase(); // Convert to lowercase
        setDefaultCountryCode(countryCode);
      })
      .catch(error => {
        console.error('Error fetching IP information:', error);
        setDefaultCountryCode('us'); // Fallback to 'us' if the API call fails
      });
  };
  // const fetchCountryCodeByIP = () => {
  //   fetch(`https://api.ipdata.co?api-key=00163619f1de9b2adebdc3a316b8958c4864bcc38ca547a8fd081d6e`)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch IP information');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       let countryCode = data.country_code.toLowerCase(); 
  //       console.log("Country Code:", countryCode); // 
  //       setDefaultCountryCode(countryCode);
  //       console.log("Default Country Code:", defaultCountryCode); 
  //     })
  //     .catch(error => {
  //       console.error('Error fetching IP information:', error);
  //     });
  // };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Send email using EmailJS
    emailjs.send('service_lqazf46', 'template_e13glbp', {
      from_name: name,
      from_email: email,
      to_name: 'YOUR_EMAIL_ADDRESS', // Replace with your own email address
      phone_number: phone,
      company_name: company,
      message: message,
      page_url: pageUrl,
    }, 'JMglIoOzliJzdMCd4')
      .then((response) => {
        console.log('Email sent successfully:', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });

    // Simulate form submission delay
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
            clearInterval(timerId);
          }
          return prevTimer - 1;
        });
      }, 1000)
    );
  };

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    } else {
      delete errors.name; // Clear the error if the field is not empty
    }

    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email format';
    } else {
      delete errors.email; // Clear the error if the field is not empty and valid
    }

    if (!phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(phone)) {
      errors.phone = 'Invalid phone number format';
    } else {
      delete errors.phone; // Clear the error if the field is not empty and valid
    }

    if (!company.trim()) {
      errors.company = 'Company name is required';
    } else {
      delete errors.company; // Clear the error if the field is not empty
    }

    if (!message.trim()) {
      errors.message = 'Message is required';
    } else {
      delete errors.message; // Clear the error if the field is not empty
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    if (phone.trim() === '') {
      return true; // Return true for empty phone number
    }
    // Remove non-digit characters
    const cleanedPhoneNumber = phone.replace(/\D/g, '');
    // Check if the resulting string contains only digits and has a length between 10 and 13 characters
    return /^\d{10,15}$/.test(cleanedPhoneNumber);
  };

  useEffect(() => {
    // Clear the timer when redirectTimer reaches 0
    if (redirectTimer === 0) {
      clearInterval(timerId);
    }
    // Clear the interval when component unmounts
    return () => clearInterval(timerId);
  }, [redirectTimer]);

  return (
    <form className="form-one" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder=""
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) {
              delete errors.name;
              setErrors({ ...errors });
            }
          }}
          onBlur={() => {
            if (!name.trim()) {
              setErrors({ ...errors, name: 'Name is required' });
            }
          }}
        />
        <label htmlFor="name">Full Name</label>
        {errors.name && <div className="text-danger">{errors.name}</div>}
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          name="email"
          placeholder=""
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) {
              delete errors.email;
              setErrors({ ...errors });
            }
          }}
          onBlur={() => {
            if (!email.trim()) {
              setErrors({ ...errors, email: 'Email is required' });
            } else if (!isValidEmail(email)) {
              setErrors({ ...errors, email: 'Invalid email format' });
            }
          }}
        />
        <label htmlFor="name">Company Email</label>
        {errors.email && <div className="text-danger">{errors.email}</div>}
      </div>
      <div className="form-group">
        <PhoneInput
          country={defaultCountryCode} // Set default country code
          value={phone}
          onChange={(value) => {
            setPhone(value);
            if (errors.phone) {
              delete errors.phone;
              setErrors({ ...errors });
            }
          }}
          inputClass="form-control" // CSS class for the input
          inputProps={{
            name: 'phone',
            onBlur: () => {
              if (phone.trim() !== '') { // Check if phone number is not empty before validation
                if (!isValidPhoneNumber(phone)) {
                  setErrors({ ...errors, phone: 'Invalid phone number format' });
                } else {
                  delete errors.phone; // Clear error if phone number is valid
                }
              } else {
                delete errors.phone; // Clear error if phone number is empty
              }
            }
          }}
        />
        {/* <label htmlFor="name">Phone Number</label> */}
        {errors.phone && <div className="text-danger">{errors.phone}</div>}
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          name="companyname"
          placeholder=""
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
            if (errors.company) {
              delete errors.company;
              setErrors({ ...errors });
            }
          }}
          onBlur={() => {
            if (!company.trim()) {
              setErrors({ ...errors, company: 'Company name is required' });
            }
          }}
        />
        <label htmlFor="name">Company Name</label>
        {errors.company && <div className="text-danger">{errors.company}</div>}
      </div>
      <div className="form-group mb-4">
        <textarea
          className="form-control"
          name="message"
          placeholder=""
          rows="3"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) {
              delete errors.message;
              setErrors({ ...errors });
            }
          }}
          onBlur={() => {
            if (!message.trim()) {
              setErrors({ ...errors, message: 'Message is required' });
            }
          }}
        ></textarea>
        <label htmlFor="name">Message</label>
        {errors.message && <div className="text-danger">{errors.message}</div>}
      </div>
      <button className='btn btn-prime btn-full' type="submit" disabled={submitted}>
        {submitted ? `Submitting (${redirectTimer})` : 'Request CallBack'}
      </button>
      {submitted && <p>Your form has been submitted!</p>}
    </form>
  );
};

export default FormCta;
