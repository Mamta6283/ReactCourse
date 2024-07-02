import React, { useState } from 'react';

function StudentList(props) {
    const data=[
        {
            id:1, name:"mamta", fees:3000, gender:"female", course:"java"
        },

        {
            id:2,name:"anter",fees:25000, gender:"female",course:"mern"
        }
        ,        
        {
            id:3, name:"raman",fees:1000,gender:"female",course:"php"
        },
        {
            id:4, name:"mahima",fees:29000,gender:"female",course:"js"

        }
        ,
        {
            id:5,name:"rahul", fees:34000,  gender:"male",  course:"react js"
        }

    ]
 const[studentData,setData]=useState(data)
 
 

 

    
    return  (
        <div>
            <table border="3px">
                <thead>
                    <tr style={{color:"red",fontSize: 200+"%",backgroundColor:"pink"}}>
                        <td>
                            <th>id</th>
                            <th>Name</th>
                            <th>fees</th>
                            <th >gender</th>
                            <th>course</th>
                        </td>
                    </tr>
                </thead>
            </table>
            {
                studentData.map((item)=>{

                    if(item.fees>3000){
                    return (
                         //key:unique data ko finde krne liye agr main array mein update krenge to update hoga to rendeer hoga data but when we provide key then phir particular data mein jake hi update kerga
                        <tr key={item.id} className={item.gender=="female"?"bg-secondary":"bg-primary"} border="2px"  >
                        {/* // <tr key={item.id} className={item.fees<=3000?"":}  > */}
                        
                            <td>
                                {item.id}
                            </td> 
                            <td>
                                {item.name}
                            </td>

                            
                               
                            {/* <td >{item.fees<=3000?"":item.fees}</td> */}
                            <td >{item.fees}</td>
                                
                           
                           
                        <td>{item.gender}</td>
                        <td>{item.course}</td>
                        </tr>
                    )
                }
                })

            }

            
        </div> 
    );
}

export default StudentList;