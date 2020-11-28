import React, { useState } from "react"
import styled from "styled-components"

import { Container, Paragraph } from "../../styles/shared"

const StyledImg = styled.div`
  overflow: hidden;
  a img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const InstaPic = props => {
  return (
    <StyledImg>
      <a href={props.url} target="_blank">
        <img src={props.img} alt="Instagram Photo" />
      </a>
    </StyledImg>
  )
}

export default InstaPic
