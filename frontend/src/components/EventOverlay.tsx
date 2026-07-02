import { memo, useRef } from "react"
import { Link } from "@tanstack/react-router"
import { CircleX } from "lucide-react"
import { useGetEventsHook } from "../hooks/event.hook"
import { ROUTES } from '../routes/path'

const EventOverlay = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const { data: event } = useGetEventsHook({ filter: { isActive: true } })
    const removeOverlay = () => ref.current?.classList.add('hidden')

    return (
        <>
            {event && event.data &&
                <div ref={ref} className="fixed block w-full h-full content-center top-0 bottom-0 left-0 right-0 bg-[#57575780] z-[999]" onClick={removeOverlay}>
                    <div className="max-w-screen-md aspect-video cursor-pointer mx-auto px-2 md:px-0">
                        <div className='relative'>
                            <div className='absolute top-3 right-3'>
                                <CircleX size={24} onClick={removeOverlay} color="purple" />
                            </div>
                            <Link to={ROUTES.news} className="w-full h-full block">
                                <img alt='event' src={event.data[0].image} className="object-cover w-full h-full" />
                            </Link>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default memo(EventOverlay)
