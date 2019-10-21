import React, { Component } from "react";
import { HashRouter } from "react-router-dom";

import Navigation from '../Navigation';
import Routes from "../Routes";

import { withAuthentication } from '../Session';
import LoadingOverlay from 'react-loading-overlay';
import Footer from '../Footer'


import './App.css'

class App extends Component {

  state = {
    isLoading : false,
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
   

    return (
      <HashRouter basename='/'>
        <div className="flyout">
          <Navigation toggleCollapse={this.toggleCollapse} closeCollapse={this.closeCollapse}  />

          <LoadingOverlay
            active={this.state.isLoading}
            spinner={<div className="spinner-border text-dark" role="status"></div>}
            classNamePrefix='MyLoader_'
            text={<p className="font-weight-bold bg-dark">Loading...</p>}
          >
            <main style={{ marginTop: "4rem" }}>
              <br/>
                <div className="mt-3 mb-5">
                  
                          <Routes openLoadingOverlay={this.openLoadingOverlay} closeLoadingOverlay={this.closeLoadingOverlay} />
                        
                </div>
            </main>
          </LoadingOverlay>
          <Footer />
        </div>
        </HashRouter>
    );
  }
}



export default withAuthentication(App);
