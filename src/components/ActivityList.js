import { Link } from 'react-router-dom'

const ActivityList = ({ posts }) => {
  return (
    <div className='flex flex-wrap mb-4'>
      {
        posts.map((post, i) => {
          return (
            <div className='w-full p-2.5 sm:w-1/2 lg:w-1/3' key={i}>
              <div className='w-full'>
                <Link className='block relative' to={'/' + post.category + '/details'} state={{ details: post }}>
                  <div className='absolute flex items-center bg-main-color rounded-md top-3 left-3 p-2 z-[1]'>
                    <span className='text-white text-xs'>{post.date}</span>
                  </div>

                  <div className='shadow-md space-y-3 rounded-lg overflow-hidden'>
                    <div className='w-full h-72'>
                      <img className='transition-transform duration-500 hover:scale-105 h-full w-full object-cover' src={post.cover} alt={post.title} />
                    </div>
                    <div className='space-y-3 p-3'>
                      <h5 className='line-clamp-1 text-lg font-bold'>{post.title}</h5>
                      <p className='line-clamp-2'>
                        {post.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ActivityList