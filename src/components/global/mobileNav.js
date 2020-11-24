import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container } from "../../styles/shared"
import { NAVHOVER } from "../../styles/colors"
import { FONT_FAMILY_HEADING, WEIGHT } from "../../styles/typography"

import MobileLogo from "../../assets/svg/mobileLogo.svg"
import Facebook from "../../assets/svg/facebook.svg"
import Instagram from "../../assets/svg/instagram.svg"

const transitionTime = "0.4s linear"

const StyledMobileNavBar = styled(Container)`
  height: 55px;
  min-width: 350px;
  background: ${props =>
    props.scrolled || props.menuOpen ? "white" : "transparent"};
  // ----------- trigger for not homepage --------------
  ${props => props.pageName !== "home" && "background: white"};
  width: 100vw;
  position: fixed;
  font-family: ${FONT_FAMILY_HEADING};
  top: 0;
  left: 0;
  z-index: 1000;
  border-bottom: ${props =>
    props.scrolled && !props.menuOpen
      ? "2px solid black"
      : "2px solid transparent"};
  // ----------- trigger for not homepage --------------
  ${props => props.pageName !== "home" && "border-bottom:2px solid black"};
  border-bottom: ${props =>
    !props.menuOpen ? "2px solid black" : "2px solid transparent"};
  justify-content: space-between;
  display: none;
  transition: ${transitionTime};
  box-shadow: ${props =>
    props.scrolled || props.menuOpen || props.pageName !== "home"
      ? "0px 1px 7px 1px #0000009c;"
      : "none"};
  // ----------- trigger for not homepage --------------
  ${props =>
    props.pageName !== "home" && "box-shadow:0px 1px 7px 1px #0000009c"};
  flex-wrap: nowrap;
  padding: 0 10px;
  @media screen and (max-width: 725px) {
    display: flex;
  }
`

const StyledNavLogo = styled(Container)`
  width: unset;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  max-width: 50%;
  svg {
    transition: ${transitionTime};
    height: 30px;
    width: auto;
    path {
      fill: ${props =>
        props.scrolled || props.menuOpen ? "black" : "transparent"};
      ${props => props.pageName !== "home" && "fill:black"};
    }
  }
`

const Hamburger = styled.div`
  width: 35px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .line {
    transition: ${transitionTime};
    background: ${props =>
      props.scrolled || props.menuOpen ? "#000000" : "#ffffff"};
    ${props => props.pageName !== "home" && "background:black"};
    height: 3px;
    width: 80%;
    &.line1 {
      transform: ${props =>
        props.menuOpen
          ? "rotate(45deg) translateX(5px) translateY(6px)"
          : "rotate(0deg)"};
    }
    &.line2 {
      opacity: ${props => (props.menuOpen ? "0" : "1")};
    }
    &.line3 {
      transform: ${props =>
        props.menuOpen
          ? "rotate(-45deg) translateX(6px) translateY(-6px)"
          : "rotate(0deg)"};
    }
  }
`

const StyledMenu = styled.div`
  width: 100vw;
  padding: 40px 40px 0 40px;
  box-sizing: border-box;
  height: calc(100vh - 55px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 55px;
  left: 0;
  transition: ${transitionTime};
  transform: ${props =>
    !props.menuOpen ? "translate(-100%, -100%)" : "translate(0%, 0%)"};
  opacity: ${props => (!props.menuOpen ? "0" : "1")};
  background: #ffffff;
  z-index: -5;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: black;
  width: 100%;
  border-bottom: 2px solid lightgrey;
  font-size: 24px;
  line-height: 24px;
  font-weight: ${WEIGHT.NORMAL};
  text-decoration: none;
  margin: 0;
  padding: 15px 5px;
  text-indent: 5px;
  text-transform: capitalize;
  text-align: left;

  transition: 0.2s linear;
  letter-spacing: 3px;
  &.top {
    border-top: 2px solid lightgrey;
  }
  &:hover {
    color: ${NAVHOVER};
  }
  &.active {
    color: ${NAVHOVER}!important;
    font-weight: 600 !important;
  }
`

const SocialLinkCont = styled.div`
  display: flex;
  width: 100%;
  padding-top: 25px;
  justify-content: flex-start;
`

const SocialLink = styled.a`
  text-decoration: none;
  transition: ${transitionTime};
  svg {
    display: inline-block;
    width: 55px;
    height: 55px;
    margin: 0 25px 0 5px;
    opacity: 0.8;
    transition: ${transitionTime};
    &:hover {
      path {
        fill: ${NAVHOVER};
        opacity: 1;
      }
    }
  }
`

const MobileNav = props => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== `undefined`) {
      //typeof check added to prevent error on gatsby build
      document.addEventListener("scroll", () => {
        window.pageYOffset <= 60 ? setScrolled(false) : setScrolled(true)
      })
    }
  })

  const navClickHandle = () => {
    menuOpen ? setMenuOpen(false) : setMenuOpen(true)
  }

  return (
    <StyledMobileNavBar
      scrolled={scrolled}
      menuOpen={menuOpen}
      pageName={props.pageName}
    >
      <Hamburger
        scrolled={scrolled}
        onClick={navClickHandle}
        menuOpen={menuOpen}
        pageName={props.pageName}
      >
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </Hamburger>
      <StyledNavLogo
        scrolled={scrolled}
        menuOpen={menuOpen}
        pageName={props.pageName}
      >
        <MobileLogo />
      </StyledNavLogo>

      <StyledMenu menuOpen={menuOpen}>
        <StyledLink
          className={props.pageName === "home" ? "active top" : "top"}
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </StyledLink>
        <StyledLink
          className={props.pageName === "services" ? "active" : ""}
          to="/services"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </StyledLink>
        <StyledLink
          className={props.pageName === "gallery" ? "active" : ""}
          to="/gallery"
          onClick={() => setMenuOpen(false)}
        >
          Gallery
        </StyledLink>
        <StyledLink
          className={props.pageName === "faq" ? "active" : ""}
          to="/faq"
          onClick={() => setMenuOpen(false)}
        >
          FAQ
        </StyledLink>
        <StyledLink
          className={props.pageName === "about" ? "active" : ""}
          to="/about"
          onClick={() => setMenuOpen(false)}
        >
          About
        </StyledLink>
        <StyledLink
          className={props.pageName === "contact" ? "active" : ""}
          to="/contact"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </StyledLink>
        <SocialLinkCont>
          <SocialLink
            href="https://www.facebook.com/NaomiEldredMakeup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/naomieldredmakeup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </SocialLink>
        </SocialLinkCont>
      </StyledMenu>
    </StyledMobileNavBar>
  )
}

export default MobileNav
