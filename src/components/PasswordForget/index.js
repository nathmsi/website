import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {  MDBCard,  MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const PasswordForgetPage = () => (
  <div>
    
    <PasswordForgetForm />
  </div>
);



const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount = () =>{
    this.setState({
      email : this.props.email
    })
  }

  onSubmit = event => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;


    return (
      <MDBCard>
        <MDBCardBody className="mx-2">
        <div className="text-center">
            <h3 className="dark-grey-text mb-5">
              <strong>Password Forget</strong>
            </h3>
          </div>
          <MDBInput
            label="Your Email"
            group
            value={email}
            onChange={this.onChange}
            type="text"
            name="email"
            validate
            error="wrong"
            success="right"
          />

          <div className="text-center mb-3">
            <MDBBtn
              type="button"
              gradient="blue"
              rounded
              className="btn-block z-depth-1a"
              onClick={this.onSubmit}
            >
              Reset My Password
          </MDBBtn>
          </div>
          {error && <p>{error.message}</p>}
        </MDBCardBody>
      </MDBCard>

    );
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };
