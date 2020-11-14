import React from "react"
import styled from "styled-components"

import { Container } from "../styles/shared"
import { WHITE } from "../styles/colors"
import { FONT_HERO } from "../styles/typography"

import heroImgFull from "../assets/img/home/hero/2250.jpg"
import heroImg1920 from "../assets/img/home/hero/1920.jpg"
import heroImg1280 from "../assets/img/home/hero/1280.jpg"
import HeroL from "../assets/svg/heroLogo.svg"

const SStyledContainer = styled(Container)`
  position: relative;
  padding-bottom: 50px;
  svg {
    max-width: 50vw;
  }
`

const HeroImageBG = styled.img`
  position: absolute;
  z-index: -2;
  width: 100%;
  min-height: 100%;
  top: -20px;
  filter: contrast(80%);
`

const HeroHeading = styled.h1`
  font-size: 3.5rem;
  letter-spacing: 20px;
  color: ${WHITE};
  margin: 0;
  text-shadow: rgb(0 0 0 / 52%) 2px 2px;
  font-family: ${FONT_HERO};
  font-weight: 300;
`

const Hero = () => {
  return (
    <SStyledContainer height="100vh" flexDirection="column">
      <HeroImageBG
        srcSet={`${heroImgFull} 2250w, ${heroImg1920} 1920w, ${heroImg1280} 1280w`}
        src={heroImg1280}
      />
      <HeroL />
      <HeroHeading>MAKEUP ARTIST</HeroHeading>
    </SStyledContainer>
  )
}

export default Hero
