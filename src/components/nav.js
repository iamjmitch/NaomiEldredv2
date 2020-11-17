import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container } from "../styles/shared"
import { NAVTRANSPARENT, NAVSOLID, WHITE, NAVHOVER } from "../styles/colors"
import { FONT_FAMILY_HEADING, WEIGHT } from "../styles/typography"

import HeaderLogo from "../assets/img/global/logo.png"

const StyledNav = styled(Container)`
  position: fixed;
  top: 0;
  left: 0;
  font-family: ${FONT_FAMILY_HEADING};
  z-index: 1000;
  padding: ${props => props.padding};
  transition: 0.5s;
  @media screen and (max-width: 725px) {
    display: none;
  }
`

const StyledLink = styled(props => <Link {...props} />)`
  color: ${WHITE};
  font-size: 16px;
  text-decoration: none;
  margin: 0 20px;
  text-transform: uppercase;
  letter-spacing: 3px;
  border-bottom: 1px solid transparent;
  transition: 0.5s ease;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${NAVHOVER};
    color: ${NAVHOVER};
  }
  @media screen and (min-width:1920px){
    font-size: 18px;
  }
  @media screen and (max-width:900px){
    font-size: 14px;
    margin: 0 10px;
  }
`

const ImgContainer = styled.div`
  img {
    max-width: 300px;
    width: 19vw;
    margin: 0 20px;
    padding-top: 5px;
    @media screen and (max-width:700px){
      margin: 0 10px;
     
    }
  }
`

const Nav = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      //typeof check added to prevent error on gatsby build
      document.addEventListener("scroll", () => {
        window.pageYOffset <= 5 ? setScrolled(false) : setScrolled(true)
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
      <StyledLink to="/gallery">Gallery</StyledLink>
      <ImgContainer>
        <img src={HeaderLogo} />
      </ImgContainer>
      <StyledLink to="/faq">FAQ</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </StyledNav>
  )
}

export default Nav
