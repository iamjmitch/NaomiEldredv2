import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container } from "../styles/shared"
import { NAVTRANSPARENT, NAVSOLID, WHITE, NAVHOVER } from "../styles/colors"
import { FONT_FAMILY_HEADING, WEIGHT } from "../styles/typography"

import HeaderLogoFull from "../assets/img/global/HeaderLogoFull.png"
import HeaderLogo500 from "../assets/img/global/HeaderLogo500.png"
import HeaderLogo400 from "../assets/img/global/HeaderLogo400.png"

const StyledNav = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  font-family: ${FONT_FAMILY_HEADING};
  z-index: 1000;
  padding: ${props => props.padding};
  transition: 0.5s;
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
  font-weight: 900;
  cursor: pointer;
  &:hover {
    color: ${NAVHOVER};
    border-bottom: 1px solid ${NAVHOVER};
  }
`

const ImgContainer = styled.div`
  img {
    max-width: 300px;
    margin: 0 20px;
  }
`

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      //typeof check added to prevent error on gatsby build
      document.addEventListener("scroll", () => {
        window.pageYOffset === 0 ? setScrolled(false) : setScrolled(true)
      })
    }
  })

  return (
    <StyledNav
      background={`${scrolled ? NAVSOLID : NAVTRANSPARENT}`}
      padding={`${scrolled ? "12px 0" : "20px 0"}`}
    >
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
