import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "./layout"

import { Container, HeadingH1, Paragraph } from "../../styles/shared"

const ImgContainer = styled(Container)`
  height: 250px;
  margin-top: 5px;
  overflow: hidden;
  max-width: 1280px;
  background-position: center;
  @media screen and (max-width: 725px) {
    height: 175px;
  }
  @media screen and (max-width: 500px) {
    height: 100px;
  }
`

const HeaderContainer = styled(Container)`
  flex-direction: column;
  h1 {
    font-size: 50px;
  }
  @media screen and (max-width: 500px) {
    .hide {
      display: none;
    }
    h1 {
      padding: 25px 0 !important;
      font-size: 40px;
    }
  }
`

const PageHeader = props => {
  return (
    <HeaderContainer>
      {/* <Container className="hide">
        <ImgContainer background={`url(${props.img})`}></ImgContainer>
      </Container> */}
      <HeadingH1 padding="50px 0" color="black">
        {props.title}
      </HeadingH1>
    </HeaderContainer>
  )
}

export default PageHeader
