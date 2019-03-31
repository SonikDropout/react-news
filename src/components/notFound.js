import React from 'react'
import { Row, Col } from 'react-bootstrap'

function noMatch() {
  return (
    <Row className="pt-5">
      <Col>
        <h1>Oops!</h1>
        <h2>404 Not Found</h2>
        <p>Sorry, an error has occured, requested page not found!</p>
      </Col>
    </Row >
  )
}

export default noMatch
