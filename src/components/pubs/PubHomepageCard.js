import { Link } from 'react-router-dom'
import ReactStars from 'react-star-rating-component'

function PubHomepageCard( { pub } ) {



  return (
    <main>
      <div className="pub-cards">
        <Link to={`/pubs/${pub._id}`}>
          <div className="pub-card">
            <figure className="pub-image">
              <img src={pub.image}/>
            </figure>
            <h1 className="title">{pub.pubName}</h1>
            <ReactStars
              count={5}
              size={20}
              half={false}
              value={pub.userRating}
              emptyIcon={<i className="far fa-star"></i>}s
              fullIcon={<i className="fa fa-star"></i>}
              edit={false}
            />
 
          </div>
        </Link>
      </div>
    </main>

  )
}

export default PubHomepageCard