import LoadingShimmerItemList from '../components/LoadingShimmerItemList'
import ActivityListTemp from '../components/PostListTemp'
import Section from '../components/Section'
import { useGetPostsHook } from '../hooks/post.hook'

const HoTroHoanCanh = () => {
  const { data: posts, isLoading } = useGetPostsHook({ filter: { category: 'ho-tro-hoan-canh' } })

  return (
    <>
      <Section title={'HOẠT ĐỘNG HỖ TRỢ HOÀN CẢNH'} />
      {isLoading ? <LoadingShimmerItemList count={9} /> : posts.data && <ActivityListTemp posts={posts.data} />}
    </>
  )
}

export default HoTroHoanCanh
