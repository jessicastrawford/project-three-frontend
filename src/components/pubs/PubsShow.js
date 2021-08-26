import React from 'react'
import { useParams } from 'react-router-dom'
import { getSinglePub } from '../../lib/api'
import ReactStars from 'react-star-rating-component'

function PubShow () {
  const [pub, setPub] = React.useState('')
  const [club, setClub] = React.useState('')

  const { clubId, pubId } = useParams()

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


  const {
    pubName,
    comments,
    userRating,
    latitude,
    longitude,
    description, 
    image,
  } = pub

  return (
    <section>
      <div className="favourites">
        <button className="likeBtn">
          <i className="fas fa-heart fa-lg" style={{ color: 'grey' }}></i>
        </button>
      </div>
      <div>
        <figure>
          <img src={image} alt={pubName}/>
        </figure>
      </div>
      <h1>{pubName}</h1>
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