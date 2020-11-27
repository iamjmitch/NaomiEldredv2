import React, { useState } from "react"
import styled from "styled-components"

import { Container, Paragraph } from "../../styles/shared"

import Img from "gatsby-image"

const StyledImg = styled.div`
  overflow: hidden;
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`

const GalleryImage = ({ id, fluid, ...props }) => {
  function handleOpen() {
    props.onClick(fluid.originalImg)
  }

  return (
    <StyledImg onClick={handleOpen}>
      <Img key={id} fluid={fluid} />
    </StyledImg>
  )
}

export default GalleryImage
