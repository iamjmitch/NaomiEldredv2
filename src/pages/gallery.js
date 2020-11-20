import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import axios from "axios"
import styled from "styled-components"
import { Container, HeadingH1, Paragraph } from "../styles/shared"
import Layout from "../components/global/layout"
import PageHeader from "../components/global/pageHeader"
import fetchInstagramPhotos from "../components/gallery/instagramGetter"

const GalleryPage = props => {
  const instagramRegExp = new RegExp(
    /<script type="text\/javascript">window\._sharedData = (.*);<\/script>/
  )

  const fetchInstagramPhotos = async accountUrl => {
    const response = await axios.get(accountUrl)
    const json = JSON.parse(response.data.match(instagramRegExp)[1])
    const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
      0,
      12
    )
    return edges.map(({ node }) => ({
      url: `https://www.instagram.com/p/${node.shortcode}/`,
      thumbnailUrl: node.thumbnail_src,
      displayUrl: node.display_url,
      caption: node.edge_media_to_caption.edges[0].node.text,
    }))
  }

  ;(async () => {
    try {
      const photos = await fetchInstagramPhotos(
        "https://www.instagram.com/naomieldredmakeup/"
      )
      const container = document.getElementById("instagram-photos")
      photos.forEach(el => {
        console.log(el.url)
      })
    } catch (e) {
      console.error("Fetching Instagram photos failed", e)
    }
  })()
  return (
    <Layout margin="112.578px 0 0 0" pageName="gallery" title="Gallery">
      <PageHeader title="Gallery" />
    </Layout>
  )
}

export default GalleryPage
