import React from "react"

import styled from "styled-components"

import Iamjmitch from "../../assets/svg/iamjmitch.svg"
import Facebook from "../../assets/svg/facebook.svg"
import Instagram from "../../assets/svg/instagram.svg"

import { Container, HeadingH5, Paragraph } from "../../styles/shared"
import { PINK } from "../../styles/colors"
import { FONT_FAMILY_HEADING } from "../../styles/typography"

const StyledFooter = styled(Container)`
  background: white;
  flex-direction: column;
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  padding: 20px 0;
  
  }
`

const SocialLink = styled.a`
  text-decoration: none;
  transition: 0.2s linear;
  svg {
    transition: 0.2s linear;
    display: inline-block;
    width: 40px;
    height: 40px;
    margin: 0 12px;
    opacity: 0.8;
    path {
      transition: 0.2s linear;
    }
    &:hover {
      path {
        fill: ${PINK};
        opacity: 1;
      }
    }
  }
`

const Footer = () => {
  const date = new Date()
  return (
    <Container flexDirection="column">
      <StyledFooter>
        <HeadingH5 fontSize="18px">Connect With Naomi</HeadingH5>
        <Container padding="20px 0">
          <SocialLink
            href="https://www.facebook.com/NaomiEldredMakeup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </SocialLink>
          <SocialLink
            href="https://www.instagram.com/naomieldredmakeup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </SocialLink>
        </Container>

        <Paragraph
          fontSize="14px"
          fontFamily={FONT_FAMILY_HEADING}
          padding="0"
          textAlign="center"
        >
          Naomi eldred - ©{date.getFullYear()}.<br></br> All rights reserved.
        </Paragraph>
      </StyledFooter>
      <Container background="#232323" padding="10px 0">
        <a
          className="iamjmitch"
          href="https://iamjmitch.com"
          target="_blank"
          rel="noreferrer"
        >
          <Iamjmitch />
        </a>
      </Container>
    </Container>
  )
}

export default Footer
