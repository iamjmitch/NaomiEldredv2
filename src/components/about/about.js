import React from "react"
import styled from "styled-components"

import { Container, Paragraph, HeadingH2, HeadingH3 } from "../../styles/shared"

import { PINK } from "../../styles/colors"

import AboutBorder from "../../assets/img/home/aboutBorder.jpg"
import AboutImg from "../../assets/img/home/naomi.jpg"

const StyledContainer = styled(Container)`
  width: 1280px;

  justify-content: unset;
  align-items: unset;

  flex-wrap: nowrap;
  box-sizing: border-box;

  @media screen and (max-width: 1350px) {
    width: 100%;
  }

  // @media screen and (max-width: 850px) {
  //   h2 {
  //     font-size: 50px;
  //   }
  //   h3 {
  //     font-size: 30px;
  //   }
  //   p {
  //     font-size: 22px;
  //   }
  // }
  // @media screen and (max-width: 770px) {
  //   h3 {
  //     font-size: 25px;
  //     padding: 0;
  //   }
  // }
  // @media screen and (max-width: 725px) {
  //   h2 {
  //     font-size: 50px;
  //   }
  //   h3 {
  //     font-size: 25px;
  //   }
  //   p {
  //     font-size: 18px;
  //   }
  // }

  @media screen and (max-width: 725px) {
    h2 {
      font-size: 9vw;
    }
  }

  @media screen and (max-width: 725px) {
    flex-direction: column-reverse;
    margin-top: 0;
    width: 100%;
    padding: 15px 20px;
    padding-bottom: 0;
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
  max-width: 75%;
  border: 20px solid white;
  align-self: right;
  box-shadow: 1px 2px 6px 1px #00000040;
  box-sizing: border-box;
  @media screen and (max-width: 1090px) {
    max-width: 90%;
  }
  @media screen and (max-width: 725px) {
    transform: rotate(2deg);
    max-width: unset;
    width: 80%;
    height: auto;
    margin: 25px 0;
  }
`
const HalfStyledContainer = styled(Container)`
  @media screen and (max-width: 725px) {
    width: 100%;
    max-width: unset;
    padding: 0;
  }
`

const StyledParagraph = styled(Paragraph)`
  @media screen and (min-width: 1101px) {
    &.notMobile {
      display: block;
    }
    &.mobileOnly {
      display: none;
    }
  }

  @media screen and (max-width: 1100px) {
    &.notMobile {
      display: none;
    }
    &.mobileOnly {
      display: block;
    }
  }
`

const AboutMe = () => {
  return (
    <Container
      flexDirection="column"
      maxWidth="1280px"
      other="box-shadow: 1px 2px 20px 2px #b9b9b970;"
      margin="0 15px 50px 15px"
      fontSize="17px"
      media="screen and (max-width: 725px) {padding-right:0!important; p{font-size:18px;}} @media screen and (max-width: 1280px) {box-shadow:none; padding-right:20px} "
    >
      <StyledContainer background="white">
        <HalfStyledContainer
          className="rightCol"
          flexDirection="column"
          padding="10px 20px 0 20px"
          maxWidth="896px"
        >
          <HeadingH3
            fontSize="25px"
            textTransform="none"
            color={PINK}
            padding="15px 15px 5px 15px"
          >
            Naomi has over 13 years of industry experience
          </HeadingH3>
          <Span />
          <StyledParagraph
            textTransform="none"
            lineHeight="30px"
            fontSize="1rem"
          >
            As a qualified makeup artist with over 1 years industry experience,
            Naomi has worked for some of the worlds leading makeup companies,
            with most of her time spent with M.A.C cosmetics. Her years of
            experience with this leading international brand has given her the
            vital skills needed to create modern, up-to-date, and on trend looks
            which are adaptable to suit anyone’s makeup style and ensure you
            look and feel beautiful – whether it be soft and natural or full
            glam!
          </StyledParagraph>
          <StyledParagraph
            textTransform="none"
            lineHeight="30px"
            fontSize="1rem"
            media="screen and (max-width: 757px){display:none;}"
          >
            With her passion for the industry and knowing the importance for
            beautiful makeup, Naomi will always provide a professional friendly
            service, taking pride in flawless application, attention to detail
            and distinctive individual creativity.
          </StyledParagraph>
          <StyledParagraph
            textTransform="none"
            lineHeight="30px"
            fontSize="1rem"
            media="screen and (max-width: 957px){display:none;}"
          >
            Naomi specialises mainly in the use of M.A.C cosmetics which she
            knows and trusts for a flawless application and longevity. However,
            Naomi also uses select products she has come to love from brands
            such as Huda Beauty, Urban Decay and Anastasia Beverly Hills
          </StyledParagraph>
          <StyledParagraph
            textTransform="none"
            lineHeight="30px"
            fontSize="1rem"
            media="screen and (max-width: 1105px){display:none;}"
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
          margin="0"
          media="screen and (max-width: 1100px) {padding: 20px 0;} @media screen and (max-width: 725px){max-height: unset;}"
        >
          <AboutPhoto src={AboutImg} alt="" />
        </HalfStyledContainer>
      </StyledContainer>
      <Container
        padding="0 0 0 20px"
        flexDirection="column"
        media="screen and (max-width:725px){padding: 0 20px}"
      >
        <StyledParagraph
          textTransform="none"
          lineHeight="30px"
          fontSize="1rem"
          media="screen and (min-width: 757px){display:none;}"
        >
          With her passion for the industry and knowing the importance for
          beautiful makeup, Naomi will always provide a professional friendly
          service, taking pride in flawless application, attention to detail and
          distinctive individual creativity.
        </StyledParagraph>
        <StyledParagraph
          textTransform="none"
          lineHeight="30px"
          fontSize="1rem"
          media="screen and (min-width: 957px){display:none;}"
        >
          Naomi specialises mainly in the use of M.A.C cosmetics which she knows
          and trusts for a flawless application and longevity. However, Naomi
          also uses select products she has come to love from brands such as
          Huda Beauty, Urban Decay and Anastasia Beverly Hills
        </StyledParagraph>
        <StyledParagraph
          textTransform="none"
          lineHeight="30px"
          fontSize="1rem"
          media="screen and (min-width: 1105px){display:none;}"
        >
          Naomi is based at her home makeup studio in North Brisbane, North
          Lakes / Mango Hill. All bridal trials, special occasion and formal
          makeup appointments are conducted at her home studio.
        </StyledParagraph>
      </Container>
    </Container>
  )
}

export default AboutMe
