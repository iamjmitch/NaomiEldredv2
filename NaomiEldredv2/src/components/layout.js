import React from "react"
import styled from "styled-components"

import Nav from "../components/nav"

const StyledLayout = styled.div`
  min-height: 100vh;
  width: 100%;
`

const Layout = (props) => {
  return (
    <StyledLayout>
      <Nav />
      {props.children}
    </StyledLayout>
  )
}

export default Layout
