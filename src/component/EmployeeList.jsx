import React, { useContext, useState } from "react";
import TableRow from "./TableRow";
import Details from "./Details";
import { AppContext } from "..";
import DataContext from "../DataContext";




function EmployeeList(props) {
  // here you can use usecontext to read the context which you are to sending to this component for connecting two component when we want to provide the information one component to another then we can use usecontext jis component se data provide krwana hai usko top level pe rakhna padega taki sabhi ko mil ske
  //  so thats why here using this export const AppContext=createContext(); we can create this in any component but it will work  with only its child

// const root = ReactDOM.createRoot(document.getElementById('root')); here first we have to import then 

//   <React.StrictMode> 
//     <AppContext.Provider value="hello"> 
//           <App/>
//     </AppContext.Provider>  
  const text=useContext(AppContext)
  console.log(text)

  const dataText=useContext(DataContext)
  
  console.log(dataText)
  const data = [
    { id: 1, name: "mamta", salary: 32000, gender: "female" },
    { id: 2, name: "sohit", salary: 20000, gender: "male" },
    { id: 3, name: "anter", salary: 43000, gender: "female" },
    { id: 4, name: "raman", salary: 10000, gender: "female" },
    { id: 5, name: "rohit", salary: 21000, gender: "male" },
    { id: 6, name: "rohit", salary: 21000, gender: "male" },
  ];

  const [emptData, setData] = useState(data); //this will return array list
  //this is callled destructing :array and object can be destructed
  //syntax =-array let [prop1,prop1,prop3....]=arrayname //sida hi value set ho jayegi apne index pe

  //when wee object destructed let {id,name}=objective
  //parent element ko child function mein excute krna we have learned today that we created a function into parent compoment and we used in child comp
  const[input,setInput]=useState(null)
  //  const [addDetails,setAddDetails]=useState(false)

  const inputHandler=(e)=>{
    let {name,value}=e.target
          setInput((prev)=>({
          ...prev,
           [name]:value,
           id:emptData[emptData.length-1].id+1
           //e.target.name:e.target.value you can write in this way
          }))
          }

          const submitDetails=()=>{
            setData((prevInput)=>([...prevInput,input])) 

          // setAddDetails(true)

          
        

          }
  
  const deleteEmp = (id) => {
    const filterAr = emptData.filter((data) => data.id !== id);
    setData(filterAr);
  };

 

  return (
    <div>
      {/* form */}
      <div>
        <label>Name:</label>
        <input type="text" name="name" placeholder="name" onChange={inputHandler}/><br></br>
        <label>Salary"</label>
        <input type="text" name="salary" placeholder="salary" onChange={inputHandler}/><br></br>
        <label>Gender:</label><br></br>
        <input type="radio" name="gender" value="male" onChange={inputHandler}/> Male
        <input type="radio" name="gender" value="female" onChange={inputHandler} />Female<br></br>
        <button type="submit" onClick={submitDetails} >Add Employee</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th> Name</th>
            <th> Salary</th>
            <th> Gender</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            //this is curly braces used because we are using js in html again
            emptData.map((item) => {
              return (
                <TableRow
                  key={item.id}
                  data={item}
                  rowClass={
                    item.gender === "male" ? "bg-secondary" : "bg-primary"
                  }
                  deleteEmp={deleteEmp}
                ></TableRow>
              );
            })
          }

        </tbody>
        
    
      </table>
    
  
    </div>
  );
}

export default EmployeeList;

