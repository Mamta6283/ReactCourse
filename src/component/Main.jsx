import { useState } from "react"

function Main(){
//    let isVisible=false;
//instead of using ternary operator  we are using usestate

const [isVisible,setVisible]=useState(false)
const handleVisible=()=>{
    setVisible(!isVisible)
}
return(

        <>
         <h2>main</h2>

        {/* ternary operator */}
         {/* syntax: condition ?if true then this:otherwisee this */}
         {
         isVisible?<h3>i am paragraph </h3>:" "
         
         } 
         <button onClick={handleVisible}>handle</button> 
         </>
    )
}

export default Main 