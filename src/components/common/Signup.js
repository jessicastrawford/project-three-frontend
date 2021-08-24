import stadiumImage from '../../assets/Wembley+Stadium_Panorama_Adam+Jacobs+Photography.jpg'
import Button from './Button'

function Signup() {
  return (
    <section className="sign-up">
      <img className="signup-image" src={stadiumImage} alt="football-image"/>
      <Button buttonStyle="btn--outline">Signup Here</Button>
    </section>
  )
}

export default Signup 