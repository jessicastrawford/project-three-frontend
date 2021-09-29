import React from 'react'
import { getUserId } from '../../lib/auth'
import { useParams, useHistory } from 'react-router-dom'
import { deleteAComment, getAllComments } from '../../lib/api'
import ReactStars from 'react-star-rating-component'
import Moment from 'react-moment'
import 'moment-timezone'

function ReviewCard({ comments }) {

  const {
    _id,
    text,
    rating,
    addedBy,
    createdAt,
  } = comments

  const userId = getUserId()
  const history = useHistory()
  const { clubId, pubId } = useParams()
  const [comment, setComment] = React.useState('')

  const handleDeleteComment = async (e) => {
    e.preventDefault()
    try {
      const commentId = e.target.name
      console.log(commentId)
      await deleteAComment(clubId, pubId, commentId)
      const res = await getAllComments(clubId, pubId)
      setComment(res.data)
      history.push(`/clubs/${clubId}/pubs/${pubId}/`)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }



  return (
    <section className="ratings">
      <div>
        <h5>Created by {addedBy} </h5>
        <h5><Moment fromNow >{createdAt}</Moment></h5>
        <p>Review: {text}</p>
        <ReactStars
          count={5}
          size={20}
          half={false}
          value={rating}
          emptyIcon={<i className="far fa-star"></i>}s
          fullIcon={<i className="fa fa-star"></i>}
          edit={false}
        />
      </div>
      {userId === addedBy ? <button onClick={handleDeleteComment} name={_id} className="delete-button">Delete comment</button> : ''}
    </section>
  )
}

export default ReviewCard