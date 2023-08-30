
import React, { Component } from 'react';


// // Class component
// import React, { Component } from 'react';
// class FirstClassComp extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>First Class Component</h1>
//       </div>
//     );
//   }
// }
// export default FirstClassComp;

////////////
// OR
///////////

// Class component
export default class FirstClassComp extends React.Component {
  render() {
    return (
      <div>
        <h1>First Class Component {this.props.firstName} {this.props.lastName}</h1>
      </div>
    );
  }
}