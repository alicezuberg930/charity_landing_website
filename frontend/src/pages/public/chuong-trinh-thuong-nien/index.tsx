import Section from '@/layout/public/section'
import { useGetPostsHook } from '@/hooks/post.hook'
import ActivityList from '@/layout/public/activity-list'
import ShimmerItemList from '@/layout/public/shimmer-item-list'

const ChuongTrinhThuongNienPage = () => {
  const { data: posts, isLoading } = useGetPostsHook({ filter: { category: 'chuong-trinh-thuong-nien' } })

  return (
    <>
      <Section title='HOẠT ĐỘNG CHƯƠNG TRÌNH THƯỜNG NIÊN' />
      {isLoading ? (
        <ShimmerItemList count={9} />
      ) : (
        posts?.data && <ActivityList posts={posts.data} />
      )}
    </>
  )
}

export default ChuongTrinhThuongNienPage