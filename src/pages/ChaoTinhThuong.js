import Section from '../components/Section'
import { useGetPostsHook } from '../hooks/post.hook'
import ActivityListTemp from '../components/PostListTemp'
import LoadingShimmerItemList from '../components/LoadingShimmerItemList'

const ChaoTinhThuong = () => {
  const { data: posts, isLoading } = useGetPostsHook({ filter: { category: 'chao-tinh-thuong' } })

  return (
    <>
      <Section title={'HOẠT ĐỘNG CHÁO TÌNH THƯƠNG'} />
      {isLoading ? <LoadingShimmerItemList count={9} /> : posts.data && <ActivityListTemp posts={posts.data} />}
    </>
  )
}

export default ChaoTinhThuong