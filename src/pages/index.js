import React from "react"
import styled from "styled-components"
import Layout from "../components/global/layout"
import Hero from "../components/home/hero"
import AboutMe from "../components/home/about"
import ServiceBoxContainer from "../components/home/services"
import CTA from "../components/home/cta"
import ContactForm from "../components/contact/contact"

import { Container } from "../styles/shared"

const StyledContainer = styled(Container)``

const IndexPage = () => {
  return (
    <Layout pageName="home" title="Home">
      <Hero />
      <StyledContainer background="white" flexDirection="column">
        <AboutMe />
        <CTA className="mobile" />
        <Container background="#e8e8e85c" margin="100px 0 0 0" padding="50px 0">
          <ServiceBoxContainer />
        </Container>

        <CTA className="desk" />
        <ContactForm></ContactForm>
      </StyledContainer>
    </Layout>
  )
}

export default IndexPage
