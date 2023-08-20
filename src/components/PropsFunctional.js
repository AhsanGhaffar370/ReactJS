import React from 'react'
import "./PropsFunctional.css"

function PropsFunctional(myprops) {
    let textColor = myprops.isRed ? "redColor" : "blueColor";
    

    const font1={
        fontSize:"45px", 
        fontWeight: 800,
        color: "red",
        // backgroundColor: "black"
        
  
      }
      
    return (
        <React.Fragment>
        
            <p className="bg-warning font-weight-bold">PropsFunctional , Global Css, Module.css, child props</p>
            <p  style={font1}>Inline Styling</p>
            <h3 className={`${textColor} fontSize font-weight-normal`}> Access Props in Functional Components </h3> <br></br>
            <span className="font-weight-bold">({myprops.name}-{myprops.last}-{myprops.abc}-{myprops.children[0]}-{myprops.children[1]}) </span>
            
            {myprops.childrens}
            
      <span className="AppyGlobal">child1</span>
        {/* <span className={AppStyle.AppyLocal}>child2</span> */}
        </React.Fragment>
    )
}

export default PropsFunctional
