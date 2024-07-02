function Header(){
//this is dynamic value you can use it in your jsx or component
    let headerTitle="header component"
    let headerClass="bg-secondary"
    
//ternary "?"
//condition?"true statment":"false statement"
    let data=1<2?"yes":"no"
    console.log(data)
    const styleObj={
        color:"white",
        backgroundColor:"red",
        fontSize: 200+"%"  // here we have to mention like this when we are giving a size to any font 

    }

    
    return(
        //all properties and code will return in jsx form 
        <div className={headerClass}>
            <h1>this new component</h1><br></br>
            <div className={2<4?"bg-primary":"bg-secondary"}>
            <h1>{headerTitle}</h1>
            </div>
            {/* inner curly braces are indication of object which we are creating */}
            <p style={{color:"white",fontSize: 200+"%"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, aliquid eum modi quia tempora suscipit, enim, incidunt ullam magni ratione dicta cum! Nostrum cum mollitia omnis ratione, dolore eaque atque!
            </p>
            <p style={styleObj}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus temporibus quibusdam iste, minima corrupti incidunt. Rerum incidunt animi sapiente fugiat dicta eum non, alias quis cumque, distinctio inventore, cum architecto.</p>
        </div>
    )
}
export default Header