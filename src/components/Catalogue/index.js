import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import { withAuthorization } from '../Session';

import { ListCards } from '../ListView'

import {
    MDBContainer, MDBModal, MDBModalBody, MDBBtn
} from "mdbreact";

class Home extends Component {

    state = {
        loading: false,
        computers: [],
        name: '',
        brand: '',
        price: '',
        modal: false
    }

    componentDidMount() {
    }


    componentWillUnmount() {

    }


    getData = () => {

    }


    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };



    SetModal = () => {
        this.setState({ modal: !this.state.modal });
    }


    render() {
        return (
            <MDBContainer>
                <h2 className="text-center my-5 font-weight-bold">
                    Why is it so great?
                </h2>
                <p className="text-center text-muted mb-1">
                    Google has designed a Material Design to make the web more
                    beautiful and more user-friendly.
                </p>
                <p className="text-center text-muted mb-1">
                    Twitter has created a Bootstrap to support you in faster and
                    easier development of responsive and effective websites.
                </p>
                <p className="text-center text-muted">
                    We present you a framework containing the best features of
                    both of them - Material Design for Bootstrap.
                </p>
                <hr className="my-5" />
                <ListCards onSubmit={this.SetModal} />
                <MDBModal
                    isOpen={this.state.modal}
                    toggle={this.SetModal}
                    frame
                    position="top"
                >
                    <MDBModalBody className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         <MDBBtn color="secondary" onClick={this.SetModal}>
                            Close
                        </MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalBody>
                </MDBModal>

            </MDBContainer>
        );
    }

}






const condition = authUser => !!authUser

export default withFirebase(withAuthorization(condition)(Home));
