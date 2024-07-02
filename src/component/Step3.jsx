import React from 'react';

function Step3(props) {
    return (
        <div>
                <form>
          
          <div className='card'>
      
          
              <div className='mb-3'>
                <h3>Adress:</h3>
                  <label className='form-label'>Address</label>
                  <input type="text"  name="fname" className='form-control' />
      
              </div>
              <div className='mb-3'>
                  <label className='form-label'>City</label>
                  <input type="text"  name="lname" className='form-control' />
      
              </div>
              <div className='mb-3 '>
                  <label className='form-label'>State</label>
                  <input type="email"  name="email" className='form-control' />
      
              </div>
              <div className='mb-3 '>
                  <label className='form-label'>department</label>
                  <input type="date"  name="name" className='form-control' />
      
              </div>
      
             
              {/* <button className='btn btn-primary ' >next</button> */}
              </div>
               
             </form>
        </div>
    );
}

export default Step3;