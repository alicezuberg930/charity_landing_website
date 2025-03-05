import { useState } from 'react'
import { icons } from '../utils/icons'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
  const { FaChevronDown, CiBellOn, MdLogout, FaUser, FaBars } = icons
  const [isCollapsed, setCollapseSidebar] = useState(true)

  return (
    <header className='z-10 py-4 bg-white shadow-md'>
      <div className='container flex items-center justify-between h-full px-6 mx-auto'>
        <button className='rounded-md focus:outline-none text-blue-300'>
          <FaBars className='w-5 h-5' />
        </button>
        <div className='flex items-center flex-shrink-0 space-x-6'>
          <div className='relative'>
            <div className='flex items-center gap-5'>
              <button onClick={() => {}}>
                <CiBellOn className='w-5 h-5' />
              </button>
              <button
                className='text-gray-500 flex items-center gap-2 focus:outline-none'
                onClick={() => {
                  setCollapseSidebar(!isCollapsed)
                }}
              >
                <img
                  width={32}
                  height={32}
                  className='object-cover rounded-full'
                  src='/assets/user.png'
                  alt='profile'
                />
                <p className='hidden md:block'>Tân</p>
                <FaChevronDown className='w-5 h-5' />
              </button>
            </div>
            <div>
              <div
                className={`${
                  isCollapsed ? 'hidden' : 'block'
                } absolute right-0 mt-2 text-gray-600 w-max bg-white border border-gray-100 rounded-md shadow-md`}
              >
                <div className='flex'>
                  <Link
                    href={'/'}
                    className='flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-md hover:bg-gray-200 w-full'
                  >
                    <FaUser className='w-4 h-4' />
                    <span>Hồ sơ</span>
                  </Link>
                </div>
                <button className='flex'>
                  <div className='flex items-center gap-3 px-4 py-3 text-sm font-semibold rounded-md hover:bg-gray-200'>
                    <MdLogout className='w-4 h-4' />
                    <span>Đăng xuất</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader
