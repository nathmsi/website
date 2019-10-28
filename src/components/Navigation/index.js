import React from 'react';

import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink,
  MDBNavbarToggler, MDBCollapse
} from "mdbreact";

import SignOutButton from '../SignOut';
import { SignInButton } from '../SignOut';

import * as ROUTES from '../../constants/routes';

import { AuthUserContext } from '../Session';

const Navigation = ({ toggleCollapse, closeCollapse, collapseID }) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ?
          <NavigationAuth toggleCollapse={toggleCollapse} closeCollapse={closeCollapse} collapseID={collapseID} email={authUser.email} />
          :
          <NavigationNonAuth toggleCollapse={toggleCollapse} closeCollapse={closeCollapse} collapseID={collapseID} />
      }
    </AuthUserContext.Consumer>
  </div>
);

const NavigationAuth = ({ toggleCollapse, closeCollapse, collapseID, email }) => (
  <MDBNavbar color="blue-gradient" dark expand="md" fixed="" scrolling>
    <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
      <strong className="align-middle">Web Site</strong>
    </MDBNavbarBrand>
    <MDBNavbarToggler
      onClick={toggleCollapse("mainNavbarCollapse")}
    />
    <MDBCollapse
      id="mainNavbarCollapse"
      isOpen={collapseID}
      navbar
    >
      <MDBNavbarNav left>
        <MDBNavItem>
          <MDBNavLink
            exact
            to={ROUTES.HOME}
            onClick={closeCollapse("mainNavbarCollapse")}
          >
            <strong>Home</strong>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            exact
            to={ROUTES.RealTime}
            onClick={closeCollapse("mainNavbarCollapse")}
          >
            <strong>Real time db</strong>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            exact
            to={ROUTES.COMPUTERS}
            onClick={closeCollapse("mainNavbarCollapse")}
          >
            <strong>Computers</strong>
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            exact
            to={ROUTES.CATALOGUE}
            onClick={closeCollapse("mainNavbarCollapse")}
          >
            <strong>Catalogue</strong>
          </MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
      <MDBNavbarNav right>
        <MDBNavItem >
          <MDBNavLink
            to={ROUTES.ACCOUNT}
          >
            {' ' + email}
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem >
          <MDBNavLink
            to={ROUTES.SIGN_IN}
          >
            <SignOutButton/>
          </MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>

);

const NavigationNonAuth = ({ toggleCollapse, closeCollapse, collapseID }) => (
  <MDBNavbar color="blue-gradient" dark expand="md" fixed="" scrolling>
    <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
      <strong className="align-middle">Web Site</strong>
    </MDBNavbarBrand>
    <MDBNavbarToggler
      onClick={toggleCollapse("mainNavbarCollapse")}
    />
    <MDBCollapse
      id="mainNavbarCollapse"
      isOpen={collapseID}
      navbar
    >
      <MDBNavbarNav left>
        <MDBNavItem>
          <MDBNavLink
            exact
            to="/"
            onClick={closeCollapse("mainNavbarCollapse")}
          >
            <strong>Home</strong>
          </MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
      <MDBNavbarNav right>
        <MDBNavItem >
          <MDBNavLink
            to='/signin'>
            <SignInButton />
          </MDBNavLink>
        </MDBNavItem>
      </MDBNavbarNav>
    </MDBCollapse>
  </MDBNavbar>
);

export default Navigation;

