import React from "react"
import styled from "styled-components"
import Logo from "../assets/svg/heroLogo.svg"

const svgContainer = styled.div`
  width: 50%;

  svg {
    width: 50%;
    @-webkit-keyframes animate-svg-fill-1 {
      0% {
        fill: transparent;
      }

      100% {
        fill: rgb(255, 255, 255);
      }
    }

    @keyframes animate-svg-fill-1 {
      0% {
        fill: transparent;
      }

      100% {
        fill: rgb(255, 255, 255);
      }
    }

    .heroSVG-1 {
      -webkit-animation: animate-svg-fill-1 1s ease-in 0s both;
      animation: animate-svg-fill-1 1s ease-in 0s both;
    }

    @-webkit-keyframes animate-svg-fill-2 {
      0% {
        fill: transparent;
      }

      100% {
        fill: rgb(255, 255, 255);
      }
    }

    @keyframes animate-svg-fill-2 {
      0% {
        fill: transparent;
      }

      100% {
        fill: rgb(255, 255, 255);
      }
    }

    .heroSVG-2 {
      -webkit-animation: animate-svg-fill-2 1s ease-in 0.2s both;
      animation: animate-svg-fill-2 1s ease-in 0.2s both;
    }
  }
`

const SvgExport = () => {
  return (
    <svgContainer>
      <Logo />
    </svgContainer>
  )
}

export default SvgExport
