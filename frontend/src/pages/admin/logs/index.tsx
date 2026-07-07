import { getRouteApi } from '@tanstack/react-router'
import { ShimmerList } from '@/layout/common'
import { useGetLogsHook } from '@/hooks/log.hook'
import type { NavigateFn } from '@/hooks/use-table-url-state'
import { LogsDialogs } from './components/logs-dialogs'
import { LogsProvider } from './components/logs-provider'
import { LogsTable } from './components/logs-table'

const route = getRouteApi('/cms/log/list')

const LogsPage = () => {
  const filter = { page: 1 }
  const { data: logs, isLoading } = useGetLogsHook({ filter })
  const search = route.useSearch()
  const navigate = route.useNavigate() as NavigateFn

  return (
    <LogsProvider>
      <div className='rounded-md p-4'>
        <div className='space-y-4'>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <div className='w-full'>
              <span className='text-xl font-bold'>Danh sách log</span>
            </div>
          </div>
          {isLoading ? (
            <div className='rounded-md border p-3'>
              <ShimmerList />
            </div>
          ) : (
            <LogsTable data={logs?.data ?? []} search={search} navigate={navigate} />
          )}
        </div>
      </div>
      <LogsDialogs />
    </LogsProvider>
  )
}

export default LogsPage
