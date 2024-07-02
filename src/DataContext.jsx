import { createContext } from "react";


const DataContext=createContext();

export const DataProvider=({children})=>{   //this de-structure of props
    return(
        <DataContext.Provider value={"hello context"}>
           {children}  
        </DataContext.Provider>  
        //{children is default properpty of props }
    )
}


export default DataContext;  

