import { useLocation } from '@tanstack/react-router'
import HelmetSEO from '../../components/HelmetSEO'
import type { Post } from '@/@types/post'
import LazyLoadImage from '@/components/lazy-load-image/LazyLoadImage'

const ActivityDetailsPage = () => {
  const location = useLocation()
  const { details } = location.state as unknown as { details: Post }

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
          <LazyLoadImage
            widths={[
              { screenWidth: 640, imageWidth: 640 },  // Phone
              { screenWidth: 1024, imageWidth: 1024 },  // Tablet
              { screenWidth: 1920, imageWidth: 1920 },  // Desktop and larger
            ]}
            className='w-full h-full object-cover rounded-xl'
            alt={details.title}
            src={details.cover}
            effect='blur'
          />
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
          {details.images.map((image) => (
            <div key={image} className='rounded-2xl mx-auto my-4 aspect-video w-full md:w-3/5 relative image-container'>
              <LazyLoadImage
                widths={[
                  { screenWidth: 640, imageWidth: 640 },  // Phone
                  { screenWidth: 1024, imageWidth: 1024 },  // Tablet
                  { screenWidth: 1920, imageWidth: 1920 },  // Desktop and larger
                ]}
                className='h-full w-full object-cover rounded-xl'
                alt={image}
                src={image}
                effect='blur'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ActivityDetailsPage
