import React from "react"
import styled from "styled-components"

import { Container, Paragraph, HeadingH2, HeadingH1 } from "../../styles/shared"

import { PINK } from "../../styles/colors"

import AboutBorder from "../../assets/img/home/aboutBorder.jpg"
import AboutImg from "../../assets/img/home/naomi.jpg"

const StyledContainer = styled(Container)`
  width: 1280px;
  overflow-x: hidden;
  margin-top: -200px;
  justify-content: unset;
  align-items: unset;
  box-shadow: 1px 2px 20px 2px #b9b9b970;
  flex-wrap: nowrap;
  box-sizing: border-box;

  @media screen and (max-width: 1350px) {
    width: 95%;
  }

  @media screen and (max-width: 850px) {
    h2 {
      font-size: 50px;
    }
    h1 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 725px) {
    h2 {
      font-size: 9vw;
    }
  }

  @media screen and (max-width: 725px) {
    flex-direction: column-reverse;
    margin-top: 0;
    width: 100%;
    padding: 15px;
    box-shadow: none;
  }
`

const Span = styled.span`
  width: 95%;
  height: 5px;
  background-image: linear-gradient(
    90deg,
    rgba(56, 51, 51, 0) 0%,
    rgba(58, 55, 55, 0) 25%,
    rgba(214, 214, 214, 1) 25%,
    rgba(214, 214, 214, 1) 75%,
    rgba(0, 0, 0, 0) 75%,
    rgba(57, 54, 54, 0) 100%
  );

  background-position: bottom;
  background-size: 5% 3px;
  background-repeat: repeat-x;
  margin: 15px 0;
  box-sizing: border-box;
  background-position: left;
`

const AboutPhoto = styled.img`
  max-width: 100%;
  transform: translateX(-50px);
  border: 20px solid white;
  align-self: right;
  box-shadow: 1px 2px 6px 1px #00000040;
  box-sizing: border-box;
  @media screen and (max-width: 725px) {
    transform: rotate(2deg);
    max-width: 80%;
  }
`
const HalfStyledContainer = styled(Container)`
  @media screen and (max-width: 725px) {
    width: 100%;
    max-width: unset;
    padding: 20px 0;
  }
`

const StyledParagraph = styled(Paragraph)`
  @media screen and (max-width: 1100px) {
    &.notMobile {
      display: none;
    }
  }
`

const AboutMe = () => {
  return (
    <StyledContainer background="white">
      <HalfStyledContainer
        className="rightCol"
        flexDirection="column"
        padding="20px 70px 20px 30px"
        maxWidth="896px"
      >
        <HeadingH2 fontSize="50px" letterSpacing="5px" color={PINK}>
          About Naomi
        </HeadingH2>

        <HeadingH1
          fontSize="20px"
          textTransform="none"
          color="#000000b0"
          padding="5px 15px"
        >
          Naomi has over 13 years of industry experience
        </HeadingH1>
        <Span />
        <StyledParagraph
          textTransform="none"
          lineHeight="30px"
          fontSize="16px"
          data-sal="slide-left"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          Naomi Eldred is a freelance makeup artist servicing the Northern
          Brisbane area based from her studio located in North Lakes.
        </StyledParagraph>
        <StyledParagraph
          textTransform="none"
          lineHeight="30px"
          fontSize="16px"
          data-sal="slide-right"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          She specialises in bridal, formal and special occasion makeup
          application. She prides herself on producing flawless makeup with
          attention to detail, ensuring that you not only look beautiful but you
          feel beautiful too.
        </StyledParagraph>
        <StyledParagraph
          textTransform="none"
          lineHeight="30px"
          fontSize="16px"
          className="notMobile"
          data-sal="slide-left"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          Naomi is based at her home makeup studio in North Brisbane, North
          Lakes / Mango Hill. All bridal trials, special occasion and formal
          makeup appointments are conducted at her home studio.
        </StyledParagraph>
      </HalfStyledContainer>
      <HalfStyledContainer
        maxWidth="384px"
        height="unset"
        background={`url(${AboutBorder})`}
        backgroundPos="left"
        className="leftCol"
        padding="50px 0 "
        alignItems="center"
        minWidth="200px"
      >
        <AboutPhoto src={AboutImg} alt="Naomi Eldred" />
      </HalfStyledContainer>
    </StyledContainer>
  )
}

export default AboutMe
