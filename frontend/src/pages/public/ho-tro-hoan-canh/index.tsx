import ShimmerItemList from '@/layout/public/shimmer-item-list'
import ActivityList from '@/layout/public/activity-list'
import Section from '@/layout/public/section'
import { useGetPostsHook } from '@/hooks/post.hook'

const HoTroHoanCanhPage = () => {
  const { data: posts, isLoading } = useGetPostsHook({ filter: { category: 'ho-tro-hoan-canh' } })

  return (
    <>
      <Section title='HOẠT ĐỘNG HỖ TRỢ HOÀN CẢNH' />
      {isLoading ? (
        <ShimmerItemList count={9} />
      ) : (
        posts?.data && <ActivityList posts={posts.data} />
      )}
    </>
  )
}

export default HoTroHoanCanhPage
