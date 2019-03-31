import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './components/Home'
import Profile from './components/Profile'
import News from './components/News/News'
import Header from './components/Header'
import Login from './components/Login'
import notFound from './components/notFound'
import PrivateRoute from './components/PrivateRoute'
import { Container } from 'react-bootstrap'

function App({ isLogedIn }) {
  return (
    <HashRouter>
      <Header />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/news' component={News} />
          <PrivateRoute authed={isLogedIn} path='/profile' component={Profile} />
          <Route path='/login' component={Login} />
          <Route component={notFound} />
        </Switch>
      </Container>
    </HashRouter>
  )
}

const mapStateToProps = (state) => ({
  isLogedIn: state.login
})

export default connect(mapStateToProps)(App) 