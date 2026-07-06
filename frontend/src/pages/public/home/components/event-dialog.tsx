import { memo, useEffect, useState } from "react"
import { Link } from "@tanstack/react-router"
import { CircleX } from "lucide-react"
import { useGetEventsHook } from "../../../../hooks/event.hook"
import { ROUTES } from '@/routes/path'
import {
    Dialog,
    DialogClose,
    DialogContent,
} from '@/components/ui/dialog'
import { LazyLoadImage } from "../../../../components/lazy-load-image"

const EventDialog = () => {
    const { data: event } = useGetEventsHook({ filter: { isActive: true } })
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (event?.data) setOpen(true)
    }, [event?.data])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent showCloseButton={false} className='p-0 max-w-6xl!'>
                <div className='relative h-full w-full'>
                    <div className='absolute top-3 right-3 z-10'>
                        <DialogClose
                            render={
                                <button className='rounded-full bg-white p-1 shadow-md'>
                                    <CircleX size={24} color='purple' />
                                </button>
                            }
                        />
                    </div>
                    <Link to={ROUTES.news} className='w-full h-full'>
                        <LazyLoadImage
                            widths={[
                                { screenWidth: 640, imageWidth: 640 },  // Phone
                                { screenWidth: 1024, imageWidth: 1024 },  // Tablet
                                { screenWidth: 1920, imageWidth: 1920 },  // Desktop and larger
                            ]}
                            alt='event'
                            src={event?.data?.[0]?.image}
                            className='object-cover w-full h-full'
                            effect='blur'
                        />
                    </Link>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default memo(EventDialog)
