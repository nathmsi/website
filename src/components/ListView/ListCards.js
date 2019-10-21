import React from "react";
import {
    MDBCol,
    MDBRow,
    MDBAnimation,
} from "mdbreact";

import Card from './Card'

const ListCard = ( { onSubmit } ) =>(
            <MDBRow id="categories">
                <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInLeft">
                        <Card title={'1'} Description={'qwerty'} onSubmit={onSubmit} />
                    </MDBAnimation>
                </MDBCol>
                <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInDown">
                        <Card title={'2'} Description={'qwerty'}  onSubmit={onSubmit} />
                    </MDBAnimation>
                </MDBCol>
                <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInLeft">
                        <Card title={'3'} Description={'qwerty'}  onSubmit={onSubmit} />
                    </MDBAnimation> 
                </MDBCol>
                <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInDown">
                        <Card title={'4'} Description={'qwerty'}  onSubmit={onSubmit} />
                    </MDBAnimation>
                </MDBCol>
                <MDBCol md="4">
                    <MDBAnimation reveal type="fadeInLeft">
                        <Card title={'5'} Description={'qwerty'}  onSubmit={onSubmit} />
                    </MDBAnimation>
                </MDBCol>
            </MDBRow>
)

export default ListCard;
