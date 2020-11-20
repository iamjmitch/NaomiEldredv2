import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, ContainerGrid, Paragraph } from "../styles/shared"

import Layout from "../components/global/layout"
import PageHeader from "../components/global/pageHeader"
import { SERVICECARDINFO } from "../components/services/serviceCardInfo"
import ServiceCard from "../components/services/serviceCard"
import MobileServiceCard from "../components/services/mobileServiceCard"

const StyledContainerGrid = styled(ContainerGrid)`
  @media screen and (max-width: 680px) {
    max-width: 560px;
    grid-gap: 40px;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`

const StyledMobileContainer = styled(Container)`
  flex-direction: column;
  padding: 0 5px;
  margin-bottom: px;
  display: none;
  @media screen and (max-width: 500px) {
    display: flex;
  }
`

const ServicesPage = props => {
  return (
    <Layout margin="112.578px 0 0 0" pageName="services" title="Services">
      <PageHeader
        title="Services"
        img="https://naomieldred.com/wp-content/uploads/2018/06/20180604_121945-1.jpg"
      />

      {/* ------------------------------------------------ */}
      <StyledContainerGrid
        maxWidth="750px"
        gridTemplateCol="repeat(auto-fit,minmax(200px, 1fr))"
        gridGap="20px"
        justifyItems="center"
        alignItems="center"
        boxSizing="border-box"
        padding="0 20px"
        margin="0 0 20px 0"
      >
        {SERVICECARDINFO.map(item => {
          return (
            <ServiceCard
              cardTitle={item.cardTitle}
              cardPrice={item.cardPrice}
              cardSubText={item.cardSubText}
              cardSmallText={item.cardSmallText}
            />
          )
        })}
      </StyledContainerGrid>
      {/* ---------------------------------------------- */}
      <StyledMobileContainer>
        {SERVICECARDINFO.map(item => {
          return (
            <MobileServiceCard
              cardTitle={item.cardTitle}
              cardPrice={item.cardPrice}
              cardSubText={item.cardSubText}
              cardSmallText={item.cardSmallText}
            />
          )
        })}
      </StyledMobileContainer>
      <Container
        other="border-top: 1px solid lightgrey; margin-top:10px"
        media="screen and (max-width:500px){border:none;}"
      >
        <Container
          flexDirection="column"
          padding="0 0 20px 0"
          maxWidth="900px"
          alignItems="center"
          media="screen and (max-width:500px){align-items:flex-start;}"
        >
          <Paragraph
            padding="20px "
            lineHeight="30px"
            media="screen and (max-width:500px){font-size:22px}"
            other="font-weight:700"
          >
            Notes:
          </Paragraph>
          <Paragraph
            padding="0 20px"
            lineHeight="30px"
            textAlign="center"
            media="screen and (max-width:500px){font-size:20px;text-align:left;}"
          >
            Prices current as of 01 June 2018 and subject to change without
            notice.
          </Paragraph>
          <Paragraph
            padding="50px 20px 20px 20px"
            lineHeight="30px"
            media="screen and (max-width:500px){font-size:22px}"
            other="font-weight:700"
          >
            Trials:
          </Paragraph>
          <Paragraph
            padding="0 20px"
            lineHeight="30px"
            media="screen and (max-width:500px){font-size:20px;text-align:left;}"
            textAlign="center"
          >
            All makeup trials are at the same cost as the actual makeup
            application. <br></br>Naomi will work with you to create a look you
            love and won’t let you leave until you are more than 100% happy.
            <br></br> If you have an idea of the makeup look you would like,
            please feel free to bring along photos for your inspiration.
            <br></br>
            Please allow up to 1.5 hours for your makeup trial as this is time
            to really perfect and love your look.
          </Paragraph>
          <Paragraph
            padding="50px 20px 20px 20px"
            lineHeight="30px"
            media="screen and (max-width:500px){font-size:22px}"
            other="font-weight:700"
          >
            Travel:
          </Paragraph>
          <Paragraph
            padding="0 20px"
            lineHeight="30px"
            media="screen and (max-width:500px){font-size:20px;text-align:left;}"
            textAlign="center"
          >
            All bridal trials, special occasion and formal makeup appointments
            are conducted at her home studio in Mango Hill.<br></br>
            Naomi will work with you to create a look you love and won’t let you
            leave until you are more than 100% happy.
            <br></br>Mobile services are available to groups at a minimum of 2
            people or more at the one location (e.g wedding parties, school
            formal groups, etc),
            <br></br>Travel fees may apply depending on distance.
          </Paragraph>
        </Container>
      </Container>
    </Layout>
  )
}

export default ServicesPage
