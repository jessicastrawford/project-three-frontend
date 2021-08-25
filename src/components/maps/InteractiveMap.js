import React from 'react'
import axios from 'axios'

function InteractiveMap() {
  const [data, setData] = React.useState(null)
  React.useEffect(() => {
    const getData = async () => {
      const res = await axios.get('https://www.scorebat.com/video-api/v3/')
      setData(res.data.response)
      
    }
    getData()
  }, [])

  console.log(data)

  const filteredLeague = data?.filter(item => {
    return item.competition === 'ENGLAND: Premier League'
  })

  console.log(filteredLeague)

  filteredLeague?.map(item => {
    console.log(item.videos)
  })

  return (
    <h1>This is the interactive map page</h1>
  )
}

export default InteractiveMap