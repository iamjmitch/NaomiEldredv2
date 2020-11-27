import React, { useState } from "react"
import styled from "styled-components"

import { Container, Paragraph } from "../../styles/shared"

import Img from "gatsby-image"

const StyledImg = styled(Img)``

const Lightbox = styled(Container)`
position: fixed;
top:0;
left: 0;
width: 100%;
height: 100%;
display: ${props => (props.show ? "block" : "none")}
z-index: ${props => (props.show ? "2000" : "-2000")}
`

const GalleryImage = props => {
  function handleClick() {
    props.handleClick(props.fluid.originalImg)
  }

  return (
    <div>
      {/* <Lightbox show={showLightbox}>
        <img src={selectedImage} />
      </Lightbox> */}
      <StyledImg key={props.id} fluid={props.fluid} />
    </div>
  )
}

export default GalleryImage
