//component in react - there are two types of components
// class based component :class based components are not used now
//functional based component :now react focuses only on functional component
//component should be pascal case,it should return html or xml 
//babel is a javascript compiler here code is excueted by babel
//here closing tag is imp in every tag 

import React, { useState }  from "react";
import './index.css'

// import Header from "./component/Header";
// import Main from "./component/Main";
// import ReactState from "./component/ReactState";
// import Counter from "./component/Counter";
// import StudentList from "./component/StudentList";
import EmployeeList from "./component/EmployeeList";
import StateRevise from "./component/StateRevise";
import MultiFormStep from "./component/MultiFormStep";
import Step1 from "./component/Step1";
import Step2 from "./component/Step2";
import Step3 from "./component/Step3";
import { DataProvider } from "./DataContext";


// import ReactProps from "./component/ReactProps";
// import InputComponent from "./component/InputComponent";
// import ProductList from "./component/ProductList";
// import Form from "./component/Form";
// import Toaster from "./component/Toaster";
// import ReactChild from "./component/ReactChild";

function App(){
const [appData,setData]=useState("app state")
  return (
   
    //you have to use parent element here it will not work without any parent element
    //and here fragment can be used to make easy your code there are many type of fragments<></>,<React.fragment> </React.fragment>,<fragment></fragment>
    //react fragment will used but you can return as empty tag<></>
//  <React.Fragment>  </React.Fragment> //for using this you have to import react 
 <>

         <DataProvider>
           <EmployeeList />
         </DataProvider>
                
  {/* <h1>hello ,this is react app</h1>
  <h1>hello</h1>
   */}
  {/* <Header></Header> */}
  {/* <Main></Main> */}
  {/* <ReactState></ReactState> */}
  {/* <Counter></Counter> */}
  {/* <StudentList></StudentList> */}
  

  

  {/* <ReactProps app={appData}></ReactProps> */}
  {/* <InputComponent></InputComponent> */}
  
  {/* <ReactChild></ReactChild> */}

  {/* <ProductList></ProductList> */}
  {/* <Form></Form> */}

  {/* <Toaster></Toaster> */}
  <StateRevise></StateRevise>  
  <MultiFormStep></MultiFormStep>
 {/* <Step1></Step1> */}  
  
  </>
  
  

  )
}
export default App;