import React, { useState } from 'react'
import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import login from '../store/actions/login'

function Login({ logUserIn, history, location }) {

  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault()
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    if (username === 'Admin' && password === '12345') {
      logUserIn()
      const { from } = location.state || { from: { pathname: '/' } }
      history.push(from)
    } else {
      setMessage('Имя пользователя или пароль введены не верно')
    }
  }

  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }} xl={{ span: 4, offest: 4 }}>
        <Card>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <h2 className="text-center">Log In</h2>
              <p className="text-danger">{message}</p>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" name="username" placeholder="Enter username" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logUserIn: () => dispatch(login())
  }
}

export default connect(null, mapDispatchToProps)(Login)
