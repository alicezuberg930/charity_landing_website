import { Link } from 'react-router-dom'
import Logo from '../assets/icon/logo.png'

export default function Header () {
  return (
    <header id='header-bar' className='bg-light'>
      <nav className='navbar navbar-expand-md navbar-dark font-weight-bold d-flex'>
        <a href='/' className='position-relative'>
          <img
            src={Logo}
            width='50'
            height='55'
            className='d-inline-block mr-3'
            alt='logo'
          />
        </a>
        <button
          style={{ background: 'purple' }}
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <span className='navbar-text collapse navbar-collapse d-flex flex-column align-items-start'>
          <div className='collapse navbar-collapse navbar-nav d-flex flex-column align-items-end'>
            <h4
              className='main-theme collapse navbar-collapse navbar-nav'
              style={{ fontFamily: 'UTM_HelvetIns' }}
            >
              ÁNH SÁNG TỪ THIỆN
            </h4>
            <span className='text-dark collapse navbar-collapse'>
              Since 2010
            </span>
          </div>
        </span>
        <div
          className='collapse navbar-collapse justify-content-end'
          id='navbarText'
        >
          <ul className='navbar-nav mr-auto justify-content-end flex-grow-1'>
            <li className='nav-item vertical-divider pl-3 pr-3 dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/'
                id='navbarDropdownMenuLink'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ color: 'purple' }}
              >
                <span>Giới thiệu</span>
              </a>
              <div
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <Link to='/rule' className='text-decoration-none'>
                  <span className='dropdown-item main-theme'>Quy định</span>
                </Link>
                <Link to='/criteria' className='text-decoration-none'>
                  <span className='dropdown-item main-theme'>
                    Tiêu chí nhóm
                  </span>
                </Link>
                <Link to='/structure' className='text-decoration-none'>
                  <span className='dropdown-item main-theme'>
                    Cơ cấu tổ chức
                  </span>
                </Link>
              </div>
            </li>
            <li className='nav-item vertical-divider pl-3 pr-3 dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdownMenuLink'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ color: 'purple' }}
              >
                <span>Hoạt động</span>
              </a>
              <div
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <Link to='/chao-tinh-thuong' className='text-decoration-none'>
                  <span className='dropdown-item main-theme'>
                    Cháo tình thương
                  </span>
                </Link>
                <Link
                  to='/chuong-trinh-thuong-nien'
                  className='text-decoration-none'
                >
                  <span className='dropdown-item main-theme'>
                    Chương trình thường niên
                  </span>
                </Link>
                <Link to='/ho-tro-hoan-canh' className='text-decoration-none'>
                  <span className='dropdown-item main-theme'>
                    Hỗ trợ hoàn cảnh
                  </span>
                </Link>
                <Link to='/tiep-suc-tri-thuc' className='text-decoration-none'>
                  <span className='dropdown-item main-theme'>
                    Tiếp sức tri thức
                  </span>
                </Link>
              </div>
            </li>
            <li className='nav-item vertical-divider pl-3 pr-3'>
              <Link to='/video' className='text-decoration-none'>
                <span className='nav-link'>
                  <span className='main-theme'>Video</span>
                </span>
              </Link>
            </li>
            <li className='nav-item vertical-divider pl-3 pr-3 dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdownMenuLink'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ color: 'purple' }}
              >
                <span>Dịch vụ</span>
              </a>
              <div
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <Link to='/design' className='text-decoration-none'>
                  <span className='dropdown-item main-theme'>Thiết kế</span>
                </Link>
                <Link to='/photoshoot' className='text-decoration-none'>
                  <span className='dropdown-item main-theme'>Chụp ảnh</span>
                </Link>
              </div>
            </li>
            <li className='nav-item pl-3'>
              <Link to='/contact' className='text-decoration-none'>
                <span className='nav-link'>
                  <span className='main-theme'>Liên hệ</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
