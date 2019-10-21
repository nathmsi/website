import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";


import RealTimeDB from '../RealTimeDB';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import NotFound from '../layouts/NotFound'
import Catalogue from '../Catalogue';
import Computes from '../Computes';
import * as ROUTES from '../../constants/routes';

class Routes extends React.Component {



  render() {
    return (
      <HashRouter basename='/'>
        <Switch>
          <Route exact path={ROUTES.RealTime} component={(props) => <RealTimeDB  {...props} openLoadingOverlay={this.props.openLoadingOverlay} closeLoadingOverlay={this.props.closeLoadingOverlay} />} />
          <Route exact path={ROUTES.SIGN_UP} component={(props) => <SignUpPage {...props} openLoadingOverlay={this.props.openLoadingOverlay} closeLoadingOverlay={this.props.closeLoadingOverlay} />} />
          <Route exact path={ROUTES.SIGN_IN} component={(props) => <SignInPage {...props} openLoadingOverlay={this.props.openLoadingOverlay} closeLoadingOverlay={this.props.closeLoadingOverlay} />} />
          <Route exact path={ROUTES.PASSWORD_FORGET} component={(props) => <PasswordForgetPage {...props} openLoadingOverlay={this.props.openLoadingOverlay} closeLoadingOverlay={this.props.closeLoadingOverlay} />} />/>
        <Route exact path={ROUTES.CATALOGUE} component={(props) => <Catalogue {...props} openLoadingOverlay={this.props.openLoadingOverlay} closeLoadingOverlay={this.props.closeLoadingOverlay} />} />/>
        <Route exact path={ROUTES.COMPUTERS} component={(props) => <Computes {...props} openLoadingOverlay={this.props.openLoadingOverlay} closeLoadingOverlay={this.props.closeLoadingOverlay} />} />
          <Route exact path={ROUTES.HOME} component={(props) => <HomePage {...props} openLoadingOverlay={this.props.openLoadingOverlay} closeLoadingOverlay={this.props.closeLoadingOverlay} />} />
          <Route exact path={ROUTES.ACCOUNT} component={(props) => <AccountPage {...props} openLoadingOverlay={this.props.openLoadingOverlay} closeLoadingOverlay={this.props.closeLoadingOverlay} />} />
          <Route exact path={ROUTES.ADMIN} component={(props) => <AdminPage {...props} openLoadingOverlay={this.props.openLoadingOverlay} closeLoadingOverlay={this.props.closeLoadingOverlay} />} />
          <Route render={NotFound} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Routes;
