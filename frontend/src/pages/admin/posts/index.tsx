import { useGetPostsHook } from '../../../hooks/post.hook'
import { ShimmerList } from '@/layout/common'
import { PostsDialogs } from './components/posts-dialogs'
import { PostsPrimaryButtons } from './components/posts-primary-buttons'
import { PostsProvider } from './components/posts-provider'
import { PostsTable } from './components/posts-table'
import { getRouteApi } from '@tanstack/react-router'
import type { NavigateFn } from '@/hooks/use-table-url-state'

const route = getRouteApi('/cms/posts/')

const PostsPage = () => {
  const filter = { page: 1 }
  const { data: posts, isLoading } = useGetPostsHook({ filter })
  const search = route.useSearch()
  const navigate = route.useNavigate() as NavigateFn

  return (
    <PostsProvider>
      <div className='rounded-md p-4'>
        <div className='space-y-4'>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <div className='w-full'>
              <span className='text-xl font-bold'>Bài viết về hoạt động</span>
            </div>
            <PostsPrimaryButtons />
          </div>
          {isLoading ? (
            <div className='rounded-md border p-3'>
              <ShimmerList />
            </div>
          ) : (
            <PostsTable data={posts?.data ?? []} search={search} navigate={navigate} />
          )}
        </div>
      </div>
      <PostsDialogs />
    </PostsProvider>
  )
}

export default PostsPage
