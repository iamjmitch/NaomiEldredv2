import axios from "axios"
import React, { useState } from "react"
import styled from "styled-components"
import Thumbnail from "./thumbnail"

const InstagramPhotos = () => {
  const [photoList, setPhotoList] = useState([])

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
        "https://gramho.com/profile/naomieldredmakeup/6030645989"
      )
      const container = document.getElementById("instagram-photos")
      setPhotoList(photos)
    } catch (e) {
      console.error("Fetching Instagram photos failed", e)
    }
  })()

  return (
    <div>
      {photoList !== [] &&
        photoList.map(post => (
          <div>
            <Thumbnail thumb={post.thumbnailUrl} />
          </div>
        ))}
    </div>
  )
}

export default InstagramPhotos
