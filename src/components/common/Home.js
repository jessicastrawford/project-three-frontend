// import { useHistory } from 'react-router'
import 'materialize-css'
// import { Slider, Slide, Caption } from 'react-materialize'
import React from 'react'
// import ReactDom from 'react-dom'
// import { Carousel } from 'react-responsive-carousel'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import image1 from '../../assets/1.jpg'
import image2 from '../../assets/2.jpg'
import image3 from '../../assets/3.jpeg'
import image4 from '../../assets/4.jpg'

function Home() {
  // const history = useHistory()
  
  return (
    <div className="App">
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src={image1} className="sliderimg"/>
        <img src={image2} className="sliderimg"/>
        <img src={image3} className="sliderimg"/>
        <img src={image4} className="sliderimg"/>
      </AliceCarousel>
    </div>

  )

}


// <Carousel>
//   <div>
//     <img src="assets/1.jpeg" />
//     <p className="legend">Legend 1</p>
//   </div>
//   <div>
//     <img src="assets/2.jpeg" />
//     <p className="legend">Legend 2</p>
//   </div>
//   <div>
//     <img src="assets/3.jpeg" />
//     <p className="legend">Legend 3</p>
//   </div>
// </Carousel>

    
// <Slider
//   fullscreen={false}
//   options={{
//     duration: 500,
//     height: 400,
//     indicators: true,
//     interval: 6000,
//   }}
// >
//   <Slide image={<img alt="" src="https://images.ctfassets.net/u0haasspfa6q/2xl0w4P7lIAVEESotMPxlF/12eb1aba070dfbbbd0d0c1127798abec/AMA_EVERTON_LIVERPOOL_RJB_27"/>}>
//     <Caption placement="center">
//       <h3>
//     This is our big Tagline!
//       </h3>
//       <h5 className="light grey-text text-lighten-3">
//     Here is our small slogan.
//       </h5>
//     </Caption>
//   </Slide>
//   <Slide image={<img alt="" src="http://lorempixel.com/780/580/nature/2"/>}>
//     <Caption placement="left">
//       <h3>
//     Left Aligned Caption
//       </h3>
//       <h5 className="light grey-text text-lighten-3">
//     Here is our small slogan.
//       </h5>
//     </Caption>
//   </Slide>
//   <Slide image={<img alt="" src="https://lorempixel.com/780/580/nature/3"/>}>
//     <Caption placement="right">
//       <h3>
//     Right Aligned Caption
//       </h3>
//       <h5 className="light grey-text text-lighten-3">
//     Here is our small slogan.
//       </h5>
//     </Caption>
//   </Slide>
//   <Slide image={<img alt="" src="https://lorempixel.com/580/250/nature/4"/>}>
//     <Caption placement="center">
//       <h3>
//     This is our big Tagline!
//       </h3>
//       <h5 className="light grey-text text-lighten-3">
//     Here is our small slogan.
//       </h5>
//     </Caption>
//   </Slide>
// </Slider>
  


export default Home