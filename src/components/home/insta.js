import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container, HeadingH3, HeadingH2, Paragraph } from "../../styles/shared"
import { FONT_FAMILY } from "../../styles/typography"
import { PINK } from "../../styles/colors"
import { INSTALIST } from "../home/instList"
import InstaPic from "./instaPic"

const StyledGallery = styled.div`
  max-width: 100%;
  padding: 0;
  width: 1280px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 314px);
  grid-auto-rows: 320px;
  grid-gap: 8px;
  justify-content: center;
  margin-bottom: 100px;
  box-sizing: border-box;
  > * {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);
    width: 100%;
    &:hover {
      cursor: pointer;
    }
  }
  @media screen and (max-width: 1300px) {
    width: 100%;
    padding: 0 10px;
    grid-gap: 0.5em;
    h3 {
      font-size: 9vw;
    }
  }
  @media screen and (max-width: 670px) {
    grid-template-columns: repeat(auto-fit, 190px);
    grid-auto-rows: 190px;
  }
  @media screen and (max-width: 410px) {
    grid-template-columns: repeat(auto-fit, 150px);
    grid-auto-rows: 150px;
  }
`

const InstaGallery = () => {
  return (
    <Container
      flexDirection="column"
      media="screen and (max-width: 1000px) {h3 {font-size: 9vw;}}"
      other="h3{letter-spacing: 5px;}"
    >
      <HeadingH3 fontSize="50px" padding=" 0 0 50px 0">
        Naomi on Instagram
      </HeadingH3>
      <StyledGallery>
        {INSTALIST.map(pic => (
          <InstaPic img={pic.thumb} url={pic.url} />
        ))}
      </StyledGallery>
    </Container>
  )
}

export default InstaGallery
