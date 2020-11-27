import React, { useState } from "react"
import { useStaticQuery } from "gatsby"
import styled from "styled-components"
import GalleryImage from "./galleryImage"
import { PINK } from "../../styles/colors"

import { Container, Paragraph, ContainerGrid } from "../../styles/shared"

const useGallery = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "gallery" } }) {
        nodes {
          id
          childImageSharp {
            fluid(jpegQuality: 90) {
              ...GatsbyImageSharpFluid
              originalImg
            }
          }
        }
      }
    }
  `)

  return data.allFile.nodes.map(node => ({
    ...node.childImageSharp,
    id: node.id,
  }))
}

const StyledGallery = styled.div`
  max-width: 100%;
  padding: 0 10px;
  width: 1280px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  grid-auto-rows: 300px;
  grid-gap: 0.5em;
  justify-content: center;
  margin-bottom: 100px;
  > * {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);
    width: 100%;
    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 645px) {
    grid-template-columns: repeat(2, 190px);
    grid-auto-rows: 190px;
  }
  @media screen and (max-width: 410px) {
    grid-template-columns: repeat(auto-fit, 150px);
    grid-auto-rows: 150px;
  }
`

const Lightbox = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${props => (props.show ? "flex" : "none")};
  z-index: ${props => (props.show ? "2000" : "-2000")};
  justify-content: center;
  align-items: center;
  background: #000000eb;
  padding: 20px;
  img {
    max-width: 100%;
    max-height: 100%;
    border: 5px solid ${PINK};
  }
`

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState("")
  const [showLightbox, setShowLightbox] = useState(false)

  function handleChange(url) {
    setSelectedImage(url)
    setShowLightbox(true)
  }

  const images = useGallery()

  return (
    <Container>
      <StyledGallery>
        {images.map(({ id, fluid }) => (
          <GalleryImage key={id} fluid={fluid} onClick={handleChange} />
        ))}
      </StyledGallery>
      <Lightbox show={showLightbox} onClick={() => setShowLightbox(false)}>
        <img src={selectedImage} />
      </Lightbox>
    </Container>
  )
}

export default Gallery
