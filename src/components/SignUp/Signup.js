import React from "react";
import { MDBModalFooter, MDBCard, MDBCardBody, MDBInput, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom';
import '../SignIn/Signin.css'
const FormPage = ({ passwordTwo, username, changeHandler, passwordOne, email, onSubmit , isLoading }) => {
    return (
        <MDBCard>
            <MDBCardBody className="mx-2">
                <div className="text-center">
                    <h3 className="dark-grey-text mb-5">
                        <strong>Register</strong>
                    </h3>
                </div>
                <MDBInput
                    label="Your username"
                    group
                    value={username}
                    onChange={changeHandler}
                    type="text"
                    name="username"
                    validate
                    error="wrong"
                    success="right"
                />
                <MDBInput
                    label="Your email"
                    group
                    value={email}
                    onChange={changeHandler}
                    type="email"
                    name="email"
                    validate
                    error="wrong"
                    success="right"
                />
                <MDBInput
                    label="Your password"
                    group
                    value={passwordOne}
                    onChange={changeHandler}
                    type="password"
                    name="passwordOne"
                    validate
                    containerClass="mb-0"
                />
                <MDBInput
                    label="Confirm Your password"
                    group
                    value={passwordTwo}
                    onChange={changeHandler}
                    type="password"
                    name="passwordTwo"
                    validate
                    containerClass="mb-0"
                />

                <div className="text-center mb-3">
                    <MDBBtn
                        type="button"
                        gradient="blue"
                        rounded
                        className="btn-block z-depth-1a"
                        onClick={onSubmit}
                    >
                        {
                            isLoading === false ?
                                <strong>Register</strong>
                                :
                                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        }
                    </MDBBtn>
                </div>

            </MDBCardBody>
            <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p>
                    You have an account? <Link to='/signin'>Sign In</Link>
                </p>
            </MDBModalFooter>
        </MDBCard>

    )
}

export default FormPage;