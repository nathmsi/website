
import React  from "react";

import {
    MDBFooter,
  } from "mdbreact";

const Footer = ( ) =>{
    return(
        <MDBFooter color="blue-gradient">
        <p className="footer-copyright mb-0 py-3 text-center">
          &copy; {new Date().getFullYear()} Copyright:
          <a href="https://www.MDBootstrap.com">  nathanmsika.com </a>
        </p>
      </MDBFooter>
    )
}

export default Footer