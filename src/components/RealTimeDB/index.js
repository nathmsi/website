import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import { MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBListGroupItem } from 'mdbreact';

import { withAuthorization } from '../Session';

class Home extends Component {

  state = {
    loading: false,
    messages: [],
    message: ''
  }

  componentDidMount = async () => {
    this.props.firebase.firebaseSyncState('/messages', {
      context: this,
      state: 'messages',
      asArray: true
    })
    this.setState({ loading: false })
  }

  componentWillUnmount() {

  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };



  addItem = () => {
    this.props.openLoadingOverlay()
    if (this.state.message !== '') {
      this.setState({ loading: true });
      let messages = this.state.messages
      messages.push(this.state.message)
      this.setState({ messages, message: '' })
      this.setState({ loading: false });
    }
    this.props.closeLoadingOverlay()
  }

  handleKeyUp = event => {
    if (event.key === 'Enter') {
      this.addItem()
    }
  }

  handleDeleteMessage = (key) => {
    this.props.openLoadingOverlay()
    this.setState({ loading: true });
    let messages = this.state.messages
    messages.splice(key, 1)
    this.setState({ messages })
    this.setState({ loading: false });
    this.props.closeLoadingOverlay()
  }

  render() {
    const { messages, message } = this.state
    return (
      <MDBCard>
        <MDBCardBody className="mx-2">
          <div className="text-center">
            <h3 className="dark-grey-text mb-5">
              <strong> real time data base</strong>
            </h3>
          </div>
          <MDBInput
            label="Your messsage"
            group
            value={message}
            onChange={this.onChange}
            onKeyUp={this.handleKeyUp}
            type="text"
            name="message"
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
              onClick={this.addItem}>
              -add-message-
                </MDBBtn>
          </div>
        </MDBCardBody>
        {
          messages.map((message, i) => <Message key={i} handleDeleteMessage={this.handleDeleteMessage} i={i} message={message} />)
        }
      </MDBCard>
    );
  }

}

const Message = ({ handleDeleteMessage, message, i }) => (
  <MDBListGroupItem className="d-flex justify-content-between align-items-center">
    {message}
    <MDBBtn color="primary" onClick={() => handleDeleteMessage(i)} size="sm">
      x
    </MDBBtn>
  </MDBListGroupItem>
)


const condition = authUser => !!authUser


export default withFirebase(withAuthorization(condition)(Home));
//export default withFirebase(Home);
