import PlayListSlider from '@/pages/public/video/components/playlist-slider'
import Section from '@/layout/public/section'
import { playlistIds as ids } from '@/lib/constants'
import { useQueries } from '@tanstack/react-query'
import { playlists } from '@/lib/queries/playlist'

function VideoPage() {
  const results = useQueries({
    queries: ids.map((id) =>
      playlists().one.queryOptions(id)
    ),
  })

  // const isLoading = results.some((query) => query.isLoading)
  // const errors = results.filter((query) => query.error)
  const queriedPlaylistIds = results.map((playlist) => [
    ...new Set(
      playlist.data?.items.map((item) => item.contentDetails.videoId) ?? []
    ),
  ])

  const playlistSections = [
    {
      playlist: queriedPlaylistIds[0],
      title: 'VIDEO CHÁO TÌNH THƯƠNG'
    },
    {
      playlist: queriedPlaylistIds[1],
      title: 'VIDEO TIẾP SỨC TRI THỨC'
    },
    {
      playlist: queriedPlaylistIds[2],
      title: 'VIDEO CHƯƠNG TRÌNH THƯỜNG NIÊN'
    },
    {
      playlist: queriedPlaylistIds[3],
      title: 'VIDEO HỖ TRỢ HOÀN CẢNH KHÓ KHĂN'
    },
  ]

  return (
    <>
      {playlistSections.map((playlist, index) => (
        <div key={playlist.title}>
          <Section title={playlist.title} />
          <PlayListSlider
            videoIds={playlist.playlist}
            isLoading={results[index].isLoading}
          />
        </div>
      ))}
    </>
  )
}

export default VideoPage
