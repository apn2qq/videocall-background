import React from "react"
import cn from "classnames"
import { saveAs } from "file-saver"

import { request } from "src/services/api"
import { Meta } from "src/features/meta"

export default function HomePage({ data }) {
  return (
    <React.Fragment>
      <Meta title="title" description="description"></Meta>
      <Hero></Hero>
      <main className="container">
        <section className="backgrounds">
          {data.backgrounds.map(({ id, ...rest }) => (
            <Background key={id} {...rest}></Background>
          ))}
        </section>
      </main>
    </React.Fragment>
  )
}

function Background({ name, image }) {
  function handleBackgroundClick() {
    saveAs(image.url, image.filename)
  }

  const [isLoaded, setIsLoaded] = React.useState()
  function handleImageLoad() {
    setIsLoaded(true)
  }

  return (
    <button onClick={handleBackgroundClick} className={"background"}>
      <img src={image.url} alt={image.alt} loading="lazy"></img>
    </button>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="title">Videocall backgrounds</h1>
        <h2 className="description">
          Curated selection of great virtual backgrounds for Zoom, Teams and Skype.
        </h2>
      </div>
    </section>
  )
}

export async function getStaticProps() {
  const data = await request({
    query: `query($limit: IntType) {
      backgrounds: allBackgrounds(first: $limit) {
        id
        name
        image {
          url
          filename
          alt
          responsiveImage {
            srcSet
            webpSrcSet
            sizes
            src
  
            width
            height
            aspectRatio
  
            alt
            title
  
            bgColor
  
            base64
          }
        }
      }
    }`,
    variables: { limit: 100 },
  })

  return {
    props: { data },
  }
}
