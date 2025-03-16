import { memo, useRef } from "react"
import { icons } from "../utils/icons"
import { Link } from "react-router-dom"
import { useGetEventsHook } from "../hooks/event.hook"

const EventOverlay = () => {
    const { MdCancel } = icons
    const ref = useRef()
    const { data: event } = useGetEventsHook({ filter: { isActive: true } })
    const removeOverlay = () => ref.current.classList.add('hidden')

    return (
        <>
            {event && event.data &&
                <div ref={ref} className="fixed block w-full h-full content-center top-0 bottom-0 left-0 right-0 bg-[#57575780] z-[999]" onClick={removeOverlay}>
                    <div className="max-w-screen-md aspect-video cursor-pointer mx-auto px-2 md:px-0">
                        <div className='relative'>
                            <div className='absolute top-3 right-3'>
                                <MdCancel size={24} onClick={removeOverlay} fill="purple" />
                            </div>
                            <Link to={'/news'} className="w-full h-full block">
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