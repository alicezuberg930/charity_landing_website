import { Outlet, useLocation } from 'react-router-dom'
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
      <div className='w-full h-screen overflow-hidden'>
        <div className='h-full'>
          <div className='flex flex-col h-full'>
            <Header />
            <div className='flex-1 overflow-auto'>
              <div className='max-w-screen-xl mx-auto'>
                <Outlet />
              </div>
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default PublicPage
