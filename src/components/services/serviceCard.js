import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, HeadingH3, Paragraph } from "../../styles/shared"
import { FONT_FAMILY_HEADING } from "../../styles/typography"
import { PINK } from "../../styles/colors"
import { ReadMore } from "../home/servicesBox"

const StyledServiceCard = styled(Container)`
  flex-direction: column;
  border: 1px solid lightgrey;
  max-width: 400px;
  padding-bottom: 5px;
  background: ${PINK};
  height: 100%;
  box-sizing: border-box;
  justify-content: flex-start;

  @media screen and (max-width: 500px) {
    max-width: 100%;
    h3 {
      font-size: 40px;
    }
  }
`

const StyledPrice = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  
  @media screen and (max-width: 500px) {
    max-width: 350px;
    width: 150px;
  height:150px;
    p{
        margin-top: -10px;
        font-size: 40px;
        line-height: 80px
    }
    .price{
        font-size: 80px;
        margin-top:0;
        
        
    }
  }
 
}
`

const PriceBuffer = styled(Container)`
  flex-grow: 1;
`

const Enquire = styled(ReadMore)`
  font-weight: 700;

  text-transform: uppercase;
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`
const Span = styled.span`
  height: 3px;
  background: ${PINK};
  width: 20%;
  margin-bottom: 17px;
`

const ServiceCard = props => {
  return (
    <StyledServiceCard key={props.cardTitle}>
      <Container background="white" flexDirection="column" height="100%">
        <Container minHeight="94px" flexDirection="column">
          <HeadingH3 color="black" padding="20px 0 0 0">
            {props.cardTitle}
          </HeadingH3>
          <Span></Span>
        </Container>
        <PriceBuffer padding="20px 0">
          <StyledPrice>
            <Paragraph
              lineHeight="20px"
              fontFamily={FONT_FAMILY_HEADING}
              fontSize="20px"
              padding="0"
              fontWeight="700"
              margin="-5px 0 0 0"
            >
              {props.cardSmallText ? "" : "$"}
            </Paragraph>
            <Paragraph
              className="price"
              lineHeight="30px"
              fontFamily={FONT_FAMILY_HEADING}
              fontSize={props.cardSmallText ? "22px" : "30px"}
              padding="0"
            >
              {props.cardPrice}
            </Paragraph>
          </StyledPrice>
        </PriceBuffer>
        <Container minHeight="72px">
          <Paragraph
            fontSize="14px"
            fontWeight="400"
            textTransform="capitalize"
            color="black"
            padding="20px 15px"
            textAlign="center "
            media="screen and (max-width: 500px){font-size: 25px; line-height:25px;}"
          >
            {props.cardSubText}
          </Paragraph>
        </Container>
        <Enquire>Enquire</Enquire>
      </Container>
    </StyledServiceCard>
  )
}

export default ServiceCard
