import React from "react"
import styled from "styled-components"
import { Container, Paragraph } from "../../styles/shared"

const StyledContainer = styled(Container)`
  padding: 20px 15px;
  border: 1px solid lightgrey;
  box-sizing: border-box;
  margin-bottom: 20px;
  overflow-x: hidden;
  &:nth-child(1) {
    border-top: 1px solid lightgrey;
  }
`

const MobileServiceCard = props => {
  return (
    <StyledContainer
      data-sal="slide-right"
      data-sal-delay="50"
      data-sal-easing="ease"
    >
      <Container className="textBox" flexDirection="column">
        <Paragraph
          fontSize="18px"
          fontFamily="Montserrat"
          padding="0"
          other="width: 100% ;font-weight:600; text-transform:sentence;"
        >
          {props.cardTitle}
        </Paragraph>
        {props.cardSubText && (
          <Paragraph
            fontFamily="Montserrat"
            other="width: 100%"
            textAlign="left"
            lineHeight="18px"
            fontSize="16px"
            padding="10px 0 0 0"
          >
            {props.cardSubText}
          </Paragraph>
        )}
      </Container>

      <Container className="priceBox" width="auto" margin="0 0 0 30px">
        <Paragraph
          fontFamily="Montserrat"
          other="font-weight:600"
          fontSize="18px"
        >
          {props.cardSmallText ? "" : "$"}
          {props.cardPrice}
        </Paragraph>
      </Container>
    </StyledContainer>
  )
}

export default MobileServiceCard
