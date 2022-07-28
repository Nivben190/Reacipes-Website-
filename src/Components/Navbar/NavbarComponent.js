import React from 'react'
import styles from "./index.module.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
 import { Link } from 'react-router-dom';
const NavbarComponent = () => {

  return (
    <Navbar className={styles.nav} expand="md">
      <Container>
        <Navbar.Brand className={styles.navBrand} href="/">Home Chef</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className={styles.navLink}  as={Link} to="/">Home</Nav.Link>
            <Nav.Link className={styles.navLink} as = {Link} to="/recipes">Recipes</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>  )
}

export default NavbarComponent