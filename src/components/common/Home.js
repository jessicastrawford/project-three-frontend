import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import Signup from './Signup'
// import { Link, useParams } from 'react-router-dom'

import { pubs } from '../../data/pubs'
// import { getAllPubs } from '../../lib/api'
import PubHomepageCard from '../pubs/PubHomepageCard'

import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpg'
import image4 from '../../assets/4.jpeg'


function Home() {

  // const [pubs, setPubs] = React.useState([])

  // React.useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const { data } = await getAllPubs()
  //       const filteredPubs = data.filter(pub => {
  //         const highestRated = pub.userRating >= 4
  //         return highestRated
  //       })
  //       console.log(data)
  //       console.log(filteredPubs)
  //       setPubs(filteredPubs)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getData()
  // }, [])


  const filteredPubs = pubs.filter(pub => {
    const highestRated = pub.userRating >= 4
    return highestRated
  })
  console.log(filteredPubs)

  return (
    <>
      <section className="hero-slideshow">
        <div className="App">
          <AliceCarousel autoPlay autoPlayInterval="3000">
            <img src={image1} className="sliderimg" alt="football-image"/>
            <img src={image2} className="sliderimg"alt="football-image"/>
            <img src={image3} className="sliderimg"alt="football-image"/>
            <img src={image4} className="sliderimg"alt="football-image"/>
          </AliceCarousel>
        </div> 
      </section>
      <section className="pub-cards">
      </section>
      <section>
        <div>
          <h3>Top 5 Rated Pubs</h3>
        </div>
        <div className="pub-cards">
          {/* {filteredPubs.map(pub => (
            <PubHomepageCard key={pub._id} pub={pub} />
          ))} */}
        </div>
      </section>
      <section className="sign-up">
        <div>
          <Signup></Signup>
        </div>
      </section>
    </>

  )

}


export default Home