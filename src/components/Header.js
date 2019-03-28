import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Row } from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="mb-5">
      <Container>
        <Row>
          <Navbar.Brand href="#home">React-task</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to='/'>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/news'>
                <Nav.Link>News</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/profile'>
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
  )
}

export default Header
