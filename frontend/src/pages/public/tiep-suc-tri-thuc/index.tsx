import ShimmerItemList from '@/layout/public/shimmer-item-list'
import ActivityList from '@/layout/public/activity-list'
import Section from '@/layout/public/section'
import { useGetPostsHook } from '@/hooks/post.hook'

const TiepSucTriThucPage = () => {
  const { data: posts, isLoading } = useGetPostsHook({ filter: { category: 'tiep-suc-tri-thuc' } })

  return (
    <>
      <Section title={'HOẠT ĐỘNG TIẾP SỨC TRI THỨC'} />
      {isLoading ? (
        <ShimmerItemList count={9} />
      ) : (
        posts?.data && <ActivityList posts={posts.data} />
      )}
    </>
  )
}

export default TiepSucTriThucPage