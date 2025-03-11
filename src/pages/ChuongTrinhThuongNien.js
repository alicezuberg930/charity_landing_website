import Section from '../components/Section'
import { useGetPostsHook } from '../hooks/post.hook'
import ActivityListTemp from '../components/PostListTemp'
import LoadingShimmerItemList from '../components/LoadingShimmerItemList'

const ChuongTrinhThuongNien = () => {
  const { data: posts, isLoading } = useGetPostsHook({ filter: { category: 'chuong-trinh-thuong-nien' } })

  return (
    <>
      <Section title={'HOẠT ĐỘNG CHƯƠNG TRÌNH THƯỜNG NIÊN'} />
      {isLoading ? <LoadingShimmerItemList count={9} /> : posts.data && <ActivityListTemp posts={posts.data} />}
    </>
  )
}

export default ChuongTrinhThuongNien