import React, { Children } from 'react';
import ReactChild from './ReactChild';
import InputComponent from './InputComponent';

function ReactProps(props) {
    return (
        <div>
            <h1>this is reactprops</h1>
            <h3>{props.app}</h3>
            {/* iske ander array object string function bhej skete hai */}
            <ReactChild title="react child1"  showParagraph={true}/>
            <ReactChild title="react child2"/>
            <ReactChild title="react child3"/>
            <InputComponent type="text">
            
                {Children}
                
                 {/* //when we want to send no of html of any componennt after property then props have default property that is children property  */}
            </InputComponent>
            <InputComponent type="radio"></InputComponent>
        </div>
    );
}

export default ReactProps;