import React from 'react';

function InputComponent(props) {
    //object mein se property ko bhar nikalana
    const{type}=props //this is destructure
    return (
        <>
            {/* <h3>this is input type</h3> */}
            <input type={type}/>

            <p>user required </p>
            <p>user3</p>
            
        </>
    );
}

export default InputComponent;