import axios from "axios"
import React, { useState } from "react"
import styled from "styled-components"

import { Container, Paragraph } from "../../styles/shared"

const StyledThumbnail = styled(Container)`
  width: 200px;
  height: 200px;
  background: ${props => props.thumb};
`

const Thumbnail = props => {
  return <StyledThumbnail></StyledThumbnail>
}

export default Thumbnail
