import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import ClubsIndex from './components/clubs/ClubsIndex'
import ClubShow from './components/clubs/clubShow'
import Login from './auth/Login'
import Register from './auth/Register'
import InteractiveMap from './components/maps/InteractiveMap'
import About from './components/common/About'
import Footer from './components/common/Footer'
import PubShow from './components/pubs/PubsShow'
import PubForm from './components/pubs/PubForm'
import Profile from './components/user/UserProfileShow'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/clubs/:clubId/pubs/:pubId">
          <PubShow />
        </Route>
        <Route path="/clubs/:clubId/pubs/">
          <PubForm />
        </Route>
        <Route path="/clubs/:clubId">
          <ClubShow />
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
        <Route path="/about">
          <About />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
