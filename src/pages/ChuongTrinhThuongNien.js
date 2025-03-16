import Section from '../components/Section'
import { useGetPostsHook } from '../hooks/post.hook'
import ActivityList from '../components/ActivityList'
import LoadingShimmerItemList from '../components/LoadingShimmerItemList'

const ChuongTrinhThuongNien = () => {
  const { data: posts, isLoading } = useGetPostsHook({ filter: { category: 'chuong-trinh-thuong-nien' } })

  return (
    <>
      <Section title='HOẠT ĐỘNG CHƯƠNG TRÌNH THƯỜNG NIÊN' />
      {isLoading ? <LoadingShimmerItemList count={9} /> : posts && posts?.data && <ActivityList posts={posts.data} />}
    </>
  )
}

export default ChuongTrinhThuongNien