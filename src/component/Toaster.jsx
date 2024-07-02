
 import { useState } from "react";


const initialValues = {
  name: "",
  email: "",
  city: "",
  phone: "",
  password: "",
};

function Toaster() {

  const [input, setInput] = useState(initialValues);
  
  const inputHandler = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
    

    const submitHandler = (e) => {
      e.preventDefault();
      console.log("Form Submitted", input);
    };
  
    console.log("Toaster component rendered");
  
    return (
      <>
      {/* onSubmit={submitHandler} */}

          <form onSubmit={submitHandler} >
  
            <h2>SignUp</h2>
            <label>Name: </label>
            <input type='text' name='name' value={input.name} onChange={inputHandler} />
            <label>Email: </label>
            <input type='text' name='email' value={input.email} onChange={inputHandler}/>
            <label>City: </label>
            <input type='text' name='city' value={input.city} onChange={inputHandler}/>
            <label>Phone: </label>
            <input type='text' name='phone' value={input.phone} onChange={inputHandler} />
            <label>Password: </label>
            <input type='password' name='password' value={input.password} onChange={inputHandler}/>
            <button type='submit'>SignUp</button> 
        </form>
        </>
);
}
}

export default Toaster
