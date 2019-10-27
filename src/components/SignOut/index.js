import React from 'react';
import { withFirebase } from '../Firebase';
// import {
//   MDBIcon
// } from "mdbreact";
const SignOutButton = ({ firebase }) => (
  // <div  onClick={firebase.doSignOut} >Sign Out</div>
  // <MDBBtn color="primary" onClick={firebase.doSignOut}  rounded>Primary</MDBBtn>
  <div  onClick={firebase.doSignOut} className="text-dark d-none d-md-inline">Sign Out</div>
);

const SignInButton = () => (
  <div>Sign In</div>
);

export {
  SignInButton
}


export default withFirebase(SignOutButton);
