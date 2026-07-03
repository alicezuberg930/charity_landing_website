import { createRootRoute, createRoute, createRouter, Navigate, Outlet, RouterProvider } from "@tanstack/react-router"
import { lazy, Suspense, type ComponentType } from "react"
import { VideoPage, PublicPage, HomePage, DesignPage, PhotoshootPage, ChaoTinhThuongPage, ChuongTrinhThuongNienPage, HoTroHoanCanhPage, TiepSucTriThucPage, RulePage, CriteriaPage, StructurePage, ContactPage, NewsPage, ActivityDetailsPage } from '../pages/client'
import { ROOT_CMS } from "./path"
import { queryClient } from "@/components/QueryClientProvider"
import LoadingShimmerList from "@/components/LoadingShimmerList"

const LoginPage = lazy(() => import('../pages/cms/LoginPage'))
const AdminPage = lazy(() => import('../pages/cms/AdminPage'))
const PostsPage = lazy(() => import('../pages/cms/PostsPage'))
const UpdateCreatePostPage = lazy(() => import('../pages/cms/UpdateCreatePostPage'))
const BannersPage = lazy(() => import('../pages/cms/BannersPage'))
const UpdateCreateBannerPage = lazy(() => import('../pages/cms/UpdateCreateBannerPage'))
const EventsPage = lazy(() => import('../pages/cms/EventsPage'))
const CreateEventPage = lazy(() => import('../pages/cms/CreateEventPage'))
const InformationPage = lazy(() => import('../pages/cms/InformationPage'))

const lazyRoute = (Component: ComponentType) => () => (
    <Suspense fallback={<LoadingShimmerList />}>
        <Component />
    </Suspense>
)

const rootRoute = createRootRoute({
    component: Outlet,
})

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: lazyRoute(LoginPage),
})

const publicRoute = createRoute({
    getParentRoute: () => rootRoute,
    id: 'public',
    component: PublicPage,
})

const homeRoute = createRoute({
    getParentRoute: () => publicRoute,
    path: '/',
    component: HomePage,
})

const publicChildRoutes = [
    homeRoute,
    createRoute({ getParentRoute: () => publicRoute, path: 'design', component: DesignPage }),
    createRoute({ getParentRoute: () => publicRoute, path: 'photoshoot', component: PhotoshootPage }),
    createRoute({ getParentRoute: () => publicRoute, path: 'video', component: VideoPage }),
    createRoute({ getParentRoute: () => publicRoute, path: 'chao-tinh-thuong', component: ChaoTinhThuongPage }),
    createRoute({ getParentRoute: () => publicRoute, path: 'chuong-trinh-thuong-nien', component: ChuongTrinhThuongNienPage }),
    createRoute({ getParentRoute: () => publicRoute, path: 'ho-tro-hoan-canh', component: HoTroHoanCanhPage }),
    createRoute({ getParentRoute: () => publicRoute, path: 'tiep-suc-tri-thuc', component: TiepSucTriThucPage }),
    createRoute({ getParentRoute: () => publicRoute, path: 'rule', component: RulePage }),
    createRoute({ getParentRoute: () => publicRoute, path: 'criteria', component: CriteriaPage }),
    createRoute({ getParentRoute: () => publicRoute, path: 'structure', component: StructurePage }),
    createRoute({ getParentRoute: () => publicRoute, path: 'contact', component: ContactPage }),
    createRoute({ getParentRoute: () => publicRoute, path: 'news', component: NewsPage }),
    createRoute({ getParentRoute: () => publicRoute, path: 'chao-tinh-thuong/$slug', component: ActivityDetailsPage }),
    createRoute({ getParentRoute: () => publicRoute, path: 'ho-tro-hoan-canh/$slug', component: ActivityDetailsPage }),
    createRoute({ getParentRoute: () => publicRoute, path: 'tiep-suc-tri-thuc/$slug', component: ActivityDetailsPage }),
    createRoute({ getParentRoute: () => publicRoute, path: 'chuong-trinh-thuong-nien/$slug', component: ActivityDetailsPage }),
]

const cmsRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: ROOT_CMS,
    component: lazyRoute(AdminPage),
})

const cmsChildRoutes = [
    createRoute({ getParentRoute: () => cmsRoute, path: '/', component: () => <Navigate to='/cms/post/list' replace /> }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'post', component: () => <Navigate to='/cms/post/list' replace /> }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'post/list', component: lazyRoute(PostsPage) }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'post/new', component: lazyRoute(UpdateCreatePostPage) }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'post/edit/$id', component: lazyRoute(UpdateCreatePostPage) }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'banner', component: () => <Navigate to='/cms/banner/list' replace /> }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'banner/list', component: lazyRoute(BannersPage) }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'banner/new', component: lazyRoute(UpdateCreateBannerPage) }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'banner/edit/$id', component: lazyRoute(UpdateCreateBannerPage) }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'event', component: () => <Navigate to='/cms/event/list' replace /> }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'event/list', component: lazyRoute(EventsPage) }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'event/new', component: lazyRoute(CreateEventPage) }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'information', component: lazyRoute(InformationPage) }),
]

const routeTree = rootRoute.addChildren([
    loginRoute,
    publicRoute.addChildren(publicChildRoutes),
    cmsRoute.addChildren(cmsChildRoutes),
])

const router = createRouter({
    routeTree,
    context: { queryClient: queryClient() },
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
})

export const Router = () => <RouterProvider router={router} />