import React from 'react'
import ReactMapGL from 'react-map-gl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUpload } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { isAuthenticated } from '../../lib/auth'
import { getSingleClub, likeClub } from '../../lib/api'
import PubClubCard from '../pubs/PubClubCard'
import PubForm from '../pubs/PubForm'

function ClubShow () {
  const [club, setClub] = React.useState('')
  const [clicked, isClicked] = React.useState(false)
  const { clubId } = useParams()

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

  const clubPubs = club.pubs === undefined ? '' : club?.pubs.map(pub => {
    return pub 
  }) 
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
  } = club 

  const toggleLike = async () => {
    try {
      if (!isAuthenticated()) throw new Error
      const like = await likeClub(clubId)
      console.log(like)
    } catch (err) {
      console.log(err)
    }
  }
  
  const handleClick = () => {
    isClicked(true)
  }

  return (
    <section className="club-show-page">
      <div className="top-half">
        <div className="club-gallery-title">
          <div className="title">
            <h1>{clubName}</h1>
            <p><u>Location: {location}</u></p>
          </div>
          <div className="icons">
            <div className="favourites" onClick={toggleLike}>
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="share">
              <FontAwesomeIcon icon={faUpload} />
              <p><u>Share</u></p>
            </div>
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
      <div className="bottom-half">
        <div className="bottom">
          <div className="pubs">
            <PubClubCard key={clubPubs._id} pub={ clubPubs } clubId = {clubId}/>
          </div>
          <div className="map-section">
            <h3>Where you&apos;ll be...</h3>
            <div className="map-container">
              <ReactMapGL
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
                height="100%"
                width="100%"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                latitude={latitude}
                longitude={longitude}
                zoom={15}
              />
            </div>
            <div className="add-your-own">
              <h1> Would you like to add a pub in this area?</h1>
              <button onClick={handleClick} className="button">Click here</button>
              {clicked ? <PubForm clubId={clubId} club={ { ...club } } setClub={setClub}/> : ''}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ClubShow