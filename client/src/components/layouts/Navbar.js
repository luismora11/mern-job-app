import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <NavbarContainer>
           <nav className="navbar navbar-expand-sm navbar-expand-md navbar-expand-lg">
  <Link className="navbar-brand" to="/">noXPrience</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className=" navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Find A Job <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/add-job">Post Job</Link>
      </li>
      
    </ul>
   
  </div>
</nav> 
        </NavbarContainer>
    )
}

export default Navbar

//MAIN NAVBAR CONTAINER

const NavbarContainer = styled.div`
 background: #343a40; 
.nav-link {
    color: #fff !important;
    &:hover {
        color: #6eaac4 !important;
    }
}

.navbar-brand{
    font-size: 2em;
    font-weight: 500;
}



`;
