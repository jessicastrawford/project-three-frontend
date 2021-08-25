import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

import { clubs } from '../../data/clubs'

function ClubsIndex() {
  const [league, setLeague] = React.useState()

  const handleChange = (event) => {
    console.log(event.target.value)
  }

  return (
    <section className="club-index-wrapper">
      <div className="dropdown-wrapper">
        <div className="search-bar">
          <input type="text" placeholder="Search...."/>
        </div>
        <div className="field">
          <label className="label">Pick a League</label>
          <div className="select">
            <select
              name="league"
              onChange={handleChange}
              value={clubs.league}
            >
              <option value="" disabled></option>
              <option value="all">All</option>
              <option value="Premier League">Premier League</option>
              <option value="Championship">Championship</option>
              <option value="League One">League One</option>
              <option value="League Two">League Two</option>
              <option value="National League">National League</option>
            </select>
          </div>
        </div>
        <div className="club-card-container"> 
          {clubs.map(club => (
            <div key={club.clubName} className="club-card">
              <h3>{club.clubName}</h3>
              <Link to='/clubs/:clubId'>
                <img src={club.logo}/>
              </Link>        
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClubsIndex