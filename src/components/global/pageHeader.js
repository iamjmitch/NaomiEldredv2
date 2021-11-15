import React from "react"
import styled from "styled-components"
import { Container, HeadingH1, Paragraph } from "../../styles/shared"

// --------Turned off for now ---------

// const ImgContainer = styled(Container)`
//   height: 250px;
//   margin-top: 5px;
//   overflow: hidden;
//   max-width: 1280px;
//   background-position: center;
//   @media screen and (max-width: 725px) {
//     height: 175px;
//   }
//   @media screen and (max-width: 500px) {
//     height: 100px;
//   }
// `

const HeaderContainer = styled(Container)`
  flex-direction: column;
  h1 {
    font-size: 50px;
  }
  @media screen and (max-width: 500px) {
    .hide {
      display: none;
    }
    h1 {
      padding: 25px 0 !important;
      font-size: 40px;
    }
  }
`

const PageHeader = props => {
  return (
    <HeaderContainer>
      {/* <Container className="hide">
        <ImgContainer background={`url(${props.img})`}></ImgContainer>
      </Container> */}
      <HeadingH1 padding="50px 0" color="black">
        {props.title}
      </HeadingH1>
      {props.title != "Contact Naomi" && (
        <Paragraph
          fontSize="12px"
          lineHeight="30px"
          textAlign="center"
          padding="0 10px 50px 10px"
          data-sal="slide-right"
          data-sal-delay="100"
          data-sal-easing="ease"
          other="b{font-weight:600;color:rgb(196, 70, 119); font-size:1.2em;}"
        >
          <b>Please Note: Naomi is not currently taking on any new bookings</b>
        </Paragraph>
      )}
    </HeaderContainer>
  )
}

export default PageHeader
