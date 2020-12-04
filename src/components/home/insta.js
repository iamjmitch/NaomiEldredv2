import React from "react"
import styled from "styled-components"
import { Container, HeadingH3 } from "../../styles/shared"
import { INSTALIST } from "../home/instList"
import InstaPic from "./instaPic"

const StyledGallery = styled.div`
  max-width: 100%;
  padding: 0;
  width: 1280px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 314px);
  grid-auto-rows: 314px;
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
    padding: 0 20px;
    grid-template-columns: repeat(auto-fit, 23vw);
    grid-auto-rows: 23vw;
    
    grid-gap: 0.5em;
    h3 {
      font-size: 40px;
    }
  }

  @media screen and (max-width: 743px) {
    
    grid-template-columns: repeat(auto-fit, 22vw);
    grid-auto-rows: 22vw;
  }
  @media screen and (max-width: 725px) {
    grid-template-columns: repeat(auto-fit, 150px);
    grid-auto-rows: 150px;
  }
  @media screen and (max-width: 661px) {
    grid-template-columns: repeat(auto-fit, 220px);
    grid-auto-rows: 220px;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, 170px);
    grid-auto-rows: 170px;
    grid-gap: 20px;
   
  }
  }
  @media screen and (max-width: 410px) {
    grid-template-columns: repeat(auto-fit, 150px);
    grid-auto-rows: 150px;
    padding: 0 20px;
  }
`

const InstaGallery = () => {
  return (
    <Container
      flexDirection="column"
      media="screen and (max-width: 1000px) {h3 {font-size: 40px;}}"
      other="h3{letter-spacing: 5px;}"
    >
      <HeadingH3
        fontSize="50px"
        padding=" 0 0 50px 0"
        data-sal="slide-right"
        data-sal-delay="50"
        data-sal-easing="ease"
      >
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
