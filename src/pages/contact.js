import React from "react"

import { Paragraph } from "../styles/shared"
import Layout from "../components/global/layout"
import PageHeader from "../components/global/pageHeader"
import ContactForm from "../components/contact/contact"

const ContactPage = props => {
  return (
    <Layout
      margin="112.578px 0 0 0"
      pageName="contact"
      title="Contact Naomi"
      description="Book an appointment - Naomi Eldred Makeup Artist North lakes and Mango Hill"
    >
      <PageHeader title="Contact Naomi" />
      <Paragraph
        fontSize="18px"
        lineHeight="30px"
        textAlign="center"
        padding="0 10px 50px 10px"
        data-sal="slide-right"
        data-sal-delay="100"
        data-sal-easing="ease"
      >
        Please use the below form to get in contact with Naomi. <br></br>
        <br></br> Due to COVID-19, Naomi is not currently taking bookings.
      </Paragraph>
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
