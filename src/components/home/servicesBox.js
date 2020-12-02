import React from "react"
import styled from "styled-components"

import {
  Container,
  HeadingH3,
  Paragraph,
  StyledLink,
} from "../../styles/shared"

import { PINK } from "../../styles/colors"
import { FONT_FAMILY_HEADING } from "../../styles/typography"

const StyledServiceBox = styled(Container)`
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  flex-direction: column;
  max-width: 600px;
  box-shadow: 1px 2px 6px 1px #00000040;
  border: 1px solid lightgrey;
  padding-bottom: 5px;

  background: ${props => (props.bottomColor ? props.bottomColor : PINK)};
  @media screen and (max-width: 1129px) {
    margin-bottom: 0;
  }
  @media screen and (max-width: 725px) {
    box-shadow: none;
  }
`

const ImgContainer = styled(Container)`
  width: 100%;
  height: 200px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const TextHolder = styled(Container)`
  width: 100%;
  flex-grow: 1;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 20px;
  background: white;
  @media screen and (max-width: 1230px) {
    h3 {
      font-size: 3vw;
    }
  }
  @media screen and (max-width: 1090px) {
    h3 {
      font-size: 36px;
    }
  }
  @media screen and (max-width: 725px) {
    .notMobile {
      display: none;
    }
  }
`

export const ReadMore = styled(Container)`
  padding: 20px 0;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  background: white;
  font-family: ${FONT_FAMILY_HEADING};
  @media screen and (max-width: 725px) {
    font-size: 18px;
  }
`

const ServiceBox = props => {
  return (
    <StyledServiceBox
      bottomColor={props.bottomColor}
      data-sal={props.dataSal ? props.dataSal : "slide-up"}
      data-sal-delay="0"
      data-sal-easing="ease"
    >
      <ImgContainer>
        <img className="lazyload" data-src={props.image} />
      </ImgContainer>
      <TextHolder>
        <HeadingH3
          color="black"
          padding="5px 0 15px 0"
          fontSize="30px"
          fontWeight="700"
        >
          {props.title}
        </HeadingH3>
        <Paragraph
          lineHeight="30px"
          padding="0 20px"
          fontSize="16px"
          textAlign="center"
          // className="notMobile"
        >
          {props.subtext}
        </Paragraph>
      </TextHolder>
      <ReadMore>
        <StyledLink
          transition="0.2s linear"
          to="/services"
          other="@media screen and (max-width:725px){font-size:18px}"
        >
          FIND OUT MORE
        </StyledLink>
      </ReadMore>
    </StyledServiceBox>
  )
}

export default ServiceBox
