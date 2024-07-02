import { useState } from "react"

function Counter(){

    const[count,setCount]=useState(0)
    const increasing=()=>{
        
        // setCount(count+1)
        // if(count>9) //if(count==10)
        //     {
        //         setCount(0)
        //     }
        // setCount(10)

        if(count<10){
            setCount(count+1)
        }
    }

    const decreasing=()=>{
        // setCount(count-1)
        // if(count==0){
        //     setCount(0)
        // }
        // setCount(0)

        if(count>0){
            setCount(count-1)
        }
    }
    return (
         <>
         <h2>{count}</h2>

        
         <button onClick={increasing}>increment</button>
        <button onClick={decreasing}>decrement</button>
        </>
    )
}
export default Counter