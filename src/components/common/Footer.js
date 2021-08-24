<<<<<<< HEAD
function Footer() {
  return (
    <h1>This is the Footer</h1>
  )
}

export default Footer
=======
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <Link to="/about">Meet the team behind Away Days</Link>
        <div>
          <hr/>
          <ul>
            <li>
              {`© ${new Date().getFullYear()} Away Days`}
            </li>
            <li>
          Privacy
            </li>
            <li>
          Terms
            </li>
            <li>
          Sitemap
            </li>
            <li>
          Company details 
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <a href='#'><i className="fab fa-facebook-f"></i></a>
            </li>
            <li>
              <a href='#'><i className="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href='#'><i className="fab fa-instagram"></i></a>
            </li>
          </ul>
        </div>
      </div>


    </footer>
  )
}

export default Footer
>>>>>>> development
