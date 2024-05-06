import React from 'react';

const Form = () => {
    return (
        <form>
            <div className="form-group">
                <input type="text" class="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
                <input type="email" class="form-control" placeholder="Company Email" />
            </div>
            <div className="form-group">
                <input type="text" class="form-control" placeholder="Contact Number" />
            </div>
            <div className="form-group">
            <textarea className="form-control" placeholder="Message"  rows="3"></textarea>
            </div>
            <div>
               <button type="submit" value="Submit" className='btn btn-prime btn-full' >Request CallBack</button>
            </div>
        </form>
    );
}

export default Form;
