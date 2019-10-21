import React, { Component } from 'react';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { MDBFreeBird, MDBCol, MDBRow, MDBCardBody } from 'mdbreact';

import SingIn from './SignIn'



const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
};

class SignInFormBase extends Component {

  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }


  onSubmit = async (event) => {
    this.props.openLoadingOverlay()
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        if (this._isMounted === true) {
          this.setState({ ...INITIAL_STATE });
        }
        this.props.closeLoadingOverlay()
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        if (this._isMounted === true) {
          this.setState({ error })
        }
        this.props.closeLoadingOverlay()
        if (error.message !== undefined) {
          alert(error.message)
        }
      })


    event.preventDefault();
  }

  handleGoogleSingIn = event => {
    this.props.openLoadingOverlay()
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.user.displayName,
            email: socialAuthUser.user.email,
            roles: {},
          });
      })
      .then(() => {
        this.props.closeLoadingOverlay()
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.props.closeLoadingOverlay()
        if (this._isMounted === true) { this.setState({ error }); }
      });
    event.preventDefault();
  }

  handleFacebookSingIn = event => {
    this.props.openLoadingOverlay()
    this.props.firebase
      .doSignInWithFacebook()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.additionalUserInfo.profile.name,
            email: socialAuthUser.additionalUserInfo.profile.email,
            roles: {},
          });
      })
      .then(() => {
        this.props.closeLoadingOverlay()
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.props.closeLoadingOverlay()
        if (this._isMounted === true) { this.setState({ error }); }
      });
    event.preventDefault();
  };

  handleTwitterSingIn = event => {
    this.props.openLoadingOverlay()
    this.props.firebase
      .doSignInWithTwitter()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.additionalUserInfo.profile.name,
            email: socialAuthUser.additionalUserInfo.profile.email,
            roles: {},
          });
      })
      .then(() => {
        this.props.closeLoadingOverlay()
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.props.closeLoadingOverlay()
        if (this._isMounted === true) { this.setState({ error }); }
      });
    this.props.closeLoadingOverlay()
    event.preventDefault();
  };


  onChange = event => {
    if (this._isMounted === true) {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  render() {
    const { email, password, error } = this.state;
    if (error !== '')
      console.log(error)
    return (
      <MDBFreeBird>
        <MDBRow>
          <MDBCol md="6" lg="5" className="mx-auto float-none white z-depth-1 py-2 px-2">
            <MDBCardBody>
              <SingIn password={password} email={email} onChange={this.onChange} onSubmit={this.onSubmit}
                handleFacebookSingIn={this.handleFacebookSingIn} handleTwitterSingIn={this.handleTwitterSingIn} handleGoogleSingIn={this.handleGoogleSingIn} />
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBFreeBird>
    )
  }

}


export default withFirebase(SignInFormBase)

