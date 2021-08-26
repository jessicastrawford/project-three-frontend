import React from 'react'
import ImageUploadField from './components/ImageUpload'

function App() {
  const [formData, setFormData] = React.useState({
    firstName: '',
    lastName: '',
    profileImage: '',
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleImageUpload = (imageUrl, name) => {
    setFormData({ ...formData, [name]: imageUrl })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    window.alert(`Submitting ${JSON.stringify(formData, null, 2)}`)
  }

  return (
    <section className="section-wrapper">
      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="">
            <label className="">First Name</label>
            <div className="">
              <input
                className="input"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="">
            <label className="">Last Name</label>
            <div className="">
              <input
                className=""
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="">
            <ImageUploadField
              onChange={handleImageUpload}
              labelText="Profile Image"
              name="profileImage"
              value={formData.profileImage}
            />
          </div>
          <div className="">
            <button className="" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  )
}





export default App