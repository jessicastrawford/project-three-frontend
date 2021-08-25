import React from 'react'
// import axios from 'axios'
import { useHistory } from 'react-router'
import { registerUser } from '../lib/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
const eye = <FontAwesomeIcon icon={faEye} />



function Register() {

  const [formData, setFormData] = React.useState({
    username: '',
    email: '', 
    password: '',
    passwordConfirmation: '',
  })

  const [errors, setErrors] = React.useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const history = useHistory()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await registerUser(formData)
      history.push('/login')
      console.log(res)
    } catch (err) {
      console.log(err)
      setErrors(err.res.data.errors)
    }
  }

  const handleLogIn = () => {
    history.push('/login')
  }
  
  const [passwordShown, setPasswordShown] = React.useState(false) 
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true)
  }


  return (
    
    <section className="section register-box animate__animated animate__fadeInUp" onSubmit={handleSubmit}>
      <div>
        <h1>Please Sign Up Below</h1>
        <hr/>
      </div>
      <div className="register-top">
        <input 
          className="register-input"
          placeholder="Please enter your username here"
          name="username"
          value={formData.username}
          onChange={handleChange} />
        {errors.username && (
          <p className="help is-danger">username error</p>
        )}
      </div>
      <div className="register-middle">
        <input
          className="register-input"
          placeholder="Please enter your email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="help is-danger">email error</p>}
      </div>
      <div className="register-middle">
        <input
          className="register-input"
          type={passwordShown ? 'text' : 'password'}
          placeholder="Please enter your password here"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <i onClick={togglePasswordVisiblity}>{eye}</i>
        {errors.password && (
          <p className="help is-danger">password error</p>
        )}
      </div>
      <div className="register-bottom">
        <input
          className="register-input"
          type={passwordShown ? 'text' : 'password'}
          placeholder="Please enter your password again"
          name="passwordConfirmation"
          value={formData.passwordConfirmation}
          onChange={handleChange}
        />
        <i onClick={togglePasswordVisiblity}>{eye}</i>
        {errors.passwordConfirmation && (
          <p className="help is-danger">password confirmation error</p>
        )}
      </div>
      <div className="register-info">
        <p>
          We&apos;ll email you to confirm your email address. <span>Privacy Policy</span>
        </p>
      </div>
      <div className="field">
        <button type="submit" className="button login-button is-fullwidth" onClick={handleSubmit}>Sign up</button>
      </div>
      <div className="field">
        <button type="submit" className="button login-button is-fullwidth" onClick={handleLogIn}>Already have an account? Log in</button>
      </div>
    </section>
  )
}

export default Register
