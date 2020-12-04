import React from "react"
import styled from "styled-components"
import Layout from "../components/global/layout"
import Hero from "../components/home/hero"
import AboutMe from "../components/home/about"
import ServiceBoxContainer from "../components/home/services"
import CTA from "../components/home/cta"
import InstaGallery from "../components/home/insta"

import { Container } from "../styles/shared"

const StyledContainer = styled(Container)``

const IndexPage = () => {
  return (
    <Layout pageName="home" title="">
      <Hero />
      <StyledContainer background="white" flexDirection="column">
        <AboutMe />
        <CTA className="mobile" />
        <Container
          margin="0"
          padding="50px 0"
          media="screen and (max-width: 725px){margin-top: 0;background: white;}"
        >
          <ServiceBoxContainer />
        </Container>
        <CTA className="desk" />

        <InstaGallery />
      </StyledContainer>
    </Layout>
  )
}

export default IndexPage
