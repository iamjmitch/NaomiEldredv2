import React from "react"
import Layout from "../components/global/layout"
import PageHeader from "../components/global/pageHeader"
import Gallery from "../components/gallery/gallery"

const GalleryPage = props => {
  return (
    <Layout margin="112.578px 0 0 0" pageName="gallery" title="Gallery">
      <PageHeader title="Gallery" />
      <Gallery />
    </Layout>
  )
}

export default GalleryPage
