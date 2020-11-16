import React from "react"
import styled from "styled-components"

import {
  Container,
  Paragraph,
  HeadingH2,
  HeadingH3,
  ContainerGrid,
} from "../styles/shared"
import { FONT_FAMILY_HEADING, FONT_FAMILY, WEIGHT } from "../styles/typography"
import { NAVHOVER, LIGHTGREY } from "../styles/colors"

import AboutBorder from "../assets/img/home/aboutBorder.jpg"
import AboutImg from "../assets/img/home/naomi.jpg"

const StyledContainer = styled(Container)`
  width: 1280px;
  transform: translateY(-50%);
  justify-content: unset;
  align-items: unset;
  box-shadow: 1px 1px 6px 1px #0000002e;
  flex-wrap: nowrap;
  box-sizing: border-box;

  @media screen and (max-width: 1300px) {
    width: 90%;
  }
  @media screen and (max-width: 1100px) {
    width: 100%;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    transform: translateY(0%);
    box-shadow: none;
  }
`

const Span = styled.span`
  width: 90%;
  height: 5px;
  background-image: linear-gradient(
    to right,
    #00000029 50%,
    rgba(255, 255, 255, 0) 0%
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
  box-shadow: 1px 1px 6px 1px #0000002e;
  box-sizing: border-box;
  @media screen and (max-width: 1100px) {
    transform: translateX(0);
    max-width: 90%;
    margin: 30px;
  }
`
const HalfStyledContainer = styled(Container)`
  @media screen and (max-width: 1100px) {
    width: 90%;
    max-width: unset;
    min-width: unset;
    margin: 0;
    padding: 0;
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
        minWidth="600px"
      >
        <HeadingH2 fontSize="70px" letterSpacing="5px" color={NAVHOVER}>
          About Naomi
        </HeadingH2>

        <HeadingH3 fontSize="22px" textTransform="none" color="#000000b0">
          Makeup has been Naomi’s passion and obsession from a very early age.
        </HeadingH3>
        <Span />
        <Paragraph textTransform="none" lineHeight="25px" fontSize="20px">
          As a qualified makeup artist with over 12 years industry experience,
          Naomi has worked for some of the worlds leading makeup companies, with
          most of her time spent with M.A.C cosmetics. Her years of experience
          with this leading international brand has given her the vital skills
          needed to create modern, up-to-date, and on trend looks which are
          adaptable to suit anyone’s makeup style and ensure you look and feel
          beautiful – whether it be soft and natural or full glam!
        </Paragraph>
        <Paragraph textTransform="none" lineHeight="25px" fontSize="20px">
          With her passion for the industry and knowing the importance for
          beautiful makeup, Naomi will always provide a professional friendly
          service, taking pride in flawless application, attention to detail and
          distinctive individual creativity.
        </Paragraph>
        <Paragraph textTransform="none" lineHeight="25px" fontSize="20px">
          Naomi is based at her home makeup studio in North Brisbane, North
          Lakes / Mango Hill. All bridal trials, special occasion and formal
          makeup appointments are conducted at her home studio.
        </Paragraph>
      </HalfStyledContainer>
      <HalfStyledContainer
        maxWidth="384px"
        height="unset"
        background={`url(${AboutBorder})`}
        backgroundPos="left"
        className="leftCol"
        padding="50px 0 "
        alignItems="center"
        minWidth="300px"
      >
        <AboutPhoto src={AboutImg} />
      </HalfStyledContainer>
    </StyledContainer>
  )
}

export default AboutMe
