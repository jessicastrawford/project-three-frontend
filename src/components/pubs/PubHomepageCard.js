import ReactStars from 'react-star-rating-component'
import React from 'react'


function PubHomepageCard( { pub } ) {

  console.log('looking', pub)
  return (
    <div className="pub-card">
      <figure className="pub-image">
        <img src={pub.image}/>
      </figure>
      <h1 className="pub-title">{pub.pubName}</h1>
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
  )
}
export default PubHomepageCard