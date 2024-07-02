import React, { useState } from 'react';

function Step1(props) {
    // const[step,setStep]=useState(1)
    const[formData,setFormData]=useState()
    // const [isSubmitted,setIsSubmitted]=useState(false)

    const handleInput=(e)=>{
        let {name,value}=e.target
        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))
    }
        
    // const submitForm=(e)=>{ 
    //     e.preventDefault()
    //     setIsSubmitted(true)
    // }

    
    
    return (
      <>
           {/* {
            isSubmitted?(
            <h1>thank you for submitting your form {formData.fname},{formData.email}</h1>
            ):(
            <form onSubmit={submitForm}> */}
     <div className='card'>
        <div className='mb-3'>
            <label className='form-label'>First-Name</label>
            <input type="text"  name="fname" className='form-control'onChange={handleInput} />

        </div>
        <div className='mb-3'>                                  
            <label className='form-label'>Last-Name</label>        
            <input type="text"  name="lname" className='form-control' onChange={handleInput}/>

        </div>
        <div className='mb-3 '>
            <label className='form-label'>Email</label>
            <input type="email"  name="email" className='form-control' onChange={handleInput} />

        </div>                         
        <div className='mb-3'>
            <label className='form-label'>Date-of-birth</label>
            <input type="date"  name="name" className='form-control' onChange={handleInput} />

        </div>

        <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input type="password"  name="password" className='form-control' onChange={handleInput}/>

        </div>
        {/* <button className='btn btn-primary'>next</button>        */}
        </div>
         
       {/* </form> */}
            {/* ) }    */}
       
    
       </>
    );
}

export default Step1;