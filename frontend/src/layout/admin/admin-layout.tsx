import { Outlet } from '@tanstack/react-router'
import { AdminHeader, AdminSidebar } from '@/layout/admin'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { Toaster } from '@/components/ui/sonner'
import { memo } from 'react'

const AdminLayout = () => {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <SidebarInset className='min-h-svh overflow-hidden'>
        <AdminHeader />
        <div className='flex-1 overflow-auto p-4 md:p-6'>
          <Outlet />
        </div>
      </SidebarInset>
      <Toaster richColors />
    </SidebarProvider>
  )
}

export default memo(AdminLayout)