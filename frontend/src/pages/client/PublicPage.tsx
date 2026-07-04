import { Outlet } from '@tanstack/react-router'
import { Toaster } from '@/components/ui/sonner'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import EventOverlay from '@/components/EventOverlay'

const PublicPage = () => {
  return (
    <>
      <div className='w-full h-screen overflow-hidden'>
        <div className='h-full overflow-hidden'>
          <div className='flex flex-col h-full overflow-hidden'>
            <Header />
            <div className='flex-auto overflow-y-auto overflow-x-hidden'>
              <div className='max-w-screen-xl mx-auto px-3 lg:px-0'>
                <Outlet />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
      <EventOverlay />
      <Toaster richColors />
    </>
  )
}

export default PublicPage