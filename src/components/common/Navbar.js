import { NavLink } from 'react-router-dom'
import 'materialize-css'
import { Navbar, NavItem } from 'react-materialize'

function Nav () {
  return (

    <Navbar
      alignLinks="right">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/clubs" className="right">Clubs</NavLink>
      <NavItem to="/map">Map</NavItem>
      <NavItem to="/login">Login</NavItem>
      <NavItem to="/register">Register</NavItem>
    </Navbar>
  )
}

export default Nav

// Add a userIsAuth ==> then show Logout onClick button