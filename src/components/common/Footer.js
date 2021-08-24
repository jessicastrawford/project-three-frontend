import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <br/>
        <Link to="/about" className="team">Meet the team behind Away Days</Link>
        <hr/>
        <div className="icons">
          <div>
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
          <div className="social-media-icons">
            <ul>
              <li>
                <SocialIcon url="https://en-gb.facebook.com/" bgColor="#000000"/>
              </li>
              <li>
                <SocialIcon url="https://twitter.com/?lang=en-gb" bgColor="#000000"/>
              </li>
              <li>
                <SocialIcon url="https://www.instagram.com/" bgColor="#000000"/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


// <ul>
// <li>
//   <a href='#'><i className="fab fa-facebook-f"></i></a>
// </li>
// <li>
//   <a href='#'><i className="fab fa-twitter"></i></a>
// </li>
// <li>
//   <a href='#'><i className="fab fa-instagram"></i></a>
// </li>
// </ul>
