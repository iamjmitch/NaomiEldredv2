import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "./layout"

import { Container, HeadingH1, Paragraph } from "../../styles/shared"
import { NAVHOVER } from "../../styles/colors"
import { FONT_FAMILY_HEADING, WEIGHT } from "../../styles/typography"

const ImgContainer = styled(Container)`
  height: 250px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 725px) {
    height: 175px;
  }
  @media screen and (max-width: 500px) {
    height: 100px;
  }
`

const PageHeader = props => {
  return (
    <Container flexDirection="column">
      <ImgContainer>
        <img src={props.img} />
      </ImgContainer>
      <HeadingH1 padding="50px 0" fontSize="50px">
        {props.title}
      </HeadingH1>
    </Container>
  )
}

export default PageHeader
