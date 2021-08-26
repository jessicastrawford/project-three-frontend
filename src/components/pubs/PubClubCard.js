import { Link } from 'react-router-dom'
import ReactStars from 'react-star-rating-component'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


function PubClubCard( { pub, clubId } ) {

  console.log(pub)

  return (
    <section>
      <div className="pub-cards">
        <div className="pub-card">
          {pub &&
            pub?.map((pub) => (
              <div key={pub.pubName}>
                <Link to={'/clubs/' + clubId + '/pubs/' + pub._id}>
                  <figure className="pub-image">
                    <img src={pub.image} alt={pub.pubName} />
                  </figure>
                  <h3>{pub.pubName}</h3>
                  <div className="icons">
                    <FontAwesomeIcon icon={faHeart} />
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
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default PubClubCard