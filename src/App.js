import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from './components/common/Navbar'
import Home from './components/common/Home'
import ClubsIndex from './components/clubs/ClubsIndex'
import Login from './auth/Login'
import Register from './auth/Register'
import InteractiveMap from './components/maps/InteractiveMap'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/clubs">
          <ClubsIndex />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/map">
          <InteractiveMap />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
