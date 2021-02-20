import React from "react"
import "./index.styles.scss"

import VideoSection from "../components/videoSection/videoSection"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"
function Home() {
  return (
    <Layout>
      <Seo />
      <VideoSection />
    </Layout>
  )
}

export default Home
