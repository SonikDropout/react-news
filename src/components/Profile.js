import React from 'react'
import { Row, Image, Col } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

function Profile({ isLogedIn }) {
  if (!isLogedIn) return <Redirect to='/login' />
  return (
    <Row>
      <Col md={6}>
        <Image src="https://via.placeholder.com/400" rounded fluid />
      </Col>
      <Col md={6}>
        <h4>Jack Johnson</h4>
        <small className='text-muted'>San Francisco, USA</small>
        <p>email@example.com<br /> June 02, 1988</p>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state) => {
  return {
    isLogedIn: state.login
  }
}

export default connect(mapStateToProps)(Profile)
