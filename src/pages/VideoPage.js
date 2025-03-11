import React, { useEffect, useState } from 'react'
import Constants from '../utils/global_variables'
import axios from 'axios'
import PlayListSlider from '../components/PlayListSlider'
import Section from '../components/Section'

function VideoPage() {
  const [playList_1, setPlayList_1] = useState([])
  const [playList_2, setPlayList_2] = useState([])
  const [playList_3, setPlayList_3] = useState([])
  const [playList_4, setPlayList_4] = useState([])

  const getPlaylist = (PLAYLIST_ID, setPlayList) => {
    axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=20&playlistId=${PLAYLIST_ID}&key=${Constants.API_KEY}`)
      .then(response => response.data)
      .then(data => {
        let contentDetails = []
        data.items.map(item => contentDetails.push(item.contentDetails.videoId))
        setPlayList([...new Set(contentDetails)])
        // localStorage.setItem(
        //   PLAYLIST_ID,
        //   JSON.stringify([...new Set(contentDetails)])
        // );
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    getPlaylist(Constants.PLAYLIST_1, setPlayList_1)
    getPlaylist(Constants.PLAYLIST_2, setPlayList_2)
    getPlaylist(Constants.PLAYLIST_3, setPlayList_3)
    getPlaylist(Constants.PLAYLIST_4, setPlayList_4)
  }, [])

  const playlists = [
    {
      playlist: playList_1,
      title: 'VIDEO CHÁO TÌNH THƯƠNG'
    },
    {
      playlist: playList_2,
      title: 'VIDEO TIẾP SỨC TRI THỨC'
    },
    {
      playlist: playList_3,
      title: 'VIDEO CHƯƠNG TRÌNH THƯỜNG NIÊN'
    },
    {
      playlist: playList_4,
      title: 'VIDEO HỖ TRỢ HOÀN CẢNH KHÓ KHĂN'
    },
  ]

  return (
    <>
      {
        playlists.map(playlist => {
          return (
            <div key={playlist.title}>
              <Section title={playlist.title} />
              <PlayListSlider videos={playlist.playlist} />
            </div>
          )
        })
      }
    </>
  )
}

export default VideoPage

// https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=5&pageToken=EAAaBlBUOkNBVQ&playlistId=PLPKGUz9dF9sLHRvV9ENks8WQrWNQsb1SD&key=AIzaSyBEUVRN522VqnGAxtZLtq9d9yYejaE05T8

// {
//   "kind": "youtube#playlistItemListResponse",
//   "etag": etag,
//   "nextPageToken": string,
//   "prevPageToken": string,
//   "pageInfo": {
//     "totalResults": integer,
//     "resultsPerPage": integer
//   },
//   "items": [
//     playlistItem Resource
//   ]
// }
