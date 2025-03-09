import { useRef } from "react"
import { icons } from "../utils/icons"
import { Link } from "react-router-dom"
import AlertImage from '../assets/other/thong-bao.jpg'

const NotificationOverlay = () => {
    const { MdCancel } = icons
    const ref = useRef()

    const removeOverlay = () => ref.current.classList.add('hidden')

    return (
        <div ref={ref} className="fixed block w-full h-full top-0 left-0 right-0 bottom-0 bg-[rgba(87,87,87,.5)] z-[999]" onClick={removeOverlay}>
            <div className="w-2/3 h-4/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                <div className='relative'>
                    <div className='absolute top-3 right-3'>
                        <MdCancel size={24} onClick={removeOverlay} fill="purple" />
                    </div>
                    <Link to={'/news'}>
                        <img alt='event' src={AlertImage} className="object-contain w-full h-full" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotificationOverlay