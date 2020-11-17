import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { Container } from "../styles/shared"
import { WHITE } from "../styles/colors"
import { FONT_HERO } from "../styles/typography"

import heroImgFull from "../assets/img/home/hero/2250.jpg"
import heroImg1920 from "../assets/img/home/hero/1920.jpg"
import heroImg1280 from "../assets/img/home/hero/1280.jpg"
import heroImg725 from "../assets/img/home/hero/725.jpg"
import heroImg500 from "../assets/img/home/hero/500.jpg"
import HeroLogoNaomi from "../assets/svg/heroLogoNaomi.svg"
import HeroLogoEldred from "../assets/svg/heroLogoEldred.svg"

const SStyledContainer = styled(Container)`
  padding-bottom: 200px;
  position: relative;
  text-align: center;
  overflow: hidden;
  svg {
    max-width: 50vw;
    min-width: 300px;
  }
  @media screen and (max-width: 725px) {
    padding-bottom: 0;
  }
`

const LogoContainer = styled(Container)`
  padding-bottom: 20px;
  svg {
    padding: 10px;
    width: 30%;
    height: auto;
  }
  @media screen and (max-width: 1100px) {
    svg {
      padding: 10px;
      width: 80%;
      height: auto;
    }
    flex-direction: column;
  }
`
const HeroHeading = styled.h1`
  font-size: 3.5rem;
  letter-spacing: 20px;
  text-indent: 20px;
  color: ${WHITE};
  margin: 0;
  text-shadow: rgb(0 0 0 / 52%) 2px 2px;
  font-family: ${FONT_HERO};
  font-weight: 300;
  @media screen and (max-width: 400px) {
    font-size: 2.5rem;
    letter-spacing: 10px;
    text-indent: 10px;
  }
`

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -2000;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Hero = () => {
  return (
    <SStyledContainer
      height="100vh"
      flexDirection="column"
      boxSizing="content-box"
    >
      <StyledSpan>
        <img
          srcSet={`${heroImg500} 500w, ${heroImg725} 725w, ${heroImg1280} 1280w, ${heroImg1920} 1920w, ${heroImgFull} 2200w `}
          src={heroImg725}
        />
      </StyledSpan>
      <LogoContainer>
        <HeroLogoNaomi />

        <HeroLogoEldred />
      </LogoContainer>
      <HeroHeading>MAKE-UP ARTIST</HeroHeading>
    </SStyledContainer>
  )
}

export default Hero
