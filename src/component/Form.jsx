import React, { useState } from 'react';

function Form(props) {
    const [firstName,setFirstName]=useState(null)
    const handleFirstName=(e)=>{
        // console.log(e);

        setFirstName(e.target.value);
    }

    const[changeData, setChange] = useState(null)
    const handleChange=(e)=>{
        // setChange(e.target.value)
        let value =e.target.value
        let name=e.target.name
        let email=e.target.email
        let password=e.target.password

    //     setChange({
    //         [name]:value
    //    })
    setChange((prev)=>({
        
            ...prev,  //this is used for concat the two object 
        [name]:value ,
        [email]:value,
        [password]:value

        
    }));
}
      
    
    return (
        <div>
            <h2> Form Handling</h2>

            <div>
                <input type='text' name='firstname' onChange={handleFirstName}/>
                <p>{firstName}</p>
            </div><br></br>

            <div>
                
                <input type="text" name="fullname" onChange={handleChange} />
               
            </div><br></br>

            <div>
                
                <input type="text" email="email"  onChange={handleChange} />
            </div><br></br>

            <div>
                
                <input type="text" password="password" onChange={handleChange} />
                {/* <p>{changeData}</p> */}
            </div>
        </div>
    );
}

export default Form ;


//homework is form making arary