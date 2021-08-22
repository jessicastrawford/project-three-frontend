import { NavLink } from 'react-router-dom'
import 'materialize-css'
// import { Navbar } from 'react-materialize'

function Nav () {
  return (

    <Nav
  
      alignLinks="right">
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/clubs" className="right">Clubs</NavLink>
      <NavLink to="/map">Map</NavLink>
      <NavLink to="/register">Register</NavLink>
    </Nav>
  )
}

export default Nav

// Add a userIsAuth ==> then show Logout onClick button