import { Link } from 'react-router-dom'
import ReactStars from 'react-star-rating-component'


function PubHomepageCard( { pub } ) {

  console.log(pub)

  return (
    <main>
      <div className="pub-cards">
        <div className="pub-card">
          {pub &&
            pub?.map((pub) => (
              <Link to={`/pubs/${pub._id}`}>
                <div key={pub.pubName}>
                  <figure className="pub-image">
                    <img src={pub.image} alt={pub.pubName} />
                  </figure>
                  <ReactStars
                    count={5}
                    size={20}
                    half={false}
                    value={pub.userRating}
                    emptyIcon={<i className="far fa-star"></i>}
                    s
                    fullIcon={<i className="fa fa-star"></i>}
                    edit={false}
                  />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </main>
  )
}

export default PubHomepageCard
