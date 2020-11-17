import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import GlobalStyle from "../styles/globalStyles"
import AboutMe from "../components/about"
import { Container } from "../styles/shared"

const IndexPage = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Hero />
      <Container background="white" flexDirection="column">
      <AboutMe /><div>Hello</div>
      </Container>
      
    </Layout>
  )
}

export default IndexPage
