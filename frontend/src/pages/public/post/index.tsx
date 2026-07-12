import { useLocation } from '@tanstack/react-router'
import { SEO } from '@/lib/seo'
import type { Post } from '@/@types/post'
import LazyLoadImage from '@/components/lazy-load-image/lazy-load-image'
import { Button } from '@/components/ui/button'
import { LucideVolume2 } from 'lucide-react'
import { stripHtml } from '@/lib/utils'
import { useSpeechSynthesis } from '@/providers/speech-synthesis-provider'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const ActivityDetailsPage = () => {
  const location = useLocation()
  const { details } = location.state as unknown as { details: Post }
  const { textToSpeech } = useSpeechSynthesis()

  const handleTextToSpeech = () => textToSpeech(stripHtml(details.description))

  return (
    <>
      <SEO
        title={details.title}
        description={details.description}
        image={details.cover}
      />
      <div>
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
        <div className='mt-4 w-fit mx-auto'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button className='bg-main-color hover:bg-main-color/80 size-12' onClick={handleTextToSpeech}>
                  <LucideVolume2 size={32} />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Bấm vào để dược nghe chuyển thông tin thành giọng nói</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className='mt-4 w-full'>
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
    </>
  )
}

export default ActivityDetailsPage
