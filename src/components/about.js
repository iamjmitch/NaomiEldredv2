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

const StyledContainerGrid = styled(ContainerGrid)`
  transform: translateY(-50%);
  box-shadow: 1px 1px 6px 1px #0000002e;
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
  width: 80%;
  border: 20px solid white;
  align-self: right;
  transform: translateX(-15%);
  box-shadow: 1px 1px 6px 1px #0000002e;
`

const AboutMe = () => {
  return (
    <StyledContainerGrid
      width="1200px"
      gridTemplateCol="70% 30%"
      background="white"
    >
      <Container
        className="rightCol"
        flexDirection="column"
        padding="20px 50px 20px 30px"
      >
        <HeadingH2 fontSize="70px" letterSpacing="5px" color={NAVHOVER}>
          About Naomi
        </HeadingH2>

        <HeadingH3 fontSize="22px" textTransform="none">
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
      </Container>
      <Container
        flexGrow="1"
        background={`url(${AboutBorder})`}
        backgroundPos="left"
        height="100%"
        className="leftCol"
      >
        <AboutPhoto src={AboutImg} />
      </Container>
    </StyledContainerGrid>
  )
}

export default AboutMe
