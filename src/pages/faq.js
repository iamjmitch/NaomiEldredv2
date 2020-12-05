import React from "react"
import { Container, Paragraph } from "../styles/shared"
import Layout from "../components/global/layout"
import PageHeader from "../components/global/pageHeader"
import SimpleAccordion from "../components/faq/accordion"
import { FAQLIST } from "../components/faq/faqList"

const FaqPage = props => {
  return (
    <Layout
      margin="112.578px 0 0 0"
      pageName="faq"
      title="FAQ"
      description="Frequently Asked Questions - Naomi Eldred Makeup Artist North lakes and Mango Hill"
    >
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
          data-sal="slide-right"
          data-sal-delay="400"
          data-sal-easing="ease"
        >
          Below you will find a list of the most asked questions by Naomi's
          clients.
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
