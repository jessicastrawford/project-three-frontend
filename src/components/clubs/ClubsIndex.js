import React from 'react'
import { Link } from 'react-router-dom'
import Loading from '../common/Loading'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { likeClub } from '../../lib/api'
import { isAuthenticated } from '../../lib/auth'
import image1 from '../../assets/hero2cropped.png'

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

  const toggleLike = async (e) => {
    const clubId = e.target.parentElement.id
    try {
      if (!isAuthenticated()) throw new Error
      const like = await likeClub(clubId)
      console.log(like)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <section className="club-index-wrapper">
      <div className="upper-section">
        <div className="right-side">
          <img src={image1} alt="football-collage"/>
        </div>
      </div>
      <div className="left-side">
        <div>
          <h1>Choose A Club</h1>
        </div>
        <div>
          <div>
            <label className="label">Search a Club</label>
          </div>
          <input type="text" placeholder="Search...." onChange={handleSearch} className="search"/>
          <div>
            <label className="label">Pick a League</label>
          </div>
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
      <div className="dropdown-wrapper">
        <div className="club-card-container">
          {isLoading && Loading} 
          {!isLoading && filteredClubs().map(club => ( 
            <section key={club._id} className="full-card">
              <Link to={`/clubs/${club._id}`} key={club._id}>
                <div className="club-card">
                  <img src={club.logo} className="image"/>
                  <div className="middle">
                    <h3 className="text">{club.clubName}</h3>
                  </div>
                </div>
              </Link>
              <div className="favourites" >
                <FontAwesomeIcon icon={faHeart} onClick={toggleLike} id={club._id} />
              </div>
            </section>
          ))}
        </div> 
      </div>
    </section>
  )
}

export default ClubsIndex