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
  text: '',
  rating: '',
}


function PubShow () {
  const [pub, setPub] = React.useState('')
  const [pubReviews, setPubReviews] = React.useState([])
  const [isClicked, setIsClicked] = React.useState(false)
  const [formData, setFormData] = React.useState(initialState)
  const [rating, setRating] = React.useState(1)
  const [errors, setErrors] = React.useState(false)

  const { clubId, pubId } = useParams()

  const handleRating = (nextValue) => {
    setRating({ nextValue })
    setFormData({ ...formData, rating: rating.nextValue  })
  }

  const handleChange = (e) => {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
    // setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleSubmit = async (e, nextValue) => {

    e.preventDefault()

    try {
      setRating({ nextValue })
      await createAComment(clubId, pubId, formData) 
      const reviewsWithAddedReview = await getAllComments(clubId, pubId)
      setPubReviews(reviewsWithAddedReview.data)
      setFormData( { text: '' })
      if (!isAuthenticated) throw new Error
    } catch (err){
      console.log(err)
      setErrors(true)
    }
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
        <div className="box-section">
          <div className="title-and-image">
            <h3>{pubName}</h3>
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
            <img src={image} alt={pubName} className="image"/>
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
          starColor={'red'}
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
        <form className="user-reviews">
          <h3 className="review-title">Write Your Own Review...</h3>
          <hr/>
          {isClicked && isAuthenticated && <>
            <div className="user-star-ratings">
              <div className="stars">
                <ReactStars
                  count={5}
                  size={20}
                  half={false}
                  name="rating"
                  value={parseInt(rating.nextValue)}
                  onStarClick={handleRating}
                  fullIcon={<i className="fa fa-star"></i>}
                  emptyIcon={<i className="far fa-star"></i>}
                />
                {errors ?  <p>Rating is required</p> : ''}
              </div>
            </div>
            <textarea
              className="textarea"
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder="Add your review here.."
            />
            {errors ? <p>Comment is required</p> : ''}
          </>} 
        </form>
        {/* {errors ? <p className="error">Comment and ratings are required...</p> : <p></p>} */}
        <div>
          {!isClicked ? <button className="button" onClick={handleClick}>
          Add Your Review
          </button> : <button className="submit-button" onClick={handleSubmit}>Submit</button>}
        </div>
        <div>
        </div>
      </section>
    </section>
  )

}

export default PubShow