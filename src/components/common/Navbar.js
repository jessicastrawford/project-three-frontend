import { NavLink } from 'react-router-dom'

function Navbar() {
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

export default Navbar