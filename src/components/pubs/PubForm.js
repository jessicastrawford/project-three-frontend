import React from 'react'
import ImageUploadField from '../ImageUpload'
import { useHistory } from 'react-router-dom'

import { createPub, getSingleClub } from '../../lib/api'


function PubForm({ clubId, club, setClub }) {
  console.log(club)
  const [formData, setFormData] = React.useState({
    pubName: '',
    description: '',
    userRating: '',
    latitude: '',
    longitude: '',
    image: '',
  })
  const history = useHistory()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleImageUpload = (imageUrl, name) => {
    setFormData({ ...formData, [name]: imageUrl })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await createPub(clubId, formData)
      console.log(response.data._id)
      history.push(`/clubs/${clubId}`) 
      const getData = async () => {
        try {
          const response = await getSingleClub(clubId)
          setClub(response.data)
        } catch (err) {
          console.log(err)
        }
      }
      getData()
      formData.pubName = ''
      formData.description = '',
      formData.userRating = '',
      formData.latitude = '',
      formData.longitude = '',
      formData.image = '',
      console.log('BACK')
    } catch (err) {
      console.log(err)
    }
    // window.alert(`Submitting ${JSON.stringify(formData, null, 2)}`)
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
                name="userRating"
                onChange={handleChange}
                value={formData.userRating}
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
                name="image"
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





export default PubForm