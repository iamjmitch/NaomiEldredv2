import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "./layout"

import { Container, HeadingH1, Paragraph } from "../../styles/shared"

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
    h1 {
      padding: 25px 0 !important;
    }
  }
`

const HeaderContainer = styled(Container)`
  flex-direction: column;
  @media screen and (max-width: 500px) {
    .hide {
      display: none;
    }
  }
`

const PageHeader = props => {
  return (
    <HeaderContainer>
      <Container className="hide">
        <ImgContainer background={`url(${props.img})`}></ImgContainer>
      </Container>
      <HeadingH1 padding="50px 0" fontSize="50px" color="black">
        {props.title}
      </HeadingH1>
    </HeaderContainer>
  )
}

export default PageHeader
