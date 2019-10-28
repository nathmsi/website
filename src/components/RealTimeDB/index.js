import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import { MDBInput, MDBBtn, MDBListGroupItem, MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBJumbotron, MDBIcon } from 'mdbreact';

import { withAuthorization } from '../Session';

class Home extends Component {

  state = {
    loading: true,
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
    if (this.state.message !== '') {
      let messages = this.state.messages
      messages.push(this.state.message)
      this.setState({ messages, message: '' })
    }
  }

  handleKeyUp = event => {
    if (event.key === 'Enter') {
      this.addItem()
    }
  }

  handleDeleteMessage = (key) => {
    let messages = this.state.messages
    messages.splice(key, 1)
    this.setState({ messages })
  }

  render() {
    const { messages, message, loading } = this.state
    return (
      <MDBAnimation type="zoomIn" duration="500ms">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="12" className="mt-3 mx-auto">
              <MDBJumbotron>
                <h1 className="text-center">
                  <MDBIcon icon="window-restore" className="indigo-text mr-2" />
                  Real Time Database {loading === true && <div class="spinner-border text-primary" role="status"><span class="sr-only">Loading...</span> </div>}
                </h1>
                {
                  loading === false &&
                  
                    <div class="row">
                      <div class="col">
                        {
                          messages.map((message, i) => <Message key={i} handleDeleteMessage={this.handleDeleteMessage} i={i} message={message} />)
                        }
                      </div>
                      <div class="col">
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
                      </div>
                    </div>
                }
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBAnimation>

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
