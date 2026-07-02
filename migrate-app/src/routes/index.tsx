import { createRootRoute, createRoute, createRouter, Navigate, Outlet, RouterProvider } from "@tanstack/react-router"
import { VideoPage, PublicPage, HomePage, DesignPage, PhotoshootPage, ChaoTinhThuongPage, ChuongTrinhThuongNienPage, HoTroHoanCanhPage, TiepSucTriThucPage, RulePage, CriteriaPage, StructurePage, ContactPage, NewsPage, ActivityDetailsPage } from '../pages/client'
import { UpdateCreatePostPage, UpdateCreateBannerPage, LoginPage, PostsPage, EventsPage, CreateEventPage, AdminPage, InformationPage, BannersPage } from '../pages/cms'
import { ROOT_CMS } from "./path"

const rootRoute = createRootRoute({
    component: Outlet,
})

const loginRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/login',
    component: LoginPage,
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
    component: AdminPage,
})

const cmsChildRoutes = [
    createRoute({ getParentRoute: () => cmsRoute, path: '/', component: () => <Navigate to='/cms/post/list' replace /> }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'post', component: () => <Navigate to='/cms/post/list' replace /> }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'post/list', component: PostsPage }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'post/new', component: UpdateCreatePostPage }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'post/edit/$id', component: UpdateCreatePostPage }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'banner', component: () => <Navigate to='/cms/banner/list' replace /> }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'banner/list', component: BannersPage }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'banner/new', component: UpdateCreateBannerPage }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'banner/edit/$id', component: UpdateCreateBannerPage }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'event', component: () => <Navigate to='/cms/event/list' replace /> }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'event/list', component: EventsPage }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'event/new', component: CreateEventPage }),
    createRoute({ getParentRoute: () => cmsRoute, path: 'information', component: InformationPage }),
]

const routeTree = rootRoute.addChildren([
    loginRoute,
    publicRoute.addChildren(publicChildRoutes),
    cmsRoute.addChildren(cmsChildRoutes),
])

const router = createRouter({ routeTree })

export const Router = () => <RouterProvider router={router} />
