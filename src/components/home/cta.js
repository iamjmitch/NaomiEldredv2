import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container, HeadingH1, HeadingH2, Paragraph } from "../../styles/shared"
import { FONT_FAMILY } from "../../styles/typography"
import { PINK } from "../../styles/colors"
import Button from "@material-ui/core/Button"
import CTAImg from "../../assets/img/home/cta.jpg"

const StyledButton = styled(Button)`
  background: ${PINK};
  font-family: ${FONT_FAMILY};
  font-weight: 600;
  padding: 10px;
  color: white;
  transition: 0.3s linear;
  &:hover {
    background: white;
    color: ${PINK};
  }
  @media screen and (max-width: 725px) {
    font-size: 20px;
  }
`

const Span = styled.span`
  background: url(${CTAImg});
  background-position: center;
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  filter: brightness(0.6);
`

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
`

const StyledContainer = styled(Container)`
  &.mobile {
    display: none;
  }
  @media screen and (max-width: 725px) {
    &.mobile {
      display: flex;
    }

    &.desk {
      display: none;
    }
  }
`

const CTA = props => {
  return (
    <StyledContainer
      flexDirection="column"
      other="position:relative; h2{z-index:1;} margin: 0 0 100px 0;"
      minHeight="25vh"
      fontFamily={FONT_FAMILY}
      padding="50px 0"
      media="screen and (max-width: 725px){margin: 20px 0 50px 0}"
      className={props.className}
    >
      <Span />
      <HeadingH2 color="white" fontSize="40px" padding="0 20px 20px 20px">
        Ready to add some glam to your next event?
      </HeadingH2>
      <StyledLink to="/contact">
        <StyledButton>Book Now</StyledButton>
      </StyledLink>
    </StyledContainer>
  )
}

export default CTA
