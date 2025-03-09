import { PATH } from './utils/path'
import './styles/global.css'
import { Routes, Route } from 'react-router-dom'
import VideoPage from './pages/VideoPage'
import IndexPage from './pages/IndexPage'
import DesignPage from './pages/DesignPage'
import PhotoshootPage from './pages/PhotoshootPage'
import ChaoTinhThuong from './pages/ChaoTinhThuong'
import ChuongTrinhThuongNien from './pages/ChuongTrinhThuongNien'
import HoTroHoanCanh from './pages/HoTroHoanCanh'
import TiepSucTriThuc from './pages/TiepSucTriThuc'
import RulePage from './pages/RulePage'
import CriteriaPage from './pages/CriteriaPage'
import StructurePage from './pages/StructurePage'
import ContactPage from './pages/ContactPage'
import NewsPage from './pages/NewsPage'
import ActivityDetailsPage from './pages/ActivityDetailsPage'
import React from 'react'
import PublicPage from './pages/PublicPage'
import PostsPage from './pages/cms/PostsPage'
import CreatePostPage from './pages/cms/CreatePostPage'
import EventsPage from './pages/cms/EventsPage'
import CreateEventPage from './pages/cms/CreateEventPage'
import CreateBannerPage from './pages/cms/CreateBannerPage'
import AdminPage from './pages/cms/AdminPage'
import InformationPage from './pages/cms/InformationPage'
import BannersPage from './pages/cms/BannersPage'

const App = () => {
  return (
    <Routes>
      {/* User's routes */}
      <Route path={PATH.HOME} element={<PublicPage />}>
        <Route path={PATH.PUBLIC} element={<IndexPage />} />
        <Route path='design' element={<DesignPage />} />
        <Route path='photoshoot' element={<PhotoshootPage />} />
        <Route path='video' element={<VideoPage />} />
        <Route path='chao-tinh-thuong' element={<ChaoTinhThuong />} />
        <Route
          path='chuong-trinh-thuong-nien'
          element={<ChuongTrinhThuongNien />}
        />
        <Route path='ho-tro-hoan-canh' element={<HoTroHoanCanh />} />
        <Route path='tiep-suc-tri-thuc' element={<TiepSucTriThuc />} />
        <Route path='rule' element={<RulePage />} />
        <Route path='criteria' element={<CriteriaPage />} />
        <Route path='structure' element={<StructurePage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='news' element={<NewsPage />} />
        <Route
          path='chao-tinh-thuong/details'
          element={<ActivityDetailsPage />}
        />
        <Route
          path='chuong-trinh-thuong-nien/details'
          element={<ActivityDetailsPage />}
        />
        <Route
          path='ho-tro-hoan-canh/details'
          element={<ActivityDetailsPage />}
        />
        <Route
          path='tiep-suc-tri-thuc/details'
          element={<ActivityDetailsPage />}
        />
      </Route>
      {/* Admin's routes */}
      <Route path={PATH.CMS} element={<AdminPage />}>
        <Route path='activities' element={<PostsPage />} />
        <Route path='activities/create' element={<CreatePostPage />} />
        <Route path='events' element={<EventsPage />} />
        <Route path='events/create' element={<CreateEventPage />} />
        <Route path='banners' element={<BannersPage />} />
        <Route path='banners/create' element={<CreateBannerPage />} />
        <Route path='information' element={<InformationPage />} />
      </Route>
    </Routes>
  )
}

export default App
