import ReactStars from 'react-star-rating-component'
import Moment from 'react-moment'
import 'moment-timezone'

function ReviewCard({ comments }) {

  const {
    text,
    rating,
    addedBy,
    createdAt,
  } = comments

  return (
    <section className="ratings">
      <div>
        <h5>Created by {addedBy}, <Moment fromNow >{createdAt}</Moment></h5>
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
    </section>
  )
}

export default ReviewCard