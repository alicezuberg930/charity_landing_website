import { useEffect } from "react"

export const useSEO = ({
    keywords = [],
    title, description, ogTitle, ogDescription, ogImage, ogUrl
}) => {
    useEffect(() => {
        document.title = title
        setMetadata({ attribute: 'name', key: 'description', content: description })
        setMetadata({ attribute: 'name', key: 'keywords', content: keywords })
        setMetadata({ attribute: 'property', key: 'og:title', content: ogTitle || title })
        setMetadata({ attribute: 'property', key: 'og:description', content: ogDescription || description })
        setMetadata({ attribute: 'property', key: 'og:image', content: ogImage || './assets/logo.png' })
        setMetadata({ attribute: 'property', key: 'og:url', content: ogUrl || window.location.href })
        return () => { }
    }, [title, keywords = [], description, ogTitle, ogDescription, ogImage, ogUrl])

    const setMetadata = ({ attribute, key, content }) => {
        if (content) {
            let element = document.querySelector(`meta[${attribute}="${key}"]`)
            if (!element) {
                element = document.createElement('meta')
                element.setAttribute(attribute, key)
                document.head.appendChild(element)
            } else {
                element.setAttribute('content', content)
            }
        }
    }
}