import React from "react"
import styled from "styled-components"

import Nav from "../components/nav"

const StyledLayout = styled.div`
  min-height: 100vh;
  width: 100%;
`

const Layout = () => {
  return (
    <StyledLayout>
      <Nav />
    </StyledLayout>
  )
}

export default Layout
