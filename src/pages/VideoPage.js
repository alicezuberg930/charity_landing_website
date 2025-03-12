import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PlayListSlider from '../components/PlayListSlider'
import Section from '../components/Section'
import { getYoutubePlaylistVideos } from '../services/api.service'
import { showResponseError } from '../utils/utils'

function VideoPage() {
  const PLAYLIST_1 = 'PLPKGUz9dF9sIs4HYrmu2CZ4QRsRtnElTn'
  const PLAYLIST_2 = 'PLPKGUz9dF9sIfAlTR27e7lTJoS702DEu2'
  const PLAYLIST_3 = 'PLPKGUz9dF9sLgp2ggkQBE6CH5oivdwGeG'
  const PLAYLIST_4 = 'PLPKGUz9dF9sLHRvV9ENks8WQrWNQsb1SD'
  const [playList_1, setPlayList_1] = useState([])
  const [playList_2, setPlayList_2] = useState([])
  const [playList_3, setPlayList_3] = useState([])
  const [playList_4, setPlayList_4] = useState([])

  const fetchYoutubePlaylistVideos = async ({ playlistId, setPlayList }) => {
    try {
      const response = await getYoutubePlaylistVideos({ playlistId })
      let contentDetails = []
      response.items.map(item => contentDetails.push(item.contentDetails.videoId))
      setPlayList([...new Set(contentDetails)])
    } catch (error) {
      showResponseError(error)
    }
  }

  useEffect(() => {
    fetchYoutubePlaylistVideos({ playlistId: PLAYLIST_1, setPlayList: setPlayList_1 })
    fetchYoutubePlaylistVideos({ playlistId: PLAYLIST_2, setPlayList: setPlayList_2 })
    fetchYoutubePlaylistVideos({ playlistId: PLAYLIST_3, setPlayList: setPlayList_3 })
    fetchYoutubePlaylistVideos({ playlistId: PLAYLIST_4, setPlayList: setPlayList_4 })
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
