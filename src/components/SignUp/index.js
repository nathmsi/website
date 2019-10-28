import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import Signup from './Signup'

import { MDBFreeBird, MDBCol, MDBRow, MDBCardBody } from 'mdbreact';
const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
  isLoading : false 
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
    this.setState({ isLoading : true })
    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your Firebase realtime database
        this.props.firebase
          .user(authUser.user.uid)
          .set({
            username,
            email,
          })
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            this.setState({ isLoading : false })
            this.props.history.push(ROUTES.HOME);
          })
          .catch(error => {
            this.setState({ error });
            this.setState({ isLoading : false })
            alert(error.message)
          });
      })
      .catch(error => {
        this.setState({ error });
        this.setState({ isLoading : false })
        alert(error)
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isLoading
    } = this.state;


    return (
      <MDBFreeBird>
        <MDBRow>
          <MDBCol md="6" lg="5" className="mx-auto float-none white z-depth-1 py-2 px-2">
            <MDBCardBody>
              <Signup passwordTwo={passwordTwo} username={username} passwordOne={passwordOne} email={email} changeHandler={this.onChange} onSubmit={this.onSubmit} isLoading={isLoading} />
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBFreeBird>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);


export { SignUpLink };

export default withFirebase(SignUpFormBase)

