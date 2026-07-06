import { createRootRoute, createRoute, createRouter, Navigate, Outlet, RouterProvider } from "@tanstack/react-router"
import { lazy, Suspense, type ComponentType } from "react"
import { VideoPage, HomePage, DesignPage, PhotoshootPage, ChaoTinhThuongPage, ChuongTrinhThuongNienPage, HoTroHoanCanhPage, TiepSucTriThucPage, RulePage, CriteriaPage, StructurePage, ContactPage, NewsPage, ActivityDetailsPage } from '../pages/public'
import { ROOT_CMS } from "./path"
import { queryClient } from "@/providers/query-client-provider"
import ShimmerList from "@/layout/common/shimmer-list"
import { PublicLayout } from "@/layout/public"

const LoginPage = lazy(() => import('@/pages/admin/login'))
const AdminPage = lazy(() => import('@/layout/admin/admin-layout'))
const PostsPage = lazy(() => import('@/pages/admin/posts'))
const UpdatePostPage = lazy(() => import('@/pages/admin/posts/update'))
const CreatePostPage = lazy(() => import('@/pages/admin/posts/create'))
const BannersPage = lazy(() => import('@/pages/admin/banners'))
const CreateBannerPage = lazy(() => import('@/pages/admin/banners/create'))
const UpdateBannerPage = lazy(() => import('@/pages/admin/banners/update'))
const EventsPage = lazy(() => import('@/pages/admin/events'))
const CreateEventPage = lazy(() => import('@/pages/admin/events/create'))
const InformationPage = lazy(() => import('@/pages/admin/information'))

const lazyRoute = (Component: ComponentType) => () => (
    <Suspense fallback={<ShimmerList />}>
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
    component: PublicLayout,
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
    createRoute({ getParentRoute: () => cmsRoute, path: 'post/new', component: lazyRoute(CreatePostPage) }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'post/edit/$id', component: lazyRoute(UpdatePostPage) }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'banner', component: () => <Navigate to='/cms/banner/list' replace /> }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'banner/list', component: lazyRoute(BannersPage) }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'banner/new', component: lazyRoute(CreateBannerPage) }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'banner/edit/$id', component: lazyRoute(UpdateBannerPage) }),
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