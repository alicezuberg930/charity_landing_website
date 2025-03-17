import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const CustomQueryClientProvider = ({ children }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 1000 * 60,
                refetchOnMount: false,
                refetchOnReconnect: false,
                refetchOnWindowFocus: false
            }
        }
    })

    return (
        <QueryClientProvider client={queryClient} >
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default CustomQueryClientProvider