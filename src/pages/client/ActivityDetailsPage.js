import { useLocation } from 'react-router-dom'
import HelmetSEO from '../../components/HelmetSEO'

const ActivityDetailsPage = () => {
  const location = useLocation()
  const { details } = location.state
  // const { slug } = useParams()

  return (
    <div>
      <HelmetSEO
        title={details.title}
        description={details.description}
        image={details.cover}
      />
      <div className='mt-4'>
        <div className='text-center'>
          <span className='text-main-color font-bold text-lg'>{details.title}</span>
          <hr className='my-4 block'></hr>
        </div>
      </div>
      <div className='mt-4'>
        <div className='aspect-video mx-auto w-full md:w-4/5 rounded-2xl relative image-container'>
          <img src={details.cover} className='w-full h-full object-cover rounded-xl' alt={details.title} />
        </div>
      </div>
      <div className='mt-4'>
        <div className='w-fit mx-auto' dangerouslySetInnerHTML={{ __html: details.description }}></div>
      </div>
      <div className='my-4'>
        <div>
          <div className='text-center'>
            <h3 className='text-main-color'>Hình ảnh thực hiện chương trình</h3>
            <hr className='block my-4'></hr>
          </div>
          {
            details.images.map(image => {
              return (
                <div key={image} className='rounded-2xl mx-auto my-4 aspect-video w-full md:w-3/5 relative image-container'>
                  <img src={image} className='h-full w-full object-cover rounded-xl' alt={image} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ActivityDetailsPage