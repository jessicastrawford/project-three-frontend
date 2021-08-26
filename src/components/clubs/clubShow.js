import React from 'react'
  
    
import { useParams, useHistory } from 'react-router-dom'
import { getSingleClub, showUserProfile } from '../../lib/api'
import Favorites from '../user/Favorites'
// import { isAuthenticated, getPaylod, isOwner } from '../../lib/auth'
// import Loading from '../common/Loading'


function ClubShow () {
  const [club, setClub] = React.useState('')
  // const [user, setUser] = React.useState(null)

  const { clubId } = useParams()
  // const history = useHistory()
  // const isLoggedIn = isAuthenticated()

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getSingleClub(clubId)
        setClub(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [clubId])

  const { 
    clubName, 
    logo, 
    league, 
    mainImage,
    imageTwo, 
    imageThree, 
    location, 
    capacity, 
    stadiumInfo, 
    latitude, 
    longitude,
    addedBy } = club 

  const handleFavorite = async (e) => {
    try {
      const currentUser = await Favorites()
      if (e.target.value) {
        console.log(currentUser)
      }
    } catch (err) {
      console.log(err)
    }
  }



  // if (isAuthenticated()) {
  //   React.useEffect(() => {
  //     const { data } = await 
  //   })
  // } 


  return (
    <section className="club-show-page">
      <div className="top-half">
        <div className="club-gallery-title">
          <div className="title">
            <h1>{clubName}</h1>
            <div className="favourites">
              <button className="likeBtn" onClick={handleFavorite}>
                <i className="fas fa-heart fa-lg" style={{ color: 'grey' }}>Add to Favorites</i>
              </button>
            </div>
            <p><u>Location: {location}</u></p>
          </div>
          <div className="gallery"> 
            <div className="main-image">
              <figure className="left-side">
                <img src={mainImage} alt={clubName} />
              </figure>
            </div>
            <div className="smaller-images">
              <figure className="right-side">
                <img src={imageTwo} alt={clubName} className="first"/>
              </figure>
              <figure className="right-side">
                <img src={imageThree} alt={clubName} className="second"/>
              </figure>
            </div>
          </div>
        </div>
        
        <div className="club-info">
          <div className="club-info-image">
            <img src={logo}/>
          </div>
          <div className="club-info-text">
            <h3>League: {league}</h3>
            <p>Stadium Capacity: {capacity}</p>
            <p className="stadium-info">Stadium Information: {stadiumInfo}</p>
            <hr/>
          </div>
        </div>
      </div>
      <div>
        <h3>Where you&apos;ll be</h3>
      </div>


    </section>
  )
}

export default ClubShow