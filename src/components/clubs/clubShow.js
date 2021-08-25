import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getSingleClub } from '../../lib/api'
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
      </div>
        
      <div className="club-info">
        <div>
          <h3>League: {league}</h3>
          <p>Stadium Capacity: {capacity}</p>
        </div>
        <img src={logo}/>
        <p>Stadium Information: {stadiumInfo}</p>
      </div>


    </section>
  )
}

export default ClubShow