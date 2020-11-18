import React from "react"
import styled from "styled-components"

import { Container, Paragraph, HeadingH2, HeadingH3 } from "../styles/shared"

import { NAVHOVER } from "../styles/colors"

import AboutBorder from "../assets/img/home/aboutBorder.jpg"
import AboutImg from "../assets/img/home/naomi.jpg"

const StyledContainer = styled(Container)`
  width: 1280px;
  margin-top: -200px;
  justify-content: unset;
  align-items: unset;
  box-shadow: 1px 2px 6px 1px #00000040;
  flex-wrap: nowrap;
  box-sizing: border-box;

  @media screen and (max-width: 1350px) {
    width: 95%;
  }

  @media screen and (max-width: 850px) {
    h2 {
      font-size: 50px;
    }
    h3 {
      font-size: 19px;
    }
    p {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 725px) {
    h2 {
      font-size: 11vw;
    }
  }

  @media screen and (max-width: 725px) {
    flex-direction: column-reverse;
    margin-top: 0;
    width: 100%;
    padding: 15px;
    box-shadow: 0px -2px 6px #0000005e;
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
        <HeadingH2 fontSize="70px" letterSpacing="5px" color={NAVHOVER}>
          About Naomi
        </HeadingH2>

        <HeadingH3
          fontSize="22px"
          textTransform="none"
          color="#000000b0"
          padding="5px 15px"
        >
          Makeup has been Naomi’s passion and obsession from a very early age.
        </HeadingH3>
        <Span />
        <StyledParagraph
          className="notMobile"
          textTransform="none"
          lineHeight="25px"
          fontSize="20px"
        >
          As a qualified makeup artist with over 12 years industry experience,
          Naomi has worked for some of the worlds leading makeup companies, with
          most of her time spent with M.A.C cosmetics. Her years of experience
          with this leading international brand has given her the vital skills
          needed to create modern, up-to-date, and on trend looks which are
          adaptable to suit anyone’s makeup style and ensure you look and feel
          beautiful – whether it be soft and natural or full glam!
        </StyledParagraph>
        <StyledParagraph textTransform="none" lineHeight="25px" fontSize="20px">
          With her passion for the industry and knowing the importance for
          beautiful makeup, Naomi will always provide a professional friendly
          service, taking pride in flawless application, attention to detail and
          distinctive individual creativity.
        </StyledParagraph>
        <StyledParagraph
          className="notMobile"
          textTransform="none"
          lineHeight="25px"
          fontSize="20px"
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
        <AboutPhoto src={AboutImg} alt="" />
      </HalfStyledContainer>
    </StyledContainer>
  )
}

export default AboutMe
