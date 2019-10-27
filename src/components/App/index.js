import React, { Component } from "react";
import { HashRouter } from "react-router-dom";

import Navigation from '../Navigation';
import Routes from "../Routes";

import { withAuthentication } from '../Session';
import Footer from '../Footer'


import './App.css'

class App extends Component {

  state = {
    isLoading : false,
    collapseID: ""
  };



  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () => {
    window.scrollTo(0, 0);
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  };

  openLoadingOverlay = () => this.setState( { isLoading : true } )

  closeLoadingOverlay = () => this.setState( { isLoading : false } )


  

  render() {

    const overlay = (
      <div
        id="sidenav-overlay"
        style={{ backgroundColor: "transparent" }}
        onClick={this.toggleCollapse("mainNavbarCollapse")}
      />
    );

    const { collapseID } = this.state;

    return (
      <HashRouter basename='/'>
        <div className="flyout">
          <Navigation toggleCollapse={this.toggleCollapse} closeCollapse={this.closeCollapse} collapseID={collapseID}  />

            {collapseID && overlay}
            
            <main style={{ marginTop: "4rem" }}>
              <br/>                
                          <Routes openLoadingOverlay={this.openLoadingOverlay} closeLoadingOverlay={this.closeLoadingOverlay} />               
            </main>

          <Footer />
        </div>
        </HashRouter>
    );
  }
}



export default withAuthentication(App);
