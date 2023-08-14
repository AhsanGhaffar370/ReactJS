import React from 'react';

// // Functional component
// function FirstComp() {
//   return (
//       <h1>First Functional Component</h1>
//   );
// }

// export default FirstComp;

/////////
// OR
////////

// // Functional component
// const FirstComp=() => {
//   return (
//       <h1>First Functional Component</h1>
//   );
// }

// export default FirstComp;

/////////
// OR
////////

// // Functional component
// export const FirstComp=() => {
//   return (
//       <h1>First Functional Component</h1>
//   );
// }

/////////
// OR
////////

// // Functional component
const name = <span>Hello</span>;
const newElement = React.createElement('h2',{className:'h2_element'}, "my h2 heading");
const test= () => {
  alert("hello world!");
}
const yourAge= (age) => {
  if(age > 18) {
    return <span>Your are eligible</span>
  }
  else{
    return <span>Your are not eligible</span>
  }
}

export const FirstComp=(props) => {
  return (
    <div >
      <h1> First Functional Component {name} {props.firstName} {props.lastName ?? 'gafar'}</h1>
      {newElement}
      {props.children}
      <button onClick={test}>Click me</button>
      {yourAge(21)}
    </div>
  );
}
