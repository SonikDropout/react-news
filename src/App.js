import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Profile from './components/Profile'
import News from './components/News'
import Header from './components/Header'
import Login from './components/Login'
import noMatch from './components/noMatch'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <HashRouter>
      <Header />
      <Container>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/news' component={News} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route component={noMatch} />
        </Switch>
      </Container>
    </HashRouter>
  )
}

export default App