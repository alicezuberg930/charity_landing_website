import { Link } from 'react-router-dom'
import { icons } from '../utils/icons'
import { memo, useRef, useState } from 'react'

const Header = () => {
  const { FaBars, IoMdArrowDropdown } = icons
  const tabs = [
    {
      name: 'Video',
      link: '/video'
    },
    {
      name: 'Liên hệ',
      link: '/contact'
    },
    {
      name: 'Giới thiệu',
      children: [
        {
          name: 'Quy định',
          link: '/rule'
        },
        {
          name: 'Tiêu chí nhóm',
          link: '/criteria'
        },
        {
          name: 'Cơ cấu tổ chức',
          link: '/structure'
        }
      ]
    },
    {
      name: 'Hoạt động',
      children: [
        {
          name: 'Cháo tình thương',
          link: '/chao-tinh-thuong'
        },
        {
          name: 'Chương trình thường niên',
          link: '/chuong-trinh-thuong-nien'
        },
        {
          name: 'Hỗ trợ hoàn cảnh',
          link: '/ho-tro-hoan-canh'
        },
        {
          name: 'Tiếp sức tri thức',
          link: '/tiep-suc-tri-thuc'
        }
      ]
    },
    {
      name: 'Dịch vụ',
      children: [
        {
          name: 'Thiết kế',
          link: '/design'
        },
        {
          name: 'Chụp ảnh',
          link: '/photoshoot'
        }
      ]
    },
  ]
  const [openDropdown, setOpenDropdown] = useState('')
  const sideBarRef = useRef(null)
  const overlayRef = useRef(null)

  const toggleDropdown = menu => {
    setOpenDropdown(openDropdown === menu ? null : menu)
  }

  const handleToggleSidebar = () => {
    sideBarRef.current.classList.toggle('right-0')
    overlayRef.current.classList.toggle('hidden')
  }

  return (
    <header className='bg-white h-20 content-center z-10 shadow-md'>
      <nav className='flex font-semibold justify-between items-center relative max-w-screen-xl mx-auto px-3 lg:px-0'>
        <div className='flex items-center flex-auto'>
          <Link to='/'>
            <img src='./assets/logo.png' className='inline-block mr-3 w-14 h-14' alt='logo' />
          </Link>
          <span className='hidden md:block'>
            <div className='flex flex-col items-end'>
              <h4 className='text-main-color font-bold text-2xl -tracking-wider'>ÁNH SÁNG TỪ THIỆN</h4>
              <span className='font-semibold'>Since 2010</span>
            </div>
          </span>
        </div>
        <button className='block md:hidden' onClick={handleToggleSidebar}>
          <FaBars size={30} fill='purple' />
        </button>
        <ul className='flex-none text-main-color font-bold gap-7 hidden md:flex'>
          <li className='relative'>
            <button className='flex' onClick={() => toggleDropdown('introduction')}>
              <span>Giới thiệu</span>
              <IoMdArrowDropdown size={24} />
            </button>
            <div className={`${openDropdown === 'introduction' ? 'block' : 'hidden'} absolute left-1/2 -translate-x-1/2 top-10 bg-white z-[999] rounded-md border border-gray-300 shadow-lg w-max`}>
              <div className='flex flex-col'>
                <Link to='/rule' className='px-3 py-2 hover:bg-gray-200'>
                  <span>Quy định</span>
                </Link>
                <Link to='/criteria' className='px-3 py-2 hover:bg-gray-200'>
                  <span>Tiêu chí nhóm</span>
                </Link>
                <Link to='/structure' className='px-3 py-2 hover:bg-gray-200'>
                  <span>Cơ cấu tổ chức</span>
                </Link>
                {/* <Link to='/cms/activities' className='px-3 py-2 hover:bg-gray-200'>
                  <span>Web Admin</span>
                </Link> */}
              </div>
            </div>
          </li>
          <li className='relative'>
            <button className='flex' onClick={() => toggleDropdown('movement')}>
              <span>Hoạt động</span>
              <IoMdArrowDropdown size={24} />
            </button>
            <div className={`${openDropdown === 'movement' ? 'block' : 'hidden'} absolute left-1/2 -translate-x-1/2 top-10 bg-white z-[999] rounded-md border border-gray-300 shadow-lg w-max`}>
              <div className='flex flex-col'>
                <Link to='/chao-tinh-thuong' className='px-3 py-2 hover:bg-gray-200'>
                  <span>Cháo tình thương</span>
                </Link>
                <Link to='/chuong-trinh-thuong-nien' className='px-3 py-2 hover:bg-gray-200'>
                  <span>Chương trình thường niên</span>
                </Link>
                <Link to='/ho-tro-hoan-canh' className='px-3 py-2 hover:bg-gray-200'>
                  <span>Hỗ trợ hoàn cảnh</span>
                </Link>
                <Link to='/tiep-suc-tri-thuc' className='px-3 py-2 hover:bg-gray-200'>
                  <span>Tiếp sức tri thức</span>
                </Link>
              </div>
            </div>
          </li>
          <li className='relative'>
            <Link to='/video'>
              <span>Video</span>
            </Link>
          </li>
          <li className='relative'>
            <button className='flex' onClick={() => toggleDropdown('service')}>
              <span>Dịch vụ</span>
              <IoMdArrowDropdown size={24} />
            </button>
            <div className={`${openDropdown === 'service' ? 'block' : 'hidden'} absolute left-1/2 -translate-x-1/2 top-10 bg-white z-[999] rounded-md border border-gray-300 shadow-lg w-max`}>
              <div className='flex flex-col'>
                <Link to='/design' className='px-3 py-2 hover:bg-gray-200'>
                  <span>Thiết kế</span>
                </Link>
                <Link to='/photoshoot' className='px-3 py-2 hover:bg-gray-200'>
                  <span>Chụp ảnh</span>
                </Link>
              </div>
            </div>
          </li>
          <li className='relative'>
            <Link to='/contact'>
              <span>Liên hệ</span>
            </Link>
          </li>
        </ul>
      </nav>
      {/* right sidebar */}
      <div ref={overlayRef} onClick={handleToggleSidebar} className='fixed hidden top-20 right-0 left-0 bottom-0 bg-[rgba(0,0,0,.5)]'></div>
      <aside ref={sideBarRef} className='fixed bg-white shadow-lg overflow-auto top-20 -right-56 h-screen w-56 z-[99] transition-all duration-500'>
        {
          tabs.map(tab => {
            return (
              <div key={tab.name}>
                {tab.link ? (
                  <Link className='block text-main-color p-2 hover:bg-gray-200' to={tab.link} onClick={handleToggleSidebar}>{tab.name}</Link>
                ) : (
                  <>
                    <button className='p-2 font-semibold'>
                      <span>{tab.name}</span>
                    </button>
                    {
                      tab.children.map(children => {
                        return (
                          <Link to={children.link} key={children.link} onClick={handleToggleSidebar} className='block text-main-color p-2 hover:bg-gray-200'>
                            {children.name}
                          </Link>
                        )
                      })
                    }
                  </>
                )}
              </div>
            )
          })
        }
      </aside>
    </header>
  )
}

export default memo(Header)