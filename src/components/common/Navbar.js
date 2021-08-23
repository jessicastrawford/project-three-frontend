import { NavLink } from 'react-router-dom'
import 'materialize-css'
// import { Navbar } from 'react-materialize'

function Nav () {
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/clubs">Clubs</NavLink>
        <NavLink to="/maps">Maps</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </nav>
  )
}

export default Nav

// Add a userIsAuth ==> then show Logout onClick button