import React from "react"
import styled from "styled-components"

import { Container } from "../../styles/shared"

import Nav from "./nav"
import Navbar from "./mobileNav"
import Footer from "./footer"
import GlobalStyle from "../../styles/globalStyles"

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
  margin: ${props => (props.margin ? props.margin : "0")};
  border: ${props => (props.border ? props.border : "none")};
  flex-grow: ${props => (props.flexGrow ? props.flexGrow : "")};
  background-position: ${props =>
    props.backgroundPos ? props.backgroundPos : ""};
  background-size: cover;
  box-sizing: ${props => (props.boxSizing ? props.boxSizing : "border-box")};
  min-height: ${props => (props.minHeight ? props.minHeight : "unset")};
  min-width: ${props => (props.minWidth ? props.minWidth : "unset")};
  max-height: ${props => (props.maxHeight ? props.maxHeight : "unset")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "unset")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "unset")};
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
`

const Layout = props => {
  return (
    <StyledLayout
      flexDirection="column"
      className="pageLayoutContainer"
      {...props}
    >
      <GlobalStyle />
      <Nav pageName={props.pageName} />
      <Navbar pageName={props.pageName} />
      {props.children}
      <Footer />
    </StyledLayout>
  )
}

export default Layout
