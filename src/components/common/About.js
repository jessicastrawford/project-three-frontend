import React from 'react'
import { SocialIcon } from 'react-social-icons'


function About() {
  return (
    <main>
      <div className="about">
        <h1>Meet The Team...</h1>

        <div className="team-social-media">
          <div className="individual-social-media">
            <h2>Nnanna Uwakwe</h2>
            <SocialIcon url="https://github.com/chikin-namban92"/>
            <SocialIcon url="https://www.linkedin.com/in/nnanna-uwakwe-b78a731/"/>
          </div>
          <div className="individual-social-media">
            <h2>Jessica Strawford</h2>
            <SocialIcon url="https://github.com/jessicastrawford"/>
            <SocialIcon url="https://www.linkedin.com/in/jessica-strawford-a63117145/"/>
          </div>
          <div className="individual-social-media">
            <h2>James Guppy</h2>
            <SocialIcon url="https://github.com/chikin-namban92"/>
            <SocialIcon url="https://www.linkedin.com/in/james-guppy-91063018b/"/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About


