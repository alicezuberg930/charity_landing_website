import { Navigate, useRoutes } from "react-router-dom"
import { VideoPage, PublicPage, HomePage, DesignPage, PhotoshootPage, ChaoTinhThuongPage, ChuongTrinhThuongNienPage, HoTroHoanCanhPage, TiepSucTriThucPage, RulePage, CriteriaPage, StructurePage, ContactPage, NewsPage, ActivityDetailsPage } from '../pages/client'
import { PostsPage, CreatePostPage, EventsPage, CreateEventPage, CreateBannerPage, AdminPage, InformationPage, BannersPage, UpdatePostPage } from '../pages/cms/'
import { ROOT_CMS, ROOT_HOME, ROUTES } from "./path"

export const Router = () => {
    return useRoutes([
        {
            path: ROOT_HOME,
            element: (
                // <AuthGuard>
                <PublicPage />
                // </AuthGuard>
            ),
            children: [
                { path: '', element: <HomePage /> },
                { path: 'design', element: <DesignPage /> },
                { path: 'photoshoot', element: <PhotoshootPage /> },
                { path: 'video', element: <VideoPage /> },
                { path: 'chao-tinh-thuong', element: <ChaoTinhThuongPage />, },
                { path: 'chuong-trinh-thuong-nien', element: <ChuongTrinhThuongNienPage /> },
                { path: 'ho-tro-hoan-canh', element: <HoTroHoanCanhPage /> },
                { path: 'tiep-suc-tri-thuc', element: <TiepSucTriThucPage /> },
                { path: 'rule', element: <RulePage /> },
                { path: 'criteria', element: <CriteriaPage /> },
                { path: 'structure', element: <StructurePage /> },
                { path: 'contact', element: <ContactPage /> },
                { path: 'news', element: <NewsPage /> },
                { path: 'chao-tinh-thuong/:slug', element: <ActivityDetailsPage /> },
                { path: 'ho-tro-hoan-canh/:slug', element: <ActivityDetailsPage /> },
                { path: 'tiep-suc-tri-thuc/:slug', element: <ActivityDetailsPage /> },
                { path: 'chuong-trinh-thuong-nien/:slug', element: <ActivityDetailsPage /> },
            ],
        },
        {
            path: ROOT_CMS,
            element: (
                // <AuthGuard>
                <AdminPage />
                // </AuthGuard>
            ),
            children: [
                { element: <Navigate to='/cms/post/list' replace />, index: true },
                {
                    path: 'post',
                    children: [
                        { element: <Navigate to='/cms/post/list' replace />, index: true },
                        { path: 'list', element: <PostsPage /> },
                        { path: 'new', element: <CreatePostPage /> },
                        { path: 'edit/:id', element: <UpdatePostPage /> },
                    ],
                },
                {
                    path: 'banner',
                    children: [
                        { element: <Navigate to='/cms/banner/list' replace />, index: true },
                        { path: 'list', element: <BannersPage /> },
                        { path: 'new', element: <CreateBannerPage /> },
                        // { path: 'edit/:id', element: < /> },
                    ],
                },
                {
                    path: 'event',
                    children: [
                        { element: <Navigate to='/cms/event/list' replace />, index: true },
                        { path: 'list', element: <EventsPage /> },
                        { path: 'new', element: <CreateEventPage /> },
                        // { path: 'edit/:id', element: < /> },
                    ],
                },
                {
                    path: 'information',
                    element: <InformationPage />
                },
            ]
        }
    ])
}