import Section from '@/layout/public/section'
import { useGetPostsHook } from '@/hooks/post.hook'
import ActivityList from '@/layout/public/activity-list'
import ShimmerItemList from '@/layout/public/shimmer-item-list'

const ChaoTinhThuongPage = () => {
  const { data: posts, isLoading } = useGetPostsHook({ filter: { category: 'chao-tinh-thuong' } })

  return (
    <>
      <Section title='HOẠT ĐỘNG CHÁO TÌNH THƯƠNG' />
      {isLoading ? (
        <ShimmerItemList count={9} />
      ) : (
        posts?.data && <ActivityList posts={posts.data} />
      )}
    </>
  )
}

export default ChaoTinhThuongPage