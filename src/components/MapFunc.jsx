import React from 'react'

export default function MapFunc_InlineStyling() {

    let list1=[1,2];

    // Map functions
    let list2=list1.map(function(listItems) {
        return <li  key={listItems}>{listItems}</li>
    });
    console.log(list2);
    
    return (
        <div>
        <p className="bg-warning font-weight-bold">MapFunc</p>
            
            <h3>Print List using Map() function</h3>
            <ul>{list2}</ul>
        </div>
    )
}
