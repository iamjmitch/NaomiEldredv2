import React from "react"

import styled from "styled-components"
import { Container, ContainerGrid } from "../styles/shared"

import Layout from "../components/global/layout"
import PageHeader from "../components/global/pageHeader"
import {
  SERVICECARDINFO,
  SERVICENOTES,
} from "../components/services/serviceCardInfo"
import ServiceCard from "../components/services/serviceCard"
import MobileServiceCard from "../components/services/mobileServiceCard"
import SimpleAccordion from "../components/faq/accordion"

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
  padding: 0 20px;
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
        maxWidth="855px"
        gridTemplateCol="repeat(auto-fit,minmax(220px, 1fr))"
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
        maxWidth="855px"
        flexDirection="column"
        padding="0 20px"
        margin="0 0 50px 0"
        other="@media screen and (max-width:500px){margin-top:0px;}"
      >
        {SERVICENOTES.map(faq => (
          <SimpleAccordion question={faq.question} answer={faq.answer} />
        ))}
      </Container>
    </Layout>
  )
}

export default ServicesPage
