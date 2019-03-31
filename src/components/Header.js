import React from 'react'
import { connect } from 'react-redux'
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Button } from 'react-bootstrap'
import logout from '../store/actions/logout'

function Header({ isLogedIn, logout }) {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="mb-5">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>React-task</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <IndexLinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </IndexLinkContainer>
            <LinkContainer to='/news'>
              <Nav.Link>News</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/profile'>
              <Nav.Link>Profile</Nav.Link>
            </LinkContainer>
            {
              !isLogedIn
                ? (
                  <LinkContainer to='/login'>
                    <Nav.Link>Login</Nav.Link>
                  </LinkContainer>
                )
                : (
                  <Button
                    className="ml-4"
                    onClick={logout}
                    variant="outline-light">
                    Log out
                  </Button>
                )
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

const mapStateToProps = (state) => {
  return {
    isLogedIn: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
