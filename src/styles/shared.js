import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
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
`

export const ContainerGrid = styled.div`
  display: grid;
  grid-gap: ${props => (props.gridGap ? props.gridGap : "1px")};
  grid-template-columns: ${props =>
    props.gridTemplateCol ? props.gridTemplateCol : "50% 50%"};
  background: ${props => (props.background ? props.background : "transparent")};
  width: ${props => (props.width ? props.width : "100%")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${props => (props.alignItems ? props.alignItems : "center")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  border: ${props => (props.border ? props.border : "none")};
`
export const Paragraph = styled.p`
  font-family: ${FONT_FAMILY};
  font-size: ${props => (props.fontSize ? props.fontSize : "16px")};
  padding: ${props => (props.padding ? props.padding : "10px")};
  margin: ${props => (props.margin ? props.margin : "0")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "capitalize"};
  color: ${props => (props.color ? props.color : "black")};
  text-align: ${props => (props.textAlign ? props.textAlign : "justify")};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "16px")};
`

export const HeadingH1 = styled.h1`
  font-family: ${FONT_FAMILY_HEADING};
  font-size: ${props => (props.fontSize ? props.fontSize : "26px")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "uppercase"};
  color: ${props => (props.color ? props.color : "black")};
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
  color: ${props => (props.color ? props.color : "black")};
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
  color: ${props => (props.color ? props.color : "black")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : WEIGHT.BOLD)};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : "normal"};
`
export const HeadingH4 = styled.h4`
  font-family: ${FONT_FAMILY_HEADING};
  font-size: ${props => (props.fontSize ? props.FontSize : "20px")};f
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props =>
    props.margin ? props.margin : "0"};  text-transform: ${props =>
  props.textTransform ? props.textTransform : "uppercase"};
  color: ${props =>
    props.color ? props.color : "black"};font-weight: ${props =>
  props.fontWeight ? props.fontWeight : WEIGHT.BOLD};letter-spacing: ${props =>
  props.letterSpacing ? props.letterSpacing : "normal"};
`
export const HeadingH5 = styled.h5`
  font-family: ${FONT_FAMILY_HEADING};
  font-size: ${props => (props.fontSize ? props.fontSize : "18px")};
  padding: ${props => (props.padding ? props.padding : "0")};
  margin: ${props => (props.margin ? props.margin : "0")};
  text-transform: ${props =>
    props.textTransform ? props.textTransform : "uppercase"};
  color: ${props => (props.color ? props.color : "black")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : WEIGHT.BOLD)};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : "normal"};
`
