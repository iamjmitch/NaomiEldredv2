import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { Container } from "../styles/shared"
import { NAVTRANSPARENT, NAVSOLID, WHITE, NAVHOVER } from "../styles/colors"
import { FONT_FAMILY_HEADING, WEIGHT } from "../styles/typography"

import MobileLogo from "../assets/svg/mobileLogo.svg"

const transitionTime = "0.4s linear"

const StyledMobileNavBar = styled(Container)`
  height: 55px;
  background: ${props =>
    props.scrolled || props.menuOpen ? "white" : "transparent"};
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
  justify-content: space-between;
  display: none;
  transition: ${transitionTime};
  box-shadow: ${props =>
    props.scrolled || props.menuOpen ? "0px 1px 7px 1px #0000009c;" : "none"};
  flex-wrap: nowrap;
  padding: 0 15px;
  @media screen and (max-width: 725px) {
    display: flex;
  }
`

const StyledNavLogo = styled(Container)`
  width: unset;
  max-width: 50%;
  svg {
    transition: ${transitionTime};
    height: 30px;
    width: auto;
    path {
      fill: ${props => (props.scrolled || props.menuOpen ? "black" : "white")};
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
    height: 3px;
    width: 80%;
    &.line1 {
      transform: ${props =>
        props.menuOpen
          ? "rotate(45deg) translateX(6px) translateY(6px)"
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
  padding: 40px;
  box-sizing: border-box;
  height: calc(100vh - 55px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 55px;
  left: 0;
  transition: ${transitionTime};
  transform: ${props =>
    !props.menuOpen ? "translate(100%, -100%)" : "translate(0%, 0%)"};
  opacity: ${props => (!props.menuOpen ? "0" : "1")};
  background: #ffffff;
  z-index: -5;
`

const StyledLink = styled(props => <Link {...props} />)`
  color: black;
  width: 100%;
  border-bottom: 2px solid lightgrey;
  font-size: 20px;
  line-height: 20px;
  font-weight: ${WEIGHT.NORMAL};
  text-decoration: none;
  margin: 0;
  padding: 12px 5px;
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
`

const MobileNav = () => {
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
    <StyledMobileNavBar scrolled={scrolled} menuOpen={menuOpen}>
      <StyledNavLogo scrolled={scrolled} menuOpen={menuOpen}>
        <MobileLogo />
      </StyledNavLogo>
      <Hamburger
        scrolled={scrolled}
        onClick={navClickHandle}
        menuOpen={menuOpen}
      >
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </Hamburger>
      <StyledMenu menuOpen={menuOpen}>
        <StyledLink className="top" to="/">
          Home
        </StyledLink>
        <StyledLink to="/services">Services</StyledLink>
        <StyledLink to="/gallery">Gallery</StyledLink>
        <StyledLink to="/faq">FAQ</StyledLink>
        <StyledLink to="/about">About</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </StyledMenu>
    </StyledMobileNavBar>
  )
}

export default MobileNav
