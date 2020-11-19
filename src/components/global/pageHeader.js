import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "./layout"

import { Container, HeadingH1, Paragraph } from "../../styles/shared"
import { NAVHOVER } from "../../styles/colors"
import { FONT_FAMILY_HEADING, WEIGHT } from "../../styles/typography"

const StyledPageHeader = styled(Container)``

const PageHeader = props => {
  return (
    <StyledPageHeader>
      <HeadingH1>{props.title}</HeadingH1>
    </StyledPageHeader>
  )
}

export default PageHeader
