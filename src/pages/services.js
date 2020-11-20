import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, ContainerGrid } from "../styles/shared"

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
  margin-bottom: 50px;
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
        img="https://images.unsplash.com/photo-1533562389935-457b1ae48a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
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
        margin="0 0 50px 0"
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
    </Layout>
  )
}

export default ServicesPage
