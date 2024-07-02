import React, { useState } from 'react';

function StateRevise() {
    const [state,setState]=useState("hello")
    const[hobbies,setHobbies]=useState({count :2}); //object will not print directly on html ohterwise it will show an error
    const handleUpdate=()=>{

        //u
        // setHobbies((prev)=>
        // {// debugger you can use this to show an error
        //     if(prev.count >0){
        //         return "hello"
        //     }else{
        //         return "bye"
        //     }
        // });

        setHobbies((prev)=>{
            return {
                // ...prev,  //here we using as it any value when we want to change then use in this way below
                newCount:prev,
                count:prev.count+1,
                date:Date(),
                name:"mamta",
                addres:{
                       name:"sohit"
                }
            }
        })
    }
    

    const handle=()=>{
        setState(" mamta hi")
    }
    return (
        <div>
             <h1>{state}</h1>
            <button onClick={handle}>show me</button><br></br>


            {/* <p>{hobbies}</p> */}
            {/* <button onClick={handleUpdate}>update hobby</button> */}
{/* 
            firststep-firstname,lastname,dateofbith,email,password
            secondstep-designation,  address-department,salary
            address line1 ,pincode,department,salary */}

            {/* personalbio()
            office:() */}
        </div>
    );
}

export default StateRevise;