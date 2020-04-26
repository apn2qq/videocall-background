import Head from "next/head"
import PropTypes from "prop-types"

export function Meta({ title = "", description = "", siteUrl = "", siteImage = "" }) {
  return (
    <Head>
      <meta charSet="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>

      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title}></meta>
      <meta name="description" content={description}></meta>

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content={siteUrl}></meta>
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={siteImage}></meta>

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:url" content={siteUrl}></meta>
      <meta property="twitter:title" content={title}></meta>
      <meta property="twitter:description" content={description}></meta>
      <meta property="twitter:image" content={siteImage}></meta>

      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
    </Head>
  )
}

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  siteUrl: PropTypes.string,
  siteImage: PropTypes.string,
}
