import React, { useEffect, useState } from 'react';

function ServiceBox({ jsonDataUrl }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices(jsonDataUrl);
  }, [jsonDataUrl]); // Re-fetch data when jsonDataUrl changes

  const fetchServices = (url) => {
    fetch(`${url}?${Date.now()}`) // Append current timestamp as query parameter
      .then(response => response.json())
      .then(data => setServices(data))
      .catch(error => console.error('Error fetching services:', error));
  };

  return (
    <div className="row">
      {services.map(service => (
        <div key={service.id} className="col-lg-3">
          <div className="service-box-one">
            <a href={service.link}>
              <div className="service-box-head">
                <figure>
                  <img src={service.icon} alt={service.title} width={36} height={36} />
                </figure>
                <div className="service-box-title">
                  <h3>{service.title}</h3>
                </div>
              </div>
              <div className="service-box-contant">
                <p>{service.description}</p>
                <span>Get Started <i className="bi bi-arrow-right-circle-fill"></i></span>
              </div>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceBox;
