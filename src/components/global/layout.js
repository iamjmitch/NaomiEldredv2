import React from "react"
import styled from "styled-components"

import { Container } from "../../styles/shared"

import Nav from "./nav"
import Navbar from "./mobileNav"
import Footer from "./footer"
import GlobalStyle from "../../styles/globalStyles"
import SEO from "../global/SEO"
import PageHeader from "./pageHeader"

const StyledLayout = styled.div`
  background: ${props => (props.background ? props.background : "transparent")};
  width: ${props => (props.width ? props.width : "100%")};
  height: ${props => (props.height ? props.height : "auto")};
  display: ${props => (props.display ? props.display : "flex")};
  flex-direction: ${props =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: 96.578px 0 0 0;
  border: ${props => (props.border ? props.border : "none")};
  flex-grow: ${props => (props.flexGrow ? props.flexGrow : "")};
  background-position: ${props =>
    props.backgroundPos ? props.backgroundPos : ""};
  background-size: cover;
  box-sizing: ${props => (props.boxSizing ? props.boxSizing : "border-box")};
  min-height: ${props =>
    props.minHeight ? props.minHeight : "calc(100vh - 96.578px)"};
  min-width: ${props => (props.minWidth ? props.minWidth : "unset")};
  max-height: ${props => (props.maxHeight ? props.maxHeight : "unset")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "unset")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "unset")};
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  box-sizing: border-box;
  @media screen and (max-width: 960px) {
    font-size: 13px;
    margin: 96.578px 0 0 0px;
  }
  @media screen and (max-width: 725px) {
    margin: 55px 0 0 0px;
  }
`

const Layout = props => {
  return (
    <StyledLayout
      flexDirection="column"
      className="pageLayoutContainer"
      {...props}
    >
      <Container
        other="flex-grow:1"
        flexDirection="column"
        className="flexGrowBox"
        justifyContent="flex-start"
      >
        <SEO title={props.title} />
        <GlobalStyle />
        <Nav pageName={props.pageName} />
        <Navbar pageName={props.pageName} />
        {props.children}
      </Container>
      <Footer />
    </StyledLayout>
  )
}

export default Layout
