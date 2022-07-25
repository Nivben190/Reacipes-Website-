import React from 'react'
import styled from "styled-components"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 import { Link } from 'react-router-dom';
const NavbarComponent = () => {
  const MyNav=styled(Navbar)`
  background-color:rgba(0,0,0,0.5);
  height: 80px;
  font-size: 20px;
  color: white;  
  ` 
  const MyNavLink=styled(Link)`
  font-size: 20px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.2s ease-in;
  text-decoration: none;
  margin-left: 40px;
  &:hover
{
  color: orange;
}

  ` 

const MyNavBrand=styled(Navbar.Brand)`
font-size: 30px;
color: white;
 margin-right: 30px;
 transition: 0.2s ease-in;
 font-weight: bold;

 &:hover
{
  color: white;
  transform: scale(1.1, 1.1);

}
` 


  return (
    <MyNav expand="md">
      <Container>
        <MyNavBrand href="/">Home Chef</MyNavBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <MyNavLink  as={Link} to="/">Home</MyNavLink>
            <MyNavLink  as = {Link} to="/recipes">Recipes</MyNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </MyNav>  )
}

export default NavbarComponent