import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

import { withAuthorization } from '../Session';

import { DatatablePage } from '../ListView'

import { MDBContainer, MDBBtn, MDBInput } from "mdbreact";

class Home extends Component {

    state = {
        loading: true,
        computers: [],
        name: '',
        brand: '',
        price: ''
    }

    componentDidMount() {
        this.getData()
        //this.addItem()
    }


    componentWillUnmount() {

    }


    getData = () => {
        this.props.firebase.computers().get()
            .then(querySnapshot => {
                const computers = querySnapshot.docs.map(doc => doc.data());
                const data = {
                    columns: [
                        {
                            label: "Name",
                            field: "name",
                            width: 150,
                            attributes: {
                                "aria-controls": "DataTable",
                                "aria-label": "Name"
                            }
                        },
                        {
                            label: "brand",
                            field: "brand",
                            width: 270
                        },
                        {
                            label: "Price",
                            field: "price",
                            sort: "asc",
                            width: 100
                        }
                    ],
                    rows: computers
                }
                this.setState({ computers: data });
                this.setState({ loading: false });
            });
    }


    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };



    addItem = () => {
        const { name, brand, price } = this.state
        // Add a new document in collection "cities"
        this.props.firebase.computers().doc(new Date().getTime().toString()).set({
            name,
            brand,
            price
        })
            .then(() => {
                console.log("Document successfully written!");
                this.getData()
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }

    // handleKeyUp = event => {
    //     if (event.key === 'Enter') {
    //         this.addItem()
    //     }
    // }

    // handleDeleteMessage = (key) => {
    //     this.setState({ loading: true });
    //     let messages = this.state.messages
    //     messages.splice(key, 1)
    //     this.setState({ messages })
    //     this.setState({ loading: false });
    // }

    render() {
        const { loading, computers, name, brand, price } = this.state
        return (
            <>
                {
                    loading === true ?
                         <div className="text-center spinner-border" />
                        :
                        <>
                            <DatatablePage data={computers} />
                            <AddElement addItem={this.addItem} onChange={this.onChange} price={price} name={name} brand={brand} />
                        </>
                }
            </>
        );
    }

}

const AddElement = ({ name, brand, price, onChange, addItem }) => (
    <MDBContainer>
        <MDBInput label="Name" group value={name} onChange={onChange} type="text" name="name" />
        <MDBInput label="brand" group value={brand} onChange={onChange} type="text" name="brand" />
        <MDBInput label="price" group value={price} onChange={onChange} type="text" name="price" />
        <MDBBtn
            type="button"
            gradient="blue"
            rounded
            onClick={addItem}
            className="btn-block "
        >
            Add New Computer
                </MDBBtn>
    </MDBContainer>
)





const condition = authUser => !!authUser

export default withFirebase(withAuthorization(condition)(Home));
