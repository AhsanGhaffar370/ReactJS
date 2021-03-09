import React from 'react'

export default function MapFunc_InlineStyling() {

    let list1=[1,2,3,4];

    // Map functions
    let list2=list1.map(function(listItems)
    {

        return <li  key={listItems}>{listItems}</li>
    });
    console.log(list2);
    

    const font1={
        fontSize:"45px", 
        fontWeight: 800,
        color: "red",
        // backgroundColor: "black"
        
  
      }
      
    
    return (
        <div>
        <p className="bg-warning font-weight-bold">MapFunc_InlineStyling</p>
            <p  style={font1}>Inline Styling</p>
            <h3>Print List using Map() function</h3>
            <ul>{list2}</ul>
        </div>
    )
}
