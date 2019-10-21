import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import {  MDBCard,  MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';


const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { passwordOne } = this.state;

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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
    const { passwordOne, passwordTwo, error } = this.state;


    return (
      <MDBCard>
        <MDBCardBody className="mx-2">
          <div className="text-center">
            <h3 className="dark-grey-text mb-5">
              <strong>Change My Password</strong>
            </h3>
          </div>
          <MDBInput
            label="new password"
            group
            value={passwordOne}
            onChange={this.onChange}
            type="text"
            name="passwordOne"
            validate
            error="wrong"
            success="right"
          />
          <MDBInput
            label="confirm new password"
            group
            value={passwordTwo}
            onChange={this.onChange}
            type="text"
            name="passwordTwo"
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
              New Password
          </MDBBtn>
          </div>
          {error && <p>{error.message}</p>}
        </MDBCardBody>
        {error && <p>{error.message}</p>}
      </MDBCard>
    );
  }
}

export default withFirebase(PasswordChangeForm);
