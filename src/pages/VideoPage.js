import React, { useEffect, useState } from 'react'
import Constants from '../utils/global_variables'
import axios from 'axios'
import PlayList from '../components/PlayList'
import Section from '../components/Section'

function VideoPage () {
  const [playList_1, setPlayList_1] = useState([])
  const [playList_2, setPlayList_2] = useState([])
  const [playList_3, setPlayList_3] = useState([])
  const [playList_4, setPlayList_4] = useState([])

  function getPlaylist (PLAYLIST_ID, setPlayList) {
    // if (JSON.parse(localStorage.getItem(PLAYLIST_ID)) != null) {
    //   setPlayList(JSON.parse(localStorage.getItem(PLAYLIST_ID)));
    //   return;
    // }
    axios
      .get(
        'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=' +
          PLAYLIST_ID +
          '&key=' +
          Constants.API_KEY
      )
      .then(response => response.data)
      .then(data => {
        let contentDetails = []
        data.items.map(item => contentDetails.push(item.contentDetails.videoId))
        setPlayList([...new Set(contentDetails)])
        console.log(
          'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=50&playlistId=' +
            PLAYLIST_ID +
            '&key=' +
            Constants.API_KEY
        )
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

  return (
    <div>
      <Section title={'VIDEO CHÁO TÌNH THƯƠNG'} />
      <PlayList id={Constants.PLAYLIST_1} videos={playList_1} />
      <Section title={'VIDEO TIẾP SỨC TRI THỨC'} />
      <PlayList id={Constants.PLAYLIST_2} videos={playList_2} />
      <Section title={'VIDEO CHƯƠNG TRÌNH THƯỜNG NIÊN'} />
      <PlayList id={Constants.PLAYLIST_3} videos={playList_3} />
      <Section title={'VIDEO HỖ TRỢ HOÀN CẢNH KHÓ KHĂN'} />
      <PlayList id={Constants.PLAYLIST_4} videos={playList_4} />
    </div>
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
