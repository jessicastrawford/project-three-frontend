import React from 'react'
// import axios from 'axios'

function ClubsIndex() {
  // const [clubs, setClubs] = React.useState(null)
  // const [isError, setIsError] = React.useState(false)
  // const isLoading = !clubs && !isError

  // React.useEffect(() => {
  //   const getClubs = async () => {
  //     try {
  //       const getData = await axios.get('https://www.scorebat.com/video-api/v3/')
  //       console.log(getData.data.response)

  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getClubs()
  // }, [])


  return (
    <div className="search-bar">
      <input type="text" placeholder="Search...."/>
    </div>
  )
}

export default ClubsIndex