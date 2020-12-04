import React from "react"

import Layout from "../components/global/layout"
import PageHeader from "../components/global/pageHeader"
import AboutMe from "../components/about/about"

const AboutPage = props => {
  return (
    <Layout margin="112.578px 0 0 0" pageName="about" title="About Naomi">
      <PageHeader
        title="About Naomi"
        img="https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      />
      <AboutMe />
    </Layout>
  )
}

export default AboutPage
