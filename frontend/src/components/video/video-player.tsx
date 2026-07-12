import '@/styles/video-player.css'
import { useEffect, useRef, useState } from "react"
import Hls from "hls.js"
import { formatDuration } from "@/lib/utils"
import type { Video } from "@/@types"
import type { VideoPlayerProps } from "./types"
import { Fullscreen, PauseCircle, PlayCircle, Settings, Theater, Volume1, Volume2, VolumeOff } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

export const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
    // local states
    // const [video, setVideo] = useState<Video | null>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isTheater, setIsTheater] = useState(false)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [volume, setVolume] = useState(50)
    const [currentTime, setCurrentTime] = useState(0)
    let isScrubbing = false
    const isMobile = useIsMobile()
    const settings = useRef<HTMLDivElement | null>(null)
    const timelineContainer = useRef<HTMLDivElement | null>(null)
    const videoContainer = useRef<HTMLDivElement | null>(null)
    const videoPlayer = useRef<HTMLVideoElement | null>(null)
    const hlsRef = useRef<Hls | null>(null)

    const initializeVideoPlayer = (url: string) => {
        if (!videoContainer.current || !videoPlayer.current) return

        if (hlsRef.current) {
            hlsRef.current.destroy()
            hlsRef.current = null
        }

        videoPlayer.current.pause()
        videoPlayer.current.currentTime = 0
        setIsPlaying(false)
        videoPlayer.current.removeAttribute('src')
        videoPlayer.current.load()

        const isHlsUrl = /\.m3u8(\?.*)?$/i.test(url)

        if (isHlsUrl && Hls.isSupported()) {
            const hls = new Hls()
            hlsRef.current = hls
            hls.loadSource(url)
            hls.attachMedia(videoPlayer.current)
            return
        }

        videoPlayer.current.src = url
        videoPlayer.current.load()
    }

    useEffect(() => {
        initializeVideoPlayer(videoUrl)
        return () => {
            if (hlsRef.current) {
                hlsRef.current.destroy()
                hlsRef.current = null
            }
        }
    }, [videoUrl])

    const toggleVideo = () => {
        if (videoPlayer.current === null) return
        if (!isPlaying) {
            videoPlayer.current.play()
            setIsPlaying(true)
        } else {
            videoPlayer.current.pause()
            setIsPlaying(false)
        }
    }

    const videoKeyDown = (e: React.KeyboardEvent<HTMLVideoElement>) => {
        if (videoPlayer.current === null) return
        if (e.code === "Space") toggleVideo()
        if (e.code === "ArrowLeft") videoPlayer.current.currentTime -= 5
        if (e.code === "ArrowRight") videoPlayer.current.currentTime += 5
    }

    const toggleTheaterMode = () => {
        if (!videoContainer.current || !videoPlayer.current) return
        videoContainer.current.classList.toggle('theater')
        videoPlayer.current.classList.toggle('h-[90vh]')
        setIsTheater(prev => !prev)
    }

    const toggleFullScreen = () => {
        setIsFullscreen(!isFullscreen)
        if (!document.fullscreenElement) {
            if (!videoContainer.current || !videoPlayer.current) return
            // dispatch(setTheater(false))
            videoContainer.current.classList.remove('theater')
            videoPlayer.current.classList.remove('h-[90vh]')
            videoContainer.current.requestFullscreen()
        } else {
            document.exitFullscreen()
        }
    }

    const togglePictureInPicture = () => {
        if (!videoPlayer.current) return
        if (videoPlayer.current.classList.contains("mini-player")) {
            document.exitPictureInPicture()
        } else {
            videoPlayer.current.requestPictureInPicture()
        }
    }

    const muteAudio = () => {
        if (!videoPlayer.current) return
        videoPlayer.current.muted = !videoPlayer.current.muted
        if (videoPlayer.current.muted) setVolume(0)
        else setVolume(50)
    }

    const displaySettings = () => {
        if (settings.current) {
            settings.current.classList.toggle('hidden')
        }
    }

    const changePlayBackRate = (speed: number) => {
        if (videoPlayer.current) videoPlayer.current.playbackRate = speed
        displaySettings()
    }

    const toggleScrubbing = (e: MouseEvent) => {
        if (!videoPlayer.current || !timelineContainer.current) return
        const rect = timelineContainer.current.getBoundingClientRect()
        const percent = Math.min(Math.max(0, e.x - rect!.x), rect!.width) / rect.width
        isScrubbing = (e.buttons & 1) === 1
        timelineContainer.current.classList.toggle("scrubbing", isScrubbing)
        if (isScrubbing) {
            videoPlayer.current.pause()
            videoPlayer.current.currentTime = percent * (videoPlayer.current.duration || Infinity)
        } else {
            if (videoPlayer.current.paused) videoPlayer.current.play()
        }
        handleVideoPlaying(e)
    }

    const handleVideoPlaying = (e: MouseEvent) => {
        if (!timelineContainer.current) return
        const rect = timelineContainer.current.getBoundingClientRect()
        const percent = Math.min(Math.max(0, e.x - rect.x), rect.width) / rect.width
        timelineContainer.current.style.setProperty("--preview-position", percent.toString())
        if (isScrubbing) {
            e.preventDefault()
            timelineContainer.current.style.setProperty("--progress-position", percent.toString())
        }
    }

    useEffect(() => {
        if (!videoPlayer.current || !timelineContainer.current) return
        videoPlayer.current.addEventListener('enterpictureinpicture', () => {
            videoPlayer?.current?.classList.add('mini-player')
        })
        videoPlayer.current.addEventListener('leavepictureinpicture', () => {
            videoPlayer?.current?.classList.remove('mini-player')
        })
        videoPlayer.current.addEventListener('timeupdate', () => {
            setCurrentTime(Math.round(videoPlayer?.current?.currentTime || 0))
            const percent = (videoPlayer?.current?.currentTime || 0) / (videoPlayer?.current?.duration || Infinity)
            timelineContainer?.current?.style.setProperty("--progress-position", percent.toString())
        })
        timelineContainer.current.addEventListener('mousemove', handleVideoPlaying)
        timelineContainer.current.addEventListener('mousedown', toggleScrubbing)
        document.addEventListener('mouseup', (e) => {
            if (isScrubbing) toggleScrubbing(e)
        })
        document.addEventListener('mousemove', (e) => {
            if (isScrubbing) toggleScrubbing(e)
        })
        return () => {
            document.removeEventListener('mouseup', (e) => {
                if (isScrubbing) toggleScrubbing(e)
            })
            document.removeEventListener('mousemove', (e) => {
                if (isScrubbing) toggleScrubbing(e)
            })
        }
    }, [videoPlayer, timelineContainer])

    useEffect(() => {
        if (!videoPlayer.current) return
        videoPlayer.current.volume = volume / 100
    }, [volume])

    return (
        <div className={`all-container w-full bg-purple-950 py-10 gap-6 ${isTheater ? 'h-fit' : 'h-screen flex justify-between px-5'}`}>
            <div ref={videoContainer} className={`relative h-fit ${isTheater ? 'w-full' : 'w-3/4'}`}>
                <video ref={videoPlayer} className="rounded-md bg-black outline-none" width="100%" onClick={toggleVideo} tabIndex={0} onKeyDown={videoKeyDown} />
                <img className="thumbnail-img" alt="thumbnail-img" />
                <div className="px-2 absolute bottom-0 left-0 right-0 video-controls-container">
                    <div className="timeline-container h-2 rounded-full cursor-pointer flex items-center" ref={timelineContainer}>
                        <div className="timeline">
                            <img className="preview-img" alt="preview-img" src={"./assets/photoshoot/anh-cuoi-1.jpg"} />
                            {/* <img className="preview-img" alt="preview-img" src={video?.thumbnail} /> */}
                            <div className="thumb-indicator"></div>
                        </div>
                    </div>
                    <div className="relative flex items-center text-white py-1 px-3 gap-3">
                        {isPlaying ? (
                            <span onClick={toggleVideo}>
                                <PauseCircle size={40} />
                            </span>
                        ) : (
                            <span onClick={toggleVideo}>
                                <PlayCircle size={40} />
                            </span>
                        )}
                        <div className="flex items-center group gap-2">
                            <span onClick={muteAudio}>
                                {(volume < 50 && volume > 0) && <Volume1 size={30} />}
                                {volume >= 50 && <Volume2 size={30} />}
                                {volume === 0 && <VolumeOff size={30} />}
                            </span>
                            <input
                                className="h-1 rounded-full transition-all w-0 scale-x-0 origin-left focus-within:w-24 focus-within:scale-x-100 group-hover:w-24 group-hover:scale-x-100"
                                type="range" step={1} min={0} max={100} value={volume} onChange={(e) => setVolume(Number(e.target.value))}
                            />
                        </div>
                        <div className="flex gap-1 text-sm flex-1">
                            <span>{formatDuration(currentTime)}</span>
                            <span>/</span>
                            <span>{formatDuration(Math.floor(videoPlayer.current?.duration ?? 0))}</span>
                            {/* <span>{formatDuration(video?.duration!)}</span> */}
                        </div>
                        <Settings size={30} onClick={displaySettings} />
                        {!isFullscreen && (
                            <span onClick={toggleTheaterMode}>
                                <Theater size={30} />
                            </span>
                        )}
                        <span onClick={toggleFullScreen}>
                            {isFullscreen ? (
                                <Fullscreen size={30} />
                            ) : (
                                <Fullscreen size={30} />
                            )}
                        </span>
                        <span onClick={togglePictureInPicture}>
                            {/* <MdPictureInPicture size={30} /> */}
                        </span>
                        <div ref={settings} className="cursor-pointer hidden rounded-md w-50 bg-[rgba(255,255,255,0.3)] absolute bottom-14 right-0 py-2">
                            <div onClick={() => changePlayBackRate(0.25)}
                                className="p-2 hover:bg-[rgba(255,255,255,0.2)] flex justify-between items-center px-2"
                            >
                                <span>Tốc độ x0.25</span>
                                {/* <span><BsPlayFill size={20} /></span> */}
                            </div>
                            <div onClick={() => changePlayBackRate(0.5)}
                                className="p-2 hover:bg-[rgba(255,255,255,0.2)] flex justify-between items-center px-2"
                            >
                                <span>Tốc độ x0.5</span>
                                {/* <span><BsPlayFill size={20} /></span> */}
                            </div>
                            <div onClick={() => changePlayBackRate(1)}
                                className="p-2 hover:bg-[rgba(255,255,255,0.2)] flex justify-between items-center px-2"
                            >
                                <span>Tốc độ chuẩn</span>
                                {/* <span><BsPlayFill size={20} /></span> */}
                            </div>
                            <div onClick={() => changePlayBackRate(1.5)}
                                className="p-2 hover:bg-[rgba(255,255,255,0.2)] flex justify-between items-center px-2"
                            >
                                <span>Tốc độ x1.5</span>
                                {/* <span><BsPlayFill size={20} /></span> */}
                            </div>
                            <div onClick={() => changePlayBackRate(2)}
                                className="p-2 hover:bg-[rgba(255,255,255,0.2)] flex justify-between items-center px-2"
                            >
                                <span>Tốc độ x2</span>
                                {/* <span><BsPlayFill size={20} /></span> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}