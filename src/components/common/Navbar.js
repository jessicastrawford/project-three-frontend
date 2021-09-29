import { NavLink } from 'react-router-dom'
import React from 'react'
import logo from '../../assets/Awaydays-1.png'
import { isAuthenticated, logout } from '../../lib/auth'
import { useHistory } from 'react-router'

function Nav () {

  const [show, setShow] = React.useState(false)
  const isLoggedIn = isAuthenticated()
  const history = useHistory()

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false)
      console.log(show)
    } else {
      setShow(true)
    }
  }


  // const changeBackground = () => {
  // console.log(window.scrollY) 
  //   if (window.scrollY >= 1) {
  //     setNavbar(true)
  //   } else {
  //     setNavbar(false)
  //   }
  // }
  

  // window.addEventListener('scroll', changeBackground)
  React.useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  const handleLogout = () => {
    logout()
    history.push('/')

  }


  return (
    // <nav className={navbar ? 'navbarMove active' : 'navbarMove'}>
    <nav className="nav">
      <div className="autohide navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/"><img className="logo" src={logo} alt="logo"/></NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><NavLink className="nav-link" to="/clubs">Clubs</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/profile">Profile</NavLink></li>
              {!isLoggedIn ? 
                <>
                  <li className="nav-item"><NavLink className="nav-link" to="/register">Register</NavLink></li>
                  <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
                </>
                :
                <li className="nav-item"><NavLink className="nav-link" to="/" onClick={handleLogout}>Logout</NavLink></li>
              }
            </ul>
          </div> 
        </div> 
      </div>
    </nav>
  )
}

export default Nav

// Add a userIsAuth ==> then show Logout onClick button
