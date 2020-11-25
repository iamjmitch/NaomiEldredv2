import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container } from "../../styles/shared"
import { NAVTRANSPARENT, NAVSOLID, WHITE, PINK } from "../../styles/colors"
import { FONT_FAMILY_HEADING } from "../../styles/typography"

import HeaderLogo from "../../assets/img/global/logo.png"

const StyledNav = styled(Container)`
  position: fixed;
  min-height: 96.578px;
  top: 0;
  left: 0;
  font-family: ${FONT_FAMILY_HEADING};
  z-index: 1000;
  padding: ${props => props.padding};
  transition: 0.5s;
  background: ${props => (props.scrolled ? NAVSOLID : NAVTRANSPARENT)};
  padding: ${props => (props.scrolled ? "12px 0" : "12px 0 20px 0")};
  ${props => props.pageName !== "home" && `background:${NAVSOLID}`};
  ${props => props.pageName !== "home" && `padding:12px 0`};
  @media screen and (max-width: 725px) {
    display: none;
    min-height: unset;
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
  font-weight: 500;
  cursor: pointer;
  padding-bottom: 2px;
  &:hover {
    color: ${PINK};
  }
  &.active {
    border-bottom: 1px solid white;
  }
  @media screen and (min-width: 1920px) {
    font-size: 18px;
  }
  @media screen and (max-width: 960px) {
    font-size: 13px;
    margin: 0 10px;
  }
`

const ImgContainer = styled.div`
  img {
    max-width: 250px;
    width: 19vw;
    margin: 0 20px;
    padding-top: 5px;
    @media screen and (max-width: 700px) {
      margin: 0 10px;
    }
  }
`

const Nav = props => {
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
    <StyledNav scrolled={scrolled} {...props}>
      <StyledLink className={props.pageName === "home" ? "active" : ""} to="/">
        Home
      </StyledLink>
      <StyledLink
        className={props.pageName === "services" ? "active" : ""}
        to="/services"
      >
        Services
      </StyledLink>
      <StyledLink
        className={props.pageName === "gallery" ? "active" : ""}
        to="/gallery"
      >
        Gallery
      </StyledLink>
      <StyledLink to="/">
        <ImgContainer>
          <img src={HeaderLogo} alt="Naomi Eldred Make-up Artist" />
        </ImgContainer>
      </StyledLink>

      <StyledLink
        className={props.pageName === "faq" ? "active" : ""}
        to="/faq"
      >
        FAQ
      </StyledLink>
      <StyledLink
        className={props.pageName === "about" ? "active" : ""}
        to="/about"
      >
        About
      </StyledLink>
      <StyledLink
        className={props.pageName === "contact" ? "active" : ""}
        to="/contact"
      >
        Contact
      </StyledLink>
    </StyledNav>
  )
}

export default Nav
