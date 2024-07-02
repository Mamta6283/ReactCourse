
//state-it is memory of a component 

import { useState } from "react"

function ReactState(){
   //usestate (hook) is used to create a state of the componnent
   //syntax of useState hook 
   //const[variable,udateFunction]=useState(intial value,array value ,string)

   const [title,setTitle]=useState("react state using usestate hook");

    //  let pageTitle="react state"

    //what is arrow function?
    const changeTitle=()=>{

        //this will not work when we to change in html and we want to tell react this thing
        // console.log(pageTitle)
        // pageTitle="new react state"
        // console.log(pageTitle)
        setTitle("we have updated the react state ")
            }
            // const oldTitle=()=>{
            //  setTitle("old value")
            // }
            
        

    return(
        <>
        <h1>{title}</h1>
        {/* <h1>{title}</h1> */}
        <button onClick={changeTitle}>change title</button>
        {/* <button onClick={oldTitle}>old title</button> */}
       </>

    )
}
export default ReactState;

