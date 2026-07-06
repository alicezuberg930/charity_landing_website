import Section from '@/layout/public/section'
import { useGetPostsHook } from '@/hooks/post.hook'
import ActivityList from '@/components/ActivityList'
import LoadingShimmerItemList from '@/components/LoadingShimmerItemList'

const ChuongTrinhThuongNienPage = () => {
  const { data: posts, isLoading } = useGetPostsHook({ filter: { category: 'chuong-trinh-thuong-nien' } })

  return (
    <>
      <Section title='HOẠT ĐỘNG CHƯƠNG TRÌNH THƯỜNG NIÊN' />
      {isLoading ? (
        <LoadingShimmerItemList count={9} />
      ) : (
        posts?.data && <ActivityList posts={posts.data} />
      )}
    </>
  )
}

export default ChuongTrinhThuongNienPage