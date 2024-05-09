import React from 'react';

const FormSubscribe = () => {
  return (
    <form>

      <div className='form-subscribe'>
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="basic-addon2" />
            <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button"><i className="bi bi-arrow-right"></i></button>
        </div>
      </div>
    </div>
           
        </form >
    );
}

export default FormSubscribe;
