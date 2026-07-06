import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import PlayListSlider from '@/pages/public/video/components/playlist-slider'
import Section from '@/layout/public/section'
import { getYoutubePlaylistVideos } from '@/services/api.service'
import { showResponseError } from '@/lib/utils'
import { playlistIds } from '@/lib/constants'
import type { SliderProps } from '@/components/custom-carousel/types'

type FetchYoutubePlaylistVideosParams = {
  playlistId: string
  setPlayList: Dispatch<SetStateAction<string[]>>
}

function VideoPage() {
  const [playList_1, setPlayList_1] = useState<string[]>([])
  const [playList_2, setPlayList_2] = useState<string[]>([])
  const [playList_3, setPlayList_3] = useState<string[]>([])
  const [playList_4, setPlayList_4] = useState<string[]>([])

  const fetchYoutubePlaylistVideos = async ({ playlistId, setPlayList }: FetchYoutubePlaylistVideosParams) => {
    try {
      const response = await getYoutubePlaylistVideos({ playlistId })
      let contentDetails: string[] = []
      response.items.forEach(item => contentDetails.push(item.contentDetails.videoId))
      setPlayList([...new Set(contentDetails)])
    } catch (error) {
      showResponseError(error)
    }
  }

  useEffect(() => {
    fetchYoutubePlaylistVideos({ playlistId: playlistIds.PLAYLIST_1, setPlayList: setPlayList_1 })
    fetchYoutubePlaylistVideos({ playlistId: playlistIds.PLAYLIST_2, setPlayList: setPlayList_2 })
    fetchYoutubePlaylistVideos({ playlistId: playlistIds.PLAYLIST_3, setPlayList: setPlayList_3 })
    fetchYoutubePlaylistVideos({ playlistId: playlistIds.PLAYLIST_4, setPlayList: setPlayList_4 })
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
      {playlists.map((playlist, i) => (
        <div key={playlist.title}>
          <Section title={playlist.title} />
          <PlayListSlider videoIds={playlist.playlist} />
        </div>
      ))}
    </>
  )
}

export default VideoPage