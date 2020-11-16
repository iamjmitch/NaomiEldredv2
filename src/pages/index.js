import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import GlobalStyle from "../styles/globalStyles"
import AboutMe from "../components/about"

const IndexPage = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Hero />
      <AboutMe />
      <div>Hello</div>
    </Layout>
  )
}

export default IndexPage
