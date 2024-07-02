import React from 'react';

function TableRow(props) {
    console.log(props.data)
    const {data}=props //we have to desructure any property we are sending here to access the data 
    const {rowClass}=props
    const {deleteEmp}=props
    return (
        
             <tr  className={rowClass}>
                            <td>{data.id}
                            </td>

                            <td>{data.name}
                            </td>

                            <td>
                                {data.salary}
                            </td>
                            <td>
                                {data.gender}
                            </td>
                            <td>
                                <button onClick={()=> { deleteEmp(data.id) }}>delete</button>
                            </td>
                        </tr>
        
    );
}

export default TableRow;

//productlist name component objects data list alg 