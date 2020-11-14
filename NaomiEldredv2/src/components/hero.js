import React from "react"
import styled from "styled-components"

import { Container } from "../styles/shared"
import { NAVTRANSPARENT, NAVSOLID, WHITE, NAVHOVER } from "../styles/colors"
import { FONT_FAMILY_HEADING, WEIGHT } from "../styles/typography"

import heroImg from "../assets/img/home/hero.jpg"

const StyledContainer = styled(Container)`
background-repeat: no-repeat;
background-size: cover;
`

const Hero = () =>{
return(
    <StyledContainer height="100vh" background = {`url(${heroImg})`}>
        

    </StyledContainer>



)

}

export default Hero