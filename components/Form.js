import React from 'react';

const Form = () => {
    return (
        <form className="form-one">
            <div className="form-group">
                <input type="text" className="form-control"  name="Name" placeholder="" />
                <label htmlFor="name">Full Name</label>
            </div>
            <div className="form-group">
                <input type="email" className="form-control" name="Company Email" placeholder="" />
                <label htmlFor="name">Company Email</label>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="Phone Number" placeholder="" />
                <label htmlFor="name">Phone Number</label>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="Company Name" placeholder="" />
                <label htmlFor="name">Company Name</label>
            </div>
            <div className="form-group mb-4">
            <textarea className="form-control" name="message" placeholder=""  rows="3"></textarea>
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
               <button type="submit" value="Submit" className='btn btn-prime btn-full' >Request CallBack</button>
            </div>
        </form>
    );
}

export default Form;
