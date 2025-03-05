import { Outlet } from 'react-router-dom'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AdminPage = () => {
  return (
    <>
      <div className='w-full h-screen overflow-hidden'>
        <div className='h-full bg-gray-200'>
          <div className='flex h-full'>
            <AdminSidebar />
            <div className='flex-1 flex flex-col'>
              <AdminHeader />
              <div className='flex-1 px-4 py-8 overflow-auto'>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default AdminPage
