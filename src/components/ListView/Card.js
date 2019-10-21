import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText  , MDBBtn } from 'mdbreact';

const Card = ( { title , Description  , onSubmit} ) => {
  return (
    <MDBCard cascade className="my-3 grey lighten-4">
      <MDBCardImage
        cascade
        className="img-fluid"
        src="https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg"
      />
      <MDBCardBody cascade className="text-center">
        <MDBCardTitle>
          <strong>{title}</strong>
        </MDBCardTitle>
        <MDBCardText>
          {Description}
                              </MDBCardText>
        <MDBBtn
          tag="button"
          color="mdb-color"
          className="btn btn-outline-mdb-color btn-sm btn-rounded d-inline"
          onClick={onSubmit}
        >
          More
                              </MDBBtn>
      </MDBCardBody>
    </MDBCard>
  )
}

export default Card;