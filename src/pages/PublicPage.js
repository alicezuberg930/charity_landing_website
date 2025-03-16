import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from '../components/Footer'
import Header from '../components/Header'
// import { useDispatch, useSelector } from 'react-redux'
// import { isScrollTop } from '../store/actions/home_actions'

const PublicPage = () => {
  //   const { showSideBarRight, scrollTop } = useSelector(state => state.app)
  //   const location = useLocation()
  //   const dispatch = useDispatch()

  //   const handleScrollTop = e => {
  //     if (
  //       location.pathname.includes('/artist') ||
  //       location.pathname.includes('/zing-chart')
  //     ) {
  //       if (e.target.scrollTop === 0) dispatch(isScrollTop(true))
  //       else dispatch(isScrollTop(false))
  //     } else {
  //       dispatch(isScrollTop(false))
  //     }
  //   }

  return (
    <>
      <div className='w-full h-screen '>
        <div className='h-full '>
          <div className='flex flex-col h-full '>
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
      <ToastContainer />
    </>
  )
}

export default PublicPage
