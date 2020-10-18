import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <MainContainer><h1>Get A Job Without Experience</h1></MainContainer>
    )
}

export default Header;



//MAIN CONTAINER

const MainContainer = styled.header`
background: url(../../images/header.jpg)no-repeat center/cover;
height: 10rem;
position: relative;
text-align: center;


h1{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  font-weight: 900;
    
}

`;
