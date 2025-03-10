import Section from '../components/Section'
import { useGetPostsHook } from '../hooks/post.hook'
import LoadingShimmerList from '../components/LoadingShimmerList'
import ActivityListTemp from '../components/PostListTemp'

const ChaoTinhThuong = () => {
  const { data: posts, isLoading } = useGetPostsHook({ category: 'chao-tinh-thuong' })

  return (
    <>
      <Section title={'HOẠT ĐỘNG CHÁO TÌNH THƯƠNG'} />
      {isLoading ? <LoadingShimmerList /> : posts.data && <ActivityListTemp posts={posts.data} />}
    </>
  )
}

export default ChaoTinhThuong