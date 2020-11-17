import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { Container } from "../styles/shared"
import { WHITE } from "../styles/colors"
import { FONT_HERO } from "../styles/typography"

import heroImgFull from "../assets/img/home/hero/2250.jpg"
import heroImg1920 from "../assets/img/home/hero/1920.jpg"
import heroImg1280 from "../assets/img/home/hero/1280.jpg"
import HeroLogoNaomi from "../assets/svg/heroLogoNaomi.svg"
import HeroLogoEldred from "../assets/svg/heroLogoEldred.svg"

const SStyledContainer = styled(Container)`
  padding-bottom: 200px;
  text-align: center;
  overflow: hidden;
  background: url(${heroImg1280}) no-repeat fixed center top;
  background-size: cover;
  svg {
    max-width: 50vw;
    min-width: 300px;
  }

  @media (min-width: 1280px) and (max-width: 1919px) {
    background: url(${heroImg1920}) no-repeat fixed center top;
    background-size: cover;
  }
  @media screen and (min-width: 1920px) {
    background: url(${heroImgFull}) no-repeat fixed center top;
    background-size: cover;
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

const HeroImageBG = styled.img`
  position: absolute;
  z-index: -2;
  min-width: 100%;
  min-height: 100%;
  top: -20px;
  filter: contrast(80%);
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

const Hero = () => {
  const [headerHeight, setHeaderHeight] = useState("100vh")

  useEffect(() => {
    if (typeof window !== `undefined`) {
    const updateWindowDimensions = () => {
      setHeaderHeight(`${window.innerHeight}px`);
    };

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions) 

  }}, [])




  return (
    <SStyledContainer
      height={headerHeight}
      flexDirection="column"
      boxSizing="content-box"
    >
      <LogoContainer>
        <HeroLogoNaomi />

        <HeroLogoEldred />
      </LogoContainer>
      <HeroHeading>MAKEUP ARTIST</HeroHeading>
    </SStyledContainer>
  )
}

export default Hero
