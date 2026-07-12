import { httpClient } from '@/lib/repository/http-client'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type SpeechSynthesisType = {
    voices: SpeechSynthesisVoice[]
    textToSpeech: (value: string) => void
}

const SpeechSynthesisContext = createContext<SpeechSynthesisType | null>(null)

export const SpeechSynthesisProvider = ({ children }: { children: React.ReactNode }) => {
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])

    useEffect(() => {
        const loadVoices = () => {
            setVoices(window.speechSynthesis.getVoices())
        }
        loadVoices()
        window.speechSynthesis.onvoiceschanged = loadVoices
        return () => {
            window.speechSynthesis.onvoiceschanged = null
        }
    }, [])

    const textToSpeech = async (text: string) => {
        // first check to see if web speech API support vietnamese and use it
        const utterance = new SpeechSynthesisUtterance(text)
        const vietnameseVoice = voices.find(voice => voice.lang === 'vi-VN')
        if (vietnameseVoice) {
            utterance.voice = vietnameseVoice
            utterance.lang = 'vi-VN'
            utterance.rate = 1.0
            utterance.pitch = 1.0
            utterance.volume = 1.0
            window.speechSynthesis.speak(utterance)
        } else {
            const apiKey = import.meta.env.VITE_ELEVEN_LAB_API_KEY
            // if web speech API is not supported switch to eleven lab TTS API
            const response = await httpClient.post(
                'https://api.elevenlabs.io/v1/text-to-speech/JBFqnCBsd6RMkjVDRZzb',
                {
                    text,
                    model_id: 'eleven_v3',
                    voice_settings: {
                        stability: 0.5,
                        similarity_boost: 1.0,
                    },
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        ...(apiKey && { 'xi-api-key': apiKey }),
                    },
                    credentials: 'omit'
                }
            )

            if (!response.ok) throw new Error('Failed to generate speech')
            const blob = await response.blob()
            const url = URL.createObjectURL(blob)
            const audio = new Audio(url)

            audio.onended = () => {
                URL.revokeObjectURL(url)
            }

            await audio.play()
        }
    }

    const value = useMemo(() => ({
        voices,
        textToSpeech
    }), [voices, textToSpeech])

    return (
        <SpeechSynthesisContext.Provider value={value}>
            {children}
        </SpeechSynthesisContext.Provider>
    )
}

export const useSpeechSynthesis = () => {
    const context = useContext(SpeechSynthesisContext)

    if (!context) {
        throw new Error('useBanners must be used within <SpeechSynthesisProvider>')
    }

    return context
}
