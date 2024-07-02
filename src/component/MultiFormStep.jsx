import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

function MultiFormStep(props) {
    const [show,setShow]=useState(1)
    const[isSubmitted,setIsSubmitted]=useState(false)

    const nextBtn=(e)=>{
        e.preventDefault();
        setShow(show+1)
    }
    const prevBtn=()=>{
        setShow(show-1)
    }
    const submitForm=(e)=>{
        e.preventDefault();
        setIsSubmitted(true)
        
    }

    return (
      <div>
        {isSubmitted ? (
          <div>
            <h2>Form Submitted Successfully!</h2>
            <p>Thank you, We have received your details.</p>
          </div>
        ) : (
          <form onSubmit={submitForm} >
            {show == 1 ? (
              <Step1></Step1>
            ) : show == 2 ? (
              <Step2></Step2>
            ) : show == 3 ? (
              <Step3></Step3>
            ) : null}
   
           
                   
          {show>=1?<button className="btn btn-primary" onClick={nextBtn}> next </button> :null} 
          {show < 3 ? <button className="btn btn-primary" onClick={prevBtn}>prev</button>:null}  
            

          {show===3?<button>submit</button>:null} 
        
          </form>
        )}  
      </div>
    );
}

export default MultiFormStep;

  
                          
    