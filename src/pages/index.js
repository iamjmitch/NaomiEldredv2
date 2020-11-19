import React from "react"
import Layout from "../components/global/layout"
import Hero from "../components/home/hero"
import AboutMe from "../components/home/about"
import ServiceBoxContainer from "../components/home/services"

import { Container } from "../styles/shared"

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Hero />
      <Container background="white" flexDirection="column">
        <AboutMe />
        <ServiceBoxContainer />
      </Container>
    </Layout>
  )
}

export default IndexPage
