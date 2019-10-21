import React from 'react';
import { withFirebase } from '../Firebase';
// import {
//    MDBBtn
// } from "mdbreact";
const SignOutButton = ({ firebase }) => (
  <div  onClick={firebase.doSignOut} >Sign Out</div>
);

const SignInButton = () => (
  <div>Sign In</div>
);

export {
  SignInButton
}


export default withFirebase(SignOutButton);
