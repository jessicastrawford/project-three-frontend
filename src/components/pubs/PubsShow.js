import React from 'react'
import { useParams } from 'react-router-dom'
import { getSinglePub, getAllComments, createAComment } from '../../lib/api'
import ReactStars from 'react-star-rating-component'
import ReviewCard from '../reviews/ReviewCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUpload,
  faHeart } from '@fortawesome/free-solid-svg-icons'
import ReactMapGL from 'react-map-gl'
import { isAuthenticated } from '../../lib/auth'

const initialState = {
  addedBy: '',
  createdAt: '',
  text: '',
  rating: '',
}


function PubShow () {
  const [pub, setPub] = React.useState('')
  const [pubReviews, setPubReviews] = React.useState([])
  // let isClicked = false
  const [isClicked, setIsClicked] = React.useState(false)
  const [formData, setFormData] = React.useState(initialState)

  const { clubId, pubId } = useParams()


  const handleSubmit = (e) => {
    e.preventDefault()
    window.alert(`Submitting ${JSON.stringify(formData, null, 2)}`)
  }
  
  const handleChange = (e) => {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // setFormErrors({ ...formErrors, [e.target.name]: '' })
  }



  React.useEffect(() => {
    const getData = async () => {
      try {
        console.log(clubId, pubId)
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

  const handleClick = (e) => {
    e.preventDefault()
    setIsClicked(true)
    
  }

  return (
    <section className="pub-show-page">
      <div className="pub-card">
        <div className="title-icons">
          <div className="icons">
            <div className="icon">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faUpload} />
            </div>
            <div className="share">
              <p><u>Share</u></p>
            </div>
          </div>
        </div>
        <div className="box-section">
          <div className="title-and-image">
            <h1>{pubName}</h1>
            <figure className="image">
              <img src={image} alt={pubName}/>
            </figure>
          </div>
          <div className="map-container">
            <ReactMapGL
              mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
              height="100%"
              width="100%"
              mapStyle="mapbox://styles/mapbox/streets-v11"
              latitude={latitude}
              longitude={longitude}
              zoom={15}
              className="map"
            />
          </div>
        </div>
      </div>
      <hr  />
      <div className="admin-rating">
        <h3>Ratings...</h3>
        <hr/>
        <ReactStars 
          count={5}
          size={20}
          half={false}
          value={userRating}
          emptyIcon={<i className="far fa-star"></i>}s
          fullIcon={<i className="fa fa-star"></i>}
          edit={false}
        />
        <p>{description}</p>
      </div>
      <section className="ratings">
        <div className="rating-box">
          <h3>User Ratings...</h3>
          <hr/>
          {
            pubReviews.map(review => (
              <ReviewCard key={review._id} comments={review} />
            ))
          }
        </div>
        <form>
          <div>
            {!isClicked ? <button className="button" onClick={handleClick}>
            Add Your Review
            </button> : <button onSubmit={handleSubmit}>Submit</button>}
          </div>
          {isClicked && <textarea
            className="textarea"
            name="text"
            value={formData.text}
            onChange={handleChange}
          />} 
  
        </form>
      </section>
    </section>
  )

}

export default PubShow


// import { isAuthenticated, isOwner, showUserProfile } from '../../lib/auth'
// import { getUserId } from '../../lib/api'

// function PubShow () {
//   const [pub, setPub] = React.useState('')
//   const [pubReviews, setPubReviews] = React.useState([])

//   const { clubId, pubId } = useParams()


