import React from "react"
import styled from "styled-components"

import { Container } from "../../styles/shared"

import Nav from "./nav"
import Navbar from "./mobileNav"
import Footer from "./footer"

const StyledLayout = styled(Container)`
  min-height: 100vh;
  width: 100%;
`

const Layout = props => {
  return (
    <StyledLayout flexDirection="column">
      <Nav pageName={props.pageName} />
      <Navbar pageName={props.pageName} />
      {props.children}
      <Footer />
    </StyledLayout>
  )
}

export default Layout
