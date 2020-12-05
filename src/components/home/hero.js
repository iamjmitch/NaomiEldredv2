import React from "react"
import styled from "styled-components"

import { Container } from "../../styles/shared"

import heroImgFull from "../../assets/img/home/hero/2250.jpg"
import heroImg1920 from "../../assets/img/home/hero/1920.jpg"
import heroImg1280 from "../../assets/img/home/hero/1280.jpg"
import heroImg725 from "../../assets/img/home/hero/725.jpg"
import heroImg500 from "../../assets/img/home/hero/500.jpg"
import HeroLogoNaomi from "../../assets/svg/heroLogoNaomi.svg"
import HeroLogoEldred from "../../assets/svg/heroLogoEldred.svg"
import HeroSubWords from "../../assets/svg/heroSubWords.svg"

const SStyledContainer = styled(Container)`
  min-height: 100vh;
  padding-bottom: 200px;
  position: relative;
  text-align: center;
  overflow: hidden;
  @media screen and (max-width: 725px) {
    padding-bottom: 0;
  }
`

const LogoContainer = styled(Container)`
  max-width: 60%;
  min-width: 340px;
  padding-bottom: 20px;
  overflow: visible;
  svg {
    padding: 0 30px;
    width: auto;
    height: 20vh;
    overflow: visible;
  }
  @media screen and (max-width: 1100px) {
    svg {
      padding: 10px;
      width: 80%;
      height: auto;
      overflow: visible;
    }
    flex-direction: column;
  }
  @media screen and (max-width: 725px) {
    transform: scale(1.1);
  }
`

const StyledSpan = styled.span`
  position: fixed;
  min-height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -2000;
  height: 100vh;
  filter: brightness(0.9);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top center;
  }
`

const HeroSubText = styled.div`
  width: 40%;
  min-width: 300px;
  svg {
    width: 100%;
    display: block;
    height: 100%;
  }
`

const Hero = () => {
  return (
    <SStyledContainer flexDirection="column" boxSizing="content-box">
      <StyledSpan>
        <img
          srcSet={`${heroImg500} 500w, ${heroImg725} 725w, ${heroImg1280} 1280w, ${heroImg1920} 1920w, ${heroImgFull} 2200w `}
          src={heroImg725}
          alt="Hero"
        />
      </StyledSpan>
      <LogoContainer>
        <HeroLogoNaomi />
        <HeroLogoEldred />
      </LogoContainer>
      <HeroSubText>
        <HeroSubWords />
      </HeroSubText>
    </SStyledContainer>
  )
}

export default Hero
