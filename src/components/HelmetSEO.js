import { Helmet } from "react-helmet"

const HelmetSEO = ({ title, image, url, keywords = [], description }) => {
    return (
        <Helmet>
            {/* title attributes and value */}
            <title itemProp="name" lang="en">{title}</title>
            <meta name="keywords" content={keywords} />
            {/* multiple meta elements */}
            <meta name="description" content={description} />
            <meta property="og:type" content="article" />
            {/* <meta property="og:image" content={image || 'https://anhsangtuthien.com/assets/logo.png'} /> */}
            <meta property="og:url" content={url} />
            <meta property="og:description" content={description} />

            {/* multiple link elements */}
            {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            {/* <link rel="apple-touch-icon" href="http://mysite.com/img/apple-touch-icon-57x57.png" /> */}
            {/* <link rel="apple-touch-icon" sizes="72x72" href="http://mysite.com/img/apple-touch-icon-72x72.png" /> */}
            {/* inline script elements */}
            <script type="application/ld+json">{`{"@context": "http://schema.org"}`}</script>

        </Helmet>
    )
}

export default HelmetSEO