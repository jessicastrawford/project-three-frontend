import React from 'react'
import { useParams } from 'react-router-dom'
import { getSinglePub, getAllComments, getSingleClub, likePub } from '../../lib/api'
import ReactStars from 'react-star-rating-component'
import ReviewCard from '../reviews/ReviewCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUpload,
  faHeart } from '@fortawesome/free-solid-svg-icons'
import ReactMapGL from 'react-map-gl'
import { isAuthenticated } from '../../lib/auth'


function PubShow () {
  const [pub, setPub] = React.useState('')
  const [pubReviews, setPubReviews] = React.useState([])

  const { clubId, pubId } = useParams()


  React.useEffect(() => {
    const getData = async () => {
      try {
        // console.log(clubId, pubId)
        const response = await getSinglePub(clubId, pubId)
        setPub(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [clubId, pubId])

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllComments(clubId, pubId)
        setPubReviews(response.data)
      } catch (err) {
        console.log(err)
      }
    }
    getData()
  }, [clubId, pubId])


  const {
    pubName,
    // comments,
    userRating,
    latitude,
    longitude,
    description, 
    image,
  } = pub

  const toggleLike = async () => {
    try {
      const club = await getSingleClub(clubId)
      console.log(club)
      // const userId = club.data.likedBy.map(user => {
      //   user._id === club.data._id ? user._id : null
      // })
      // console.log(userId)
      if (!isAuthenticated()) throw new Error
      const like = await likePub(clubId, pubId)
      console.log(like)
    } catch (err) {
      console.log(err)
    }
  }
  

  return (
    <section className="pub-show-page">
      <div className="pub-card">
        <div className="title-icons">
          <h1>{pubName}</h1>
          <div className="icons">
            <div className="favourites" onClick={toggleLike} >
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div>
              <FontAwesomeIcon icon={faUpload} />
            </div>
            <div>
              <p><u>Share</u></p>
            </div>
          </div>
        </div>
        <div className="">
          <figure className="image">
            <img src={image} alt={pubName}/>
          </figure>
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
        </div>
      </div>
      <hr />
      <p>{description}</p>
      <ReactStars 
        count={5}
        size={20}
        half={false}
        value={userRating}
        emptyIcon={<i className="far fa-star"></i>}s
        fullIcon={<i className="fa fa-star"></i>}
        edit={false}
      />

      <section className="ratings">
        <div>
          {
            pubReviews.map(review => (
              <ReviewCard key={review._id} comments={review} />
            ))
          }

        </div>
        <div>
          <button className="button">
            Add Your Review
          </button>
        </div>
      </section>
    </section>
  )

}

export default PubShow