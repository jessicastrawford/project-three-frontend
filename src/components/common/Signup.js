import stadiumImage from '../../assets/Wembley+Stadium_Panorama_Adam+Jacobs+Photography.jpg'
import Button from './Button'

function Signup() {
  return (
    <section>
      <div className="sign-up">
        <div className="info-text">
          <h3>Want to join Away Days?</h3>
          <br/>
          <p>Find out the best pubs and other attractions in the area for your perfect away day.</p>
          <br/>
          <a href="/register">
            <button className="button">
              Sign Up Today
            </button>
          </a>
        </div>
        {/* <img className="signup-image" src={stadiumImage} alt="football-image"/> */}
      </div>

    </section>
  )
}

export default Signup 