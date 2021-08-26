import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleClub } from '../../lib/api'
import PubClubCard from '../pubs/PubClubCard'


function ClubShow () {
  const [club, setClub] = React.useState('')

  const { clubId } = useParams()
  console.log(clubId)

  React.useEffect(() => {
    console.log('Hello')
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

 
  console.log(club)
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
    // latitude, 
    // longitude,
  } = club 



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
      <div className="pubs">
        <PubClubCard key={clubPubs._id} pub={ clubPubs } clubId = {clubId}/>
      </div>
      <div>
        <h3>Where you&apos;ll be</h3>
      </div>


    </section>
  )
}

export default ClubShow