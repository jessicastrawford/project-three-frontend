import React from 'react'
import ImageUploadField from '../ImageUpload'

function App() {
  const [formData, setFormData] = React.useState({
    pubName: '',
    description: '',
    rating: '',
    latitude: '',
    longitude: '',
    image: '',
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
    <>
      <section className="section-wrapper">
        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="">Name of Your Pub</label>
              <div className="">
                <input
                  className="input"
                  name="pubName"
                  value={formData.pubName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="">Latitude</label>
              <div className="">
                <input
                  className=""
                  name="latitude"
                  value={formData.latitude}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="">Longitude</label>
              <div className="">
                <input
                  className=""
                  name="longitude"
                  value={formData.longitude}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="select">
              <select
                name="rating"
                onChange={handleChange}
                value={formData.rating}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="field">
              <label className="label">Whats it Like?</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="field">
              <ImageUploadField
                onChange={handleImageUpload}
                labelText="Upload a Picture"
                name="pubImage"
                value={formData.image}
              />
            </div>
            <div className="btn">
              <button className="" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
    
  )
}





export default App