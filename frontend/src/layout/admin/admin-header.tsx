import { memo } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Bell, Check, Cog, LogOut, Moon, Sun, User } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import {
  Popover,
  PopoverContent,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from '@/components/ui/popover'
import { getAdminPageTitle } from './admin-nav'

const AdminHeader = () => {
  const pageTitle = useRouterState({ select: (state) => getAdminPageTitle(state.location.pathname) })
  const { theme, setTheme } = useTheme()

  const themeOptions = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
  ]

  return (
    <header className='sticky top-0 z-20 flex h-14 shrink-0 items-center gap-3 border-b bg-background/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-background/75'>
      <SidebarTrigger />
      <Separator orientation='vertical' className='h-5' />

      <Breadcrumb className='min-w-0 flex-1'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <span className='text-muted-foreground'>CMS</span>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className='truncate'>{pageTitle}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='ml-auto flex items-center gap-1.5'>
        <Button type='button' variant='ghost' size='icon-sm' aria-label='Notifications'>
          <Bell className='size-4' />
        </Button>

        <Popover>
          <PopoverTrigger
            className='inline-flex size-7 items-center justify-center rounded-lg transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50'
            type='button'
            aria-label='Theme settings'
          >
            <Cog className='size-4' />
          </PopoverTrigger>
          <PopoverContent align='end' className='w-48'>
            <PopoverHeader>
              <PopoverTitle>Theme</PopoverTitle>
            </PopoverHeader>
            <div className='grid gap-1'>
              {themeOptions.map((option) => {
                const Icon = option.icon
                const isSelected = theme === option.value

                return (
                  <button
                    key={option.value}
                    type='button'
                    className='flex h-8 w-full items-center gap-2 rounded-md px-2 text-left text-sm transition-colors hover:bg-muted'
                    onClick={() => setTheme(option.value)}
                  >
                    <Icon className='size-4 text-muted-foreground' />
                    <span className='flex-1'>{option.label}</span>
                    {isSelected && <Check className='size-4' />}
                  </button>
                )
              })}
            </div>
          </PopoverContent>
        </Popover>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button type='button' variant='ghost' className='h-9 gap-2 px-2'>
                <Avatar size='sm'>
                  <AvatarImage src='/assets/user.png' alt='Admin profile' />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <span className='hidden text-sm font-medium md:inline'>Admin</span>
              </Button>
            }
          />
          <DropdownMenuContent align='end' className='w-48'>
            <DropdownMenuLabel>Admin</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem render={<Link to='/' />}>
              <User />
              <span>Hồ sơ</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut />
              <span>Đăng xuất</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default memo(AdminHeader)
