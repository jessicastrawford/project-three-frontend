import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

import { clubs } from '../../data/clubs'
import axios from 'axios'

function ClubsIndex() {
  const [clubs, setClubs] = React.useState(null)
  const [selectInput, setSelectInput] = React.useState('all')
  const [searchValue, setSearchValue] = React.useState('')
  const isLoading = !clubs

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('/api/clubs')
        setClubs(res.data) 
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [])
  

  const handleLeagueFilter = (e) => {
    setSelectInput(e.target.value)
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const filteredClubs = () => {
    return clubs?.filter(club => {
      return (club.clubName.toLowerCase().includes(searchValue.toLocaleLowerCase()) &&  (selectInput === 'all' || club.league === selectInput))
    })
  }
  

  return (
    <section className="club-index-wrapper">
      <div className="dropdown-wrapper">
        <div className="search-bar">
          <input type="text" placeholder="Search...." onChange={handleSearch}/>
        </div>
        <div className="field">
          <label className="label">Pick a League</label>
          <div className="select">
            <select
              name="league"
              onChange={handleLeagueFilter}
              value={clubs?.league}
            >
              <option value="" disabled></option>
              <option value="all">All</option>
              <option value="Premier League">Premier League</option>
              <option value="Championship">Championship</option>
              <option value="League One">League One</option>
              <option value="League Two">League Two</option>
              <option value="National league">National League</option>
            </select>
          </div>
        </div>
        <div className="club-card-container">
          {isLoading && <div>Loading....</div>} 
          {!isLoading && filteredClubs().map(club => (
            <div key={club._id} className="club-card">
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