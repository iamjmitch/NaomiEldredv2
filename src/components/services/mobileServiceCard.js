import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Container, Paragraph } from "../../styles/shared"

import { SERVICECARDINFO } from "./serviceCardInfo"

const StyledContainer = styled(Container)`
  padding: 15px 15px;
  border-bottom: 1px solid lightgrey;
  box-sizing: border-box;
  &:nth-child(1) {
    border-top: 1px solid lightgrey;
  }
`

const MobileServiceCard = props => {
  return (
    <StyledContainer>
      <Container className="textBox" flexDirection="column">
        <Paragraph
          fontSize="24px"
          fontFamily="Montserrat"
          other="width: 100% ;font-weight:700"
        >
          {props.cardTitle}
        </Paragraph>
        <Paragraph fontFamily="Montserrat" other="width: 100%" textAlign="left">
          {props.cardSubText}
        </Paragraph>
      </Container>

      <Container className="priceBox" width="auto" margin="0 0 0 30px">
        <Paragraph
          fontFamily="Montserrat"
          other="font-weight:600"
          fontSize="35px"
        >
          {props.cardSmallText ? "" : "$"}
          {props.cardPrice}
        </Paragraph>
      </Container>
    </StyledContainer>
  )
}

export default MobileServiceCard
