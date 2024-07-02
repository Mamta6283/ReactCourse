import React from 'react';

function ReactChild(props) {
    //props parameter is objectt props={ttile (key):"react child(value)"}
    //props are read only  property nname anyhting 
    //props can with parent to child when create any property and you want to access in different components then it is used there 
    //props mein default property hoti hai child 
    return (
        <div>
            <h3>{props.title}</h3>
            {
                props.showParagraph?
                <p>this is paragraph</p>
                :""
                 }
        </div>
    );
}

export default ReactChild;