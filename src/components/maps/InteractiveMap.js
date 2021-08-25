import React from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player'


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

  const videos = filteredLeague?.map(item => {
    return item.videos.map(video => video.embed)
  })
  console.log(videos)

  const videoUrls = videos?.map(clip => {
    console.log(clip)
    const start = clip[0].split('src=\'')[1]
    return start.split('\'')[0]
  })
  console.log(videoUrls)

  return (
    <>
      {videoUrls?.map(video => {
        return <ReactPlayer 
          key={video} 
          url={video} 
          width={500}
          height={500}
          controls={true}
        />
      })}
    </>
    
  )
}

export default InteractiveMap