import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container } from "../styles/shared"
import { NAVTRANSPARENT, NAVSOLID, WHITE } from "../styles/colors"
import { FONT_FAILY_HEADING, WEIGHT } from "../styles/typography"

import HeaderLogoFull from "../assets/img/global/HeaderLogoFull.png"
import HeaderLogo500 from "../assets/img/global/HeaderLogo500.png"
import HeaderLogo400 from "../assets/img/global/HeaderLogo400.png"

const StyledNav = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  font-family: ${FONT_FAILY_HEADING};
`

const StyledLink = styled(props => <Link {...props} />)`
  color: ${WHITE};
  font-size: 18px;
  text-decoration: none;
  margin: 0 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  border-bottom: 1px solid transparent;
  transition: 0.5s ease;
  font-weight: ${WEIGHT.NORMAL};
  cursor: pointer;
  &:hover {
    color: red;
    border-bottom: 1px solid red;
  }
`

const ImgContainer = styled.div`
  img {
    max-width: 300px;
    margin: 0 20px;
  }
`

const Nav = () => {
  return (
    <StyledNav background={NAVTRANSPARENT} padding="10px 0">
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/services">Services</StyledLink>
      <ImgContainer>
        <img
          srcSet={`${HeaderLogoFull} 600w, ${HeaderLogo500} 500w, ${HeaderLogo400} 400w`}
          src={HeaderLogoFull}
          alt="Naomi Eldred - Makeup Artist"
        ></img>
      </ImgContainer>
      <StyledLink to="/faq">FAQ</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </StyledNav>
  )
}

export default Nav
