import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Container, HeadingH1, Paragraph } from "../styles/shared"
import Layout from "../components/global/layout"
import PageHeader from "../components/global/pageHeader"
import SimpleAccordion from "../components/faq/accordion"
import { FAQLIST } from "../components/faq/faqList"

const FaqPage = props => {
  return (
    <Layout margin="112.578px 0 0 0" pageName="faq" title="FAQ">
      <PageHeader title="FAQ" />
      <Container
        maxWidth="800px"
        flexDirection="column"
        margin=" 0 0 50px 0"
        media="screen and (max-width:500px){padding: 0 20px}"
      >
        <Paragraph
          fontSize="18px"
          lineHeight="30px"
          textAlign="center"
          padding="0 10px 50px 10px"
        >
          Below you will find a list of the most asked questions by clients.{" "}
          <br></br> If you have any further questions, Please don't hesitate to
          get in contact
        </Paragraph>
        {FAQLIST.map(faq => (
          <SimpleAccordion question={faq.question} answer={faq.answer} />
        ))}
      </Container>
    </Layout>
  )
}

export default FaqPage
