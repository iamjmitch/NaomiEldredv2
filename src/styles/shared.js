import { Link } from "gatsby"
import React from "react"

import styled from "styled-components"
import { NAVHOVER } from "./colors"
import { FONT_FAMILY, FONT_FAMILY_HEADING, WEIGHT } from "./typography"

export const Container = styled.div`
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
  ${props => props.media && `@media ${props.media}`};
  ${props => props.other && `${props.other}`};
`
export const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};
  font-family: ${props =>
    props.fontFamily ? props.fontFamily : FONT_FAMILY_HEADING};
  color: ${props => (props.color ? props.color : "black")};
  transition: ${props => (props.transition ? props.transition : "0.5s linear")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  border: ${props => (props.border ? props.border : "none")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "capitalize"};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : WEIGHT.BOLD)};
  &:hover {
    color: ${props => (props.hoverColor ? props.hoverColor : NAVHOVER)};
  }
`

export const ContainerGrid = styled.div`
  display: grid;
  grid-gap: ${props => (props.gridGap ? props.gridGap : "1px")};
  grid-template-columns: ${props =>
    props.gridTemplateCol ? props.gridTemplateCol : "50% 50%"};
  background: ${props => (props.background ? props.background : "transparent")};
  width: ${props => (props.width ? props.width : "100%")};
  max-width: ${props => (props.maxWidth ? props.maxWidth : "100%")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  justify-items: ${props =>
    props.justifyItems ? props.justifyItems : "center"};
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  border: ${props => (props.border ? props.border : "none")};
  align-items: ${props => (props.alignItems ? props.alignItems : "baseline")};
  box-sizing: ${props => (props.boxSizing ? props.boxSizing : "content-box")};
`
export const Paragraph = styled.p`
  font-family: ${props => (props.fontFamily ? props.fontFamily : FONT_FAMILY)};
  font-size: ${props => (props.fontSize ? props.fontSize : "20px")};
  padding: ${props => (props.padding ? props.padding : "10px")};
  margin: ${props => (props.margin ? props.margin : "0")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "capitalize"};
  color: ${props => (props.color ? props.color : "black")};
  text-align: ${props => (props.textAlign ? props.textAlign : "justify")};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "16px")};
  ${props => props.media && `@media ${props.media}`};
  ${props => props.other && `${props.other}`};
`

export const HeadingH1 = styled.h1`
  font-family: ${FONT_FAMILY_HEADING};
  font-size: ${props => (props.fontSize ? props.fontSize : "26px")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "uppercase"};
  color: ${props => (props.color ? props.color : NAVHOVER)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : WEIGHT.BOLD)};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : "normal"};
`
export const HeadingH2 = styled.h2`
  font-family: ${FONT_FAMILY_HEADING};
  font-size: ${props => (props.fontSize ? props.fontSize : "24px")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "uppercase"};
  color: ${props => (props.color ? props.color : NAVHOVER)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : WEIGHT.BOLD)};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : "normal"};
`
export const HeadingH3 = styled.h3`
  font-family: ${FONT_FAMILY_HEADING};
  font-size: ${props => (props.fontSize ? props.fontSize : "22px")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "uppercase"};
  color: ${props => (props.color ? props.color : NAVHOVER)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : WEIGHT.BOLD)};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : "normal"};
`
export const HeadingH4 = styled.h4`
  font-family: ${FONT_FAMILY_HEADING};
  font-size: ${props => (props.fontSize ? props.FontSize : "20px")};f
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};  
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "uppercase"};
  color: ${props => (props.color ? props.color : NAVHOVER)};
    font-weight: ${props =>
      props.fontWeight
        ? props.fontWeight
        : WEIGHT.BOLD};letter-spacing: ${props =>
  props.letterSpacing ? props.letterSpacing : "normal"};
`
export const HeadingH5 = styled.h5`
  font-family: ${FONT_FAMILY_HEADING};
  font-size: ${props => (props.fontSize ? props.fontSize : "18px")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "uppercase"};
  color: ${props => (props.color ? props.color : NAVHOVER)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : WEIGHT.BOLD)};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : "normal"};
`
