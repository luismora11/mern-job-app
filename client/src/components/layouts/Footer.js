import React from 'react'
import styled from 'styled-components';
const Footer = () => {
    return (
        <FooterContainer  >
        <h2>Contact Information</h2>
        <a href="mailto:luis117mora@gmail.com">luis117mora@gmail.com</a>


        
       </FooterContainer>
    )
}

export default Footer


// FOOTER CONTAINER

const FooterContainer = styled.footer`
background: #343a40;
position: fixed;
left: 0;
bottom: 0;
width: 100%;
height: 5rem;
color: #fff;
text-align: center;
margin-top: 50px;

`;