import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const authenticatedOptions = (
  <Fragment>
    <Nav.Link href="#change-password">Change Password</Nav.Link>
    <Nav.Link href="#sign-out">Sign Out</Nav.Link>
  </Fragment>
)

const createOption = (
  <Fragment>
    <Nav.Link href="#create-products">Create Product</Nav.Link>
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <Nav.Link href="#sign-up">Sign Up</Nav.Link>
    <Nav.Link href="#sign-in">Sign In</Nav.Link>
  </Fragment>
)

const alwaysOptions = (
  <Fragment>
    <Nav.Link href="#/products">Reptiles</Nav.Link>
    <Nav.Link href="#/merch">Merch</Nav.Link>
    <Nav.Link href="#/animal-care">Animal Care</Nav.Link>
    <Nav.Link href="#/about">About Us</Nav.Link>
  </Fragment>
)

const Header = ({ user }) => (
  <Navbar bg="dark" variant="dark" expand="md">
    <Navbar.Brand href="#">
      stardust-serpents
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
        { user && <span className="navbar-text mr-2">Welcome, {user.username}</span>}
        { alwaysOptions }
        { user ? authenticatedOptions : unauthenticatedOptions }
        { user && user.email === 'bri@alex' ? createOption : '' }
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
