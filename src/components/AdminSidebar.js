import { useState } from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../utils/icons'

const AdminSidebar = () => {
  const { MdCancel, PiFlagBanner, IoIosInformationCircleOutline, MdEventNote, MdPostAdd } = icons
  const [isCollapsed, setIsCollapsed] = useState(true)
  const menuItems = [
    {
      path: '/cms/activities',
      icon: <MdPostAdd size={24} />,
      name: 'Hoạt động'
    },
    {
      path: '/cms/events',
      icon: <MdEventNote size={24} />,
      name: 'Sự kiện'
    },
    {
      path: '/cms/information',
      icon: <IoIosInformationCircleOutline size={24} />,
      name: 'Thông tin'
    },
    {
      path: '/cms/banners',
      icon: <PiFlagBanner size={24} />,
      name: 'Banner'
    }
  ]

  return (
    <aside className={`${!isCollapsed ? '-left-[250px] md:hidden' : 'left-0 md:block'} absolute md:relative transition-all duration-300 select-none z-20 flex-shrink-0 w-[250px] overflow-y-auto bg-[#081d54] h-screen`}>
      <div className='text-xl bg-[#063877]'>
        <div className='p-2 flex items-center justify-between text-white'>
          <div className='flex items-center'>
            <img width={40} height={40} className='object-cover' src='/assets/logo.png' alt='logo' />
            <h1 className='font-bold text-sm ml-2'>Ánh sáng từ thiện</h1>
          </div>
          <MdCancel size={20} onClick={() => setIsCollapsed(!isCollapsed)} />
        </div>
      </div>
      <div className='px-2'>
        {
          menuItems.map((v, i) => {
            return (
              <Link key={i} to={v.path}
                className={`${'' === v.path ? 'bg-[#4e6aaf]' : ''} p-2 mt-3 flex items-center rounded-md cursor-pointer hover:bg-[#4e6aaf] text-white`}
              >
                {v.icon}
                <span className='text-sm ml-3 text-gray-200'>{v.name}</span>
              </Link>
            )
          })
        }
      </div>
    </aside>
  )
}

export default AdminSidebar
