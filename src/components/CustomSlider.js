import React, { useState, useRef, useEffect } from "react"
import { icons } from "../utils/icons"

// export interface Settings {
//     children?: React.ReactNode,
//     slidesToShow: number,
//     autoplay?: boolean,
//     autoplaySpeed?: number,
//     infinite?: boolean,
//     responsive?: { breakpoint: number, slidesToShow: number }[],
//     customMargin?: number,
//     showDot?: boolean,
//     showButton?: boolean,
// }

const CustomSlider = ({
    children, slidesToShow = 1, autoplay = false, autoplaySpeed = 3000, infinite = true, responsive = [], customMargin = 2, showDot = true, showButton = true
}) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const sliderRef = useRef(null)
    const totalSlides = React.Children.count(children)
    const { FaChevronLeft, FaChevronRight } = icons
    const [visibleSlides, setVisibleSlides] = useState(slidesToShow)
    // Add states for touch/drag functionality
    const [isDragging, setIsDragging] = useState(false)
    const [startX, setStartX] = useState(0)
    const [dragOffset, setDragOffset] = useState(0)
    const [dragDistance, setDragDistance] = useState(0)

    const updateSlidesToShow = () => {
        let newSlidesToShow = slidesToShow
        responsive.forEach((breakpoint) => {
            if (window.innerWidth <= breakpoint.breakpoint) newSlidesToShow = breakpoint.slidesToShow
        })
        setVisibleSlides(newSlidesToShow)
    }

    useEffect(() => {
        updateSlidesToShow()
        window.addEventListener("resize", updateSlidesToShow)
        return () => window.removeEventListener("resize", updateSlidesToShow)
    }, [])

    const nextSlide = () => {
        if (currentIndex < totalSlides - visibleSlides) {
            setCurrentIndex(currentIndex + 1)
        } else if (infinite) {
            setCurrentIndex(0) // Loop back to start
        }
        setDragOffset(0) // Reset drag offset when using button
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        } else if (infinite) {
            setCurrentIndex(totalSlides - visibleSlides) // Loop back to end
        }
        setDragOffset(0) // Reset drag offset when using buttons
    }

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(() => { if (!isDragging) nextSlide() }, autoplaySpeed)
            return () => clearInterval(interval)
        }
    }, [currentIndex, autoplay, autoplaySpeed, isDragging])

    // Touch/Drag handlers
    const handleDragStart = (e) => {
        setIsDragging(true)
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
        setStartX(clientX)
        setDragDistance(0)
    }

    const handleDragMove = (e) => {
        if (!isDragging) return
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
        const diff = clientX - startX
        setDragDistance(Math.abs(diff)) // Track total distance moved
        const slideWidth = sliderRef.current.offsetWidth / visibleSlides
        const newOffset = (diff / slideWidth) * (100 / visibleSlides)
        setDragOffset(newOffset)
    }

    const handleDragEnd = (e) => {
        if (!isDragging) return
        setIsDragging(false)
        // Minimum pixels to consider it a drag instead of a click
        const MIN_DRAG_DISTANCE = 70
        // If movement is less than threshold, treat as click and don't change slide
        if (dragDistance < MIN_DRAG_DISTANCE) {
            setDragOffset(0)
            return
        }
        const clientX = 'touches' in e ? e.changedTouches[0].clientX : e.clientX
        const diff = clientX - startX
        if (diff < 0) { // Dragging left (next)
            if (currentIndex < totalSlides - visibleSlides) {
                setCurrentIndex(currentIndex + 1)
            } else if (infinite) {
                setCurrentIndex(0)
            }
        } else if (diff > 0) { // Dragging right (previous)
            if (currentIndex > 0) {
                setCurrentIndex(currentIndex - 1)
            } else if (infinite) {
                setCurrentIndex(totalSlides - visibleSlides)
            }
        }
        setDragOffset(0)
    }

    const baseTranslate = currentIndex * (100 / visibleSlides)
    const totalTranslate = baseTranslate - dragOffset

    return (
        <div className='relative w-full overflow-hidden'>
            {showButton &&
                <button onClick={prevSlide} className="absolute left-0 z-50 bg-slider-icon-gradient p-4 bottom-1/2 translate-y-1/2">
                    <FaChevronLeft size={24} fill="white" />
                </button>
            }
            <div className={`flex duration-1000 ease-in-out -mx-${customMargin}`} ref={sliderRef}
                style={{
                    transform: `translateX(-${totalTranslate}%)`,
                    transition: isDragging ? 'none' : 'transform 0.6s ease-in-out'
                }}
                onMouseDown={handleDragStart}
                onMouseMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleDragStart}
                onTouchMove={handleDragMove}
                onTouchEnd={handleDragEnd}
            >
                {
                    React.Children.map(children, (child, i) => {
                        return (
                            <div key={i} style={{ width: `${100 / visibleSlides}%`, flex: '0 0 auto' }}>{child}</div>
                        )
                    })
                }
            </div>
            {showButton &&
                <button onClick={nextSlide} className="absolute right-0 z-50 bg-slider-icon-gradient p-4 bottom-1/2 translate-y-1/2">
                    <FaChevronRight size={24} fill="white" />
                </button>
            }

            {/* Hiển thị dots */}
            {showDot &&
                <div className={`flex gap-3 absolute left-1/2 -translate-x-1/2 top-[95%]`}>
                    {
                        React.Children.map(children, (_, i) => {
                            return (
                                <div key={i} className={`rounded-full ${currentIndex == i ? 'bg-main-color' : `bg-purple-200`} p-1`}></div>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}

export default CustomSlider