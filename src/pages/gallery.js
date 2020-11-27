import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import axios from "axios"
import styled from "styled-components"
import { Container, HeadingH1, Paragraph } from "../styles/shared"
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
